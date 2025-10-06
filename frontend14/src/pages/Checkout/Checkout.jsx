import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/authcontext';
import { useNavigate } from 'react-router-dom';
import { redirectToCheckout } from '../../services/stripeService';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, subtotal, total } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  useEffect(() => {
    if (currentUser) {
      setShippingInfo(prev => ({
        ...prev,
        name: currentUser.displayName || '',
        email: currentUser.email || ''
      }));
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  // Stripe payment handler
  const handleStripePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate shipping info
      if (!shippingInfo.name || !shippingInfo.email || !shippingInfo.address) {
        throw new Error('Please fill in all required shipping information');
      }

      // Redirect to Stripe checkout
      await redirectToCheckout(cartItems, shippingInfo, currentUser?.uid);
      
    } catch (err) {
      console.error('Stripe payment error:', err);
      setError(err.message || 'An error occurred during payment. Please try again.');
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate('/')} className="continue-shopping">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <form onSubmit={handleStripePayment} className="shipping-form">
          <h3>Shipping Information</h3>
          
          <div style={{
            backgroundColor: '#e8f5e8',
            border: '1px solid #4caf50',
            borderRadius: '4px',
            padding: '12px',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            💳 <strong>Secure Payment with Stripe</strong>
            <br/>• Real secure payment processing
            <br/>• Supports all major credit/debit cards
            <br/>• Automatic fraud protection
            <br/>• PCI compliant security
          </div>

          <input type="text" name="name" value={shippingInfo.name} onChange={handleInputChange} placeholder="Full Name" required />
          <input type="email" name="email" value={shippingInfo.email} onChange={handleInputChange} placeholder="Email" required />
          <input type="text" name="address" value={shippingInfo.address} onChange={handleInputChange} placeholder="Address" required />
          <input type="text" name="city" value={shippingInfo.city} onChange={handleInputChange} placeholder="City" required />
          <input type="text" name="postalCode" value={shippingInfo.postalCode} onChange={handleInputChange} placeholder="Postal Code" required />
          <input type="text" name="country" value={shippingInfo.country} onChange={handleInputChange} placeholder="Country" required />

          <div className="order-summary-mobile">
            <h3>Order Summary</h3>
            <p>Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Shipping: Free</p>
            <p className="total">Total: ₹{total.toFixed(2)}</p>
          </div>

          {/* Stripe Payment Button */}
          <button type="submit" className="pay-button" disabled={loading}>
            {loading ? 'Processing...' : '💳 Pay with Stripe (Secure)'}
          </button>

          {error && (
            <div className="error-message" style={{
              backgroundColor: '#ffebee',
              color: '#c62828',
              padding: '12px',
              borderRadius: '4px',
              marginTop: '10px',
              border: '1px solid #ffcdd2'
            }}>
              ❌ {error}
            </div>
          )}
        </form>

        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.map(item => (
            <div key={`${item.id}-${item.size}`} className="order-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>Size: {item.size || 'N/A'}</p>
                <p>Qty: {item.quantity}</p>
                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
