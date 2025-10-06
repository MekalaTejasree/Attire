# Payment System Setup

## Overview

This e-commerce application now has a working payment system with two options:

1. **Stripe Checkout** - Full payment processing with Stripe
2. **Demo Payment** - Simulated payment for testing

## Setup Instructions

### 1. Stripe Setup (Optional)

If you want to use real Stripe payments:

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Update the following files with your keys:
   - `src/pages/Checkout/Checkout.jsx` - Replace the `pk_test_...` key
   - `server.js` - Replace the `sk_test_...` key

### 2. Running the Application

#### Option A: Full Setup (Frontend + Backend)

```bash
npm run dev
```

This will start both the React frontend (port 3000) and the Express backend (port 5000).

#### Option B: Frontend Only (Demo Mode)

```bash
npm start
```

This will start only the React frontend. Use the "Demo Payment" button for testing.

## How to Test Payments

### Demo Payment (Recommended for Testing)

1. Add items to your cart
2. Go to checkout
3. Fill in shipping information
4. Click "Demo Payment (Skip Stripe)" button
5. You'll be redirected to the success page

### Stripe Payment (Real Payments)

1. Add items to your cart
2. Go to checkout
3. Fill in shipping information
4. Click "Proceed to Payment"
5. You'll be redirected to Stripe's hosted checkout
6. Use test card: 4242 4242 4242 4242
7. Any future expiry date and any 3-digit CVC

## Test Card Numbers

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Requires Authentication**: 4000 0025 0000 3155

## Features

### Checkout Page

- Shipping information form
- Order summary with items and total
- Two payment options (Stripe and Demo)

### Success Page

- Order confirmation
- Order details (ID, total, items, shipping info)
- Continue shopping button

### Cancel Page

- Payment cancellation message
- Options to return to cart or continue shopping

## File Structure

```
src/pages/Checkout/
├── Checkout.jsx          # Main checkout page
├── CheckoutSuccess.jsx   # Success page
├── CheckoutCancel.jsx    # Cancel page
└── Checkout.css          # Styles

server.js                 # Express backend for Stripe
```

## Troubleshooting

### Payment Not Working

1. Make sure both frontend and backend are running (`npm run dev`)
2. Check browser console for errors
3. Verify Stripe keys are correct
4. Use demo payment for testing

### Server Not Starting

1. Check if port 5000 is available
2. Install dependencies: `npm install`
3. Check for any error messages in terminal

### CORS Issues

The backend is configured with CORS to allow requests from the frontend. If you encounter CORS errors, make sure the frontend is running on the correct port.

## Security Notes

- Never commit real Stripe keys to version control
- Use environment variables for production
- Test keys are safe to use in development
- Always use HTTPS in production

## Environment Variables (Optional)

Create a `.env` file in the root directory:

```
STRIPE_PUBLIC_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

Then update the code to use `process.env.STRIPE_PUBLIC_KEY` and `process.env.STRIPE_SECRET_KEY`.
