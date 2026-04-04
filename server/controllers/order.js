const Order = require('../models/Order');
const sendEmail = require('../utils/sendEmail');

// @desc    Get all orders (admin)
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 })
      .lean();
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    console.error('ORDER_ERROR [Fetch]:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Get order by ID (public tracking)
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .lean();
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order dispatch not found' });
    }
    res.status(200).json({ success: true, data: order });
  } catch (err) {
    console.error('ORDER_ERROR [FetchByID]:', err.message);
    res.status(500).json({ success: false, error: 'Order identification failed' });
  }
};

// @desc    Get orders for a specific user
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId })
      .sort({ createdAt: -1 })
      .lean();
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Create an order
exports.createOrder = async (req, res) => {
  console.log('AHMADCLOTHS: Received Order Request');
  try {
    const order = await Order.create(req.body);

    // Send notification email to admin
    try {
      const adminEmail = process.env.ADMIN_EMAIL || 'ahmadalihafeez24@gmail.com';
      const shipping = order.shippingAddress;
      
      const emailMessage = `
        🚀 NEW ORDER RECEIVED!
        
        Order Details:
        -------------------------
        Order ID/Tracking: ${order._id}
        Subtotal: RS ${order.subtotal || 0}
        Delivery Charges: RS ${order.deliveryCharge || 0}
        Total Amount: RS ${order.totalAmount}
        Payment Method: ${order.paymentMethod.toUpperCase()}
        
        Customer Information:
        -------------------------
        Name: ${shipping.fullName}
        Email: ${req.body.customerEmail || 'N/A'}
        Phone: ${shipping.phone}
        
        Shipping Address:
        -------------------------
        Address: ${shipping.address}
        City: ${shipping.city}
        Zip Code: ${shipping.zipCode}
        Country: ${shipping.country}
        
        Please check your admin dashboard for more details.
      `;

      await sendEmail({
        email: adminEmail,
        subject: `[NEW ORDER] #${order._id} - ${shipping.fullName}`,
        message: emailMessage
      });
      
      console.log('AHMADCLOTHS: Admin notified for order %s', order._id);
    } catch (mailErr) {
      console.error('AHMADCLOTHS_MAIL_ERROR:', mailErr.message);
      // Don't fail the order creation if email fails, but log it
    }

    res.status(201).json({ success: true, data: order });
  } catch (err) {
    console.error('ORDER_ERROR [Create]:', err.message);
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update order status (admin - dispatch/ship/deliver)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status, tracking } = req.body;
    const updateData = {};
    
    if (status) updateData.status = status;
    if (tracking) updateData.tracking = tracking;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      updateData,
      { returnDocument: 'after', runValidators: true }
    ).populate('user', 'name email');

    if (!order) return res.status(404).json({ success: false, error: 'Order not found' });
    res.status(200).json({ success: true, data: order });
  } catch (err) {
    console.error('ORDER_ERROR [Update]:', err.message);
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete an order (admin)
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ success: false, error: 'Order not found' });
    await order.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Test email configuration
exports.testEmail = async (req, res) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'ahmadalihafeez24@gmail.com';
    await sendEmail({
      email: adminEmail,
      subject: 'Ahmad Cloth House - SMTP Test Connection',
      message: 'If you receive this, your email notification system is working correctly!'
    });
    res.status(200).json({ success: true, message: 'Test email sent successfully' });
  } catch (err) {
    console.error('AHMADCLOTHS_MAIL_ERROR [Test]:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};
