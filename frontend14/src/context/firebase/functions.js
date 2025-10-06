import { functions } from './firebase';
import { httpsCallable } from 'firebase/functions';

// For development - connect to emulator if needed
if (process.env.NODE_ENV === 'development') {
  import('firebase/functions').then(({ connectFunctionsEmulator }) => {
    connectFunctionsEmulator(functions, 'localhost', 5001);
  });
}

// Payment processing function
export const processPayment = async (amount) => {
  try {
    const callable = httpsCallable(functions, 'processPayment');
    const result = await callable({ amount });
    return result.data;
  } catch (error) {
    console.error('Payment error:', error);
    throw new Error(error.message || 'Payment processing failed');
  }
};

// Create Stripe payment intent
export const createStripePaymentIntent = async (amount) => {
  try {
    const callable = httpsCallable(functions, 'createPaymentIntent');
    const result = await callable({ amount });
    return result.data;
  } catch (error) {
    console.error('Payment intent error:', error);
    throw new Error(error.message || 'Failed to create payment intent');
  }
};

// ✅ NEW: Generate invoice (used in CheckoutSuccess.jsx)
export const generateInvoice = async (sessionId) => {
  try {
    const callable = httpsCallable(functions, 'generateInvoice');
    const result = await callable({ sessionId });
    return result.data; // expected to include { url }
  } catch (error) {
    console.error('Invoice generation error:', error);
    throw new Error(error.message || 'Failed to generate invoice');
  }
};
