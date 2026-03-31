const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// @desc    Create a Stripe Checkout Session
// @route   POST /api/payment/create-checkout-session
exports.createCheckoutSession = async (req, res) => {
  try {
    const { items, customer_email } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, error: 'No items in the session payload' });
    }

    const lineItems = items.map(item => ({
      price_data: {
        currency: process.env.STRIPE_CURRENCY || 'usd',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects amounts in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: customer_email,
      success_url: `${process.env.STRIPE_SUCCESS_URL || 'http://localhost:5173/checkout?success=true'}`,
      cancel_url: `${process.env.STRIPE_CANCEL_URL || 'http://localhost:5173/checkout?canceled=true'}`,
    });

    res.status(200).json({ success: true, url: session.url });
  } catch (err) {
    console.error('FUDGEABLES_PAYMENT_ERROR [CheckoutSession]:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Handle Stripe Webhook
// @route   POST /api/payment/webhook
exports.handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('FUDGEABLES_WEBHOOK_ERROR:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // You can implement post-payment logic here (e.g., updating order status, sending confirmation emails)
      console.log('FUDGEABLES_PAYMENT_PROTOCOL: Payment Confirmed - Session ID:', session.id);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
};
