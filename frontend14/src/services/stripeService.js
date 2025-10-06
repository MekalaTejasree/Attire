import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with publishable key from environment
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// Create checkout session
export const createCheckoutSession = async (cartItems, shippingInfo, userId = null) => {
  try {
    console.log('Creating checkout session with:', {
      items: cartItems.length,
      customer: shippingInfo.name,
      email: shippingInfo.email
    });

    const response = await fetch('http://localhost:5000/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lineItems: cartItems,
        shippingInfo,
        userId,
        successUrl: `${window.location.origin}/checkout/success`,
        cancelUrl: `${window.location.origin}/checkout/cancel`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Server error:', data);
      throw new Error(data.message || 'Failed to create checkout session');
    }

    console.log('Checkout session created successfully:', data);
    return data;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

// Redirect to Stripe checkout
export const redirectToCheckout = async (cartItems, shippingInfo, userId = null) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    // Create checkout session
    const { url } = await createCheckoutSession(cartItems, shippingInfo, userId);

    if (url) {
      console.log('Redirecting to Stripe checkout:', url);
      // Redirect to Stripe checkout
      window.location.href = url;
    } else {
      throw new Error('No checkout URL received from server');
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    throw error;
  }
};

// Get Stripe instance
export const getStripe = () => stripePromise;

const stripeService = {
  createCheckoutSession,
  redirectToCheckout,
  getStripe,
};

export default stripeService; 