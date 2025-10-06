const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create checkout session endpoint with real Stripe integration
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { lineItems, shippingInfo, userId, successUrl, cancelUrl } = req.body;

    // Convert cart items to Stripe line items format
    const stripeLineItems = lineItems.map(item => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
          // Remove images array to avoid Stripe validation errors
          // images: [item.image], // Commented out - causes validation errors
          description: `Size: ${item.size || 'N/A'}`,
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    console.log('Creating Stripe session with items:', stripeLineItems.length);

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: stripeLineItems,
      mode: 'payment',
      success_url: successUrl || `${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${req.headers.origin}/checkout/cancel`,
      customer_email: shippingInfo.email,
      metadata: {
        customerName: shippingInfo.name,
        customerAddress: shippingInfo.address,
        customerCity: shippingInfo.city,
        customerPostalCode: shippingInfo.postalCode,
        customerCountry: shippingInfo.country,
        userId: userId || 'guest',
      },
      shipping_address_collection: {
        allowed_countries: ['IN', 'US', 'CA', 'GB', 'AU'], // Add more countries as needed
      },
    });

    console.log('✅ Stripe checkout session created successfully:', {
      sessionId: session.id,
      customerName: shippingInfo.name,
      customerEmail: shippingInfo.email,
      amount: session.amount_total / 100,
      currency: session.currency
    });

    res.json({ 
      sessionId: session.id,
      url: session.url,
      message: 'Stripe checkout session created successfully',
      status: 'success'
    });
  } catch (error) {
    console.error('❌ Error creating Stripe checkout session:', error);
    res.status(500).json({ 
      error: 'Failed to create checkout session',
      message: error.message,
      details: error.raw ? error.raw.message : 'Unknown error'
    });
  }
});

// Webhook endpoint to handle Stripe events
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET; // Provided via env

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('✅ Payment completed for session:', session.id);
      // Here you can add logic to save order to database, send confirmation email, etc.
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('✅ Payment succeeded:', paymentIntent.id);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.json({ received: true });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Stripe payment server is running',
    paymentStatus: 'Real Stripe integration active',
    timestamp: new Date().toISOString()
  });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Stripe server is working!',
    status: 'success'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Stripe payment server running on port ${PORT}`);
  console.log('✅ Real Stripe integration is ready');
  console.log('💡 Use the "Pay with Stripe" button for real payments');
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
}); 