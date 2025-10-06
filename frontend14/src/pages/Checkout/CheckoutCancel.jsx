import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutCancel.css';

const CheckoutCancel = () => {
  const navigate = useNavigate();

  return (
    <div className="cancel-container">
      <div className="cancel-card">
        <div className="cancel-icon">❌</div>
        <h1>Payment Cancelled</h1>
        <p>Your payment was cancelled or failed.</p>
        <p>No charges were made to your account.</p>
        
        <div className="cancel-actions">
          <button 
            onClick={() => navigate('/cart')} 
            className="retry-button"
          >
            🛒 Return to Cart
          </button>
          
          <button 
            onClick={() => navigate('/')} 
            className="continue-shopping"
          >
            🏠 Continue Shopping
          </button>
        </div>
        
        <div className="help-info">
          <h3>Need Help?</h3>
          <p>If you're having trouble with payments:</p>
          <ul>
            <li>Check your internet connection</li>
            <li>Try a different payment method</li>
            <li>Contact our support team</li>
            <li>Use the demo payment options for testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCancel;