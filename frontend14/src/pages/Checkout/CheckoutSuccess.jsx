import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/authcontext';
import { useCart } from '../../context/CartContext';
import './CheckoutSuccess.css';

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { currentUser } = useAuth();
  const { clearCart, cartItems } = useCart();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stripeSessionId, setStripeSessionId] = useState(null);

  useEffect(() => {
    // Check for Stripe session ID in URL
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      setStripeSessionId(sessionId);
      // For Stripe payments, create order data from session
      const stripeOrderData = {
        orderId: sessionId,
        paymentStatus: 'completed',
        timestamp: new Date().toISOString(),
        paymentMethod: 'Stripe Payment',
        total: 0, // Will be updated from session data if needed
        cartItems: [], // Will be updated from session data if needed
        shippingInfo: {} // Will be updated from session data if needed
      };
      setOrder(stripeOrderData);
      setLoading(false);
      
      // Clear cart for Stripe payments
      const clearCartAfterPayment = async () => {
        try {
          await clearCart();
          console.log('✅ Cart cleared after Stripe payment');
        } catch (error) {
          console.error('Error clearing cart:', error);
        }
      };
      
      clearCartAfterPayment();
      
    } else {
      // No session ID means user came here directly
      navigate('/');
      return;
    }
  }, [navigate, searchParams, clearCart]);

  // Additional effect to ensure cart is cleared
  useEffect(() => {
    if (cartItems.length > 0) {
      console.log('🔄 Clearing cart items:', cartItems.length);
      const clearRemainingItems = async () => {
        try {
          await clearCart();
        } catch (error) {
          console.error('Error clearing remaining items:', error);
        }
      };
      clearRemainingItems();
    }
  }, [cartItems.length, clearCart]);

  if (loading) {
    return <div className="loading">Processing your order...</div>;
  }

  if (!order) {
    return <div className="error">No order found</div>;
  }

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase!</p>
        <p>A confirmation email has been sent to {currentUser?.email || 'your email'}.</p>
        
        <div className="order-details">
          <h3>Order Details</h3>
          <p><strong>Order ID:</strong> {order.orderId}</p>
          {order.total > 0 && <p><strong>Order Total:</strong> ₹{order.total.toFixed(2)}</p>}
          {order.cartItems && order.cartItems.length > 0 && (
            <p><strong>Items:</strong> {order.cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
          )}
          <p><strong>Payment Status:</strong> <span style={{color: 'green'}}>{order.paymentStatus}</span></p>
          <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
          <p><strong>Order Date:</strong> {new Date(order.timestamp).toLocaleDateString()}</p>
          {stripeSessionId && (
            <p><strong>Stripe Session:</strong> {stripeSessionId}</p>
          )}
          <p><strong>Cart Status:</strong> <span style={{color: 'green'}}>Cleared ({cartItems.length} items remaining)</span></p>
        </div>

        {order.shippingInfo && Object.keys(order.shippingInfo).length > 0 && (
          <div className="shipping-info">
            <h3>Shipping Information</h3>
            <p><strong>Name:</strong> {order.shippingInfo.name}</p>
            <p><strong>Email:</strong> {order.shippingInfo.email}</p>
            <p><strong>Address:</strong> {order.shippingInfo.address}</p>
            <p><strong>City:</strong> {order.shippingInfo.city}</p>
            <p><strong>Postal Code:</strong> {order.shippingInfo.postalCode}</p>
            <p><strong>Country:</strong> {order.shippingInfo.country}</p>
          </div>
        )}

        {order.cartItems && order.cartItems.length > 0 && (
          <div className="order-items">
            <h3>Order Items</h3>
            {order.cartItems.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <p><strong>{item.name}</strong></p>
                  <p>Size: {item.size || 'N/A'}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <button 
          onClick={() => navigate('/')} 
          className="continue-shopping"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;