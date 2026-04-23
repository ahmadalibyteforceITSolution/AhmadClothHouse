const Order = require('../models/Order');
const sendEmail = require('../utils/sendEmail');

// @desc    Get all orders (admin)
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .populate('items.product', 'name price views sales') // EXCLUDE 'image' — it's a huge base64 string
      .select('-__v')
      .sort({ createdAt: -1 })
      .limit(200) // cap at 200 most recent orders
      .lean();
    // Cache for 10 seconds to reduce duplicate admin refreshes
    res.setHeader('Cache-Control', 'private, max-age=10');
    res.status(200).json({ success: true, count: orders.length, data: orders });
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
      .populate('items.product', 'name price views sales') // EXCLUDE 'image'
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Notify admin/customer about an order without saving to DB (to avoid overload)
exports.notifyOrder = async (req, res) => {
  console.log('AHMADCLOTHS: Received Order Notification Request');
  try {
    const order = req.body;
    const adminEmail = process.env.ADMIN_EMAIL || 'ahmadalihafeez24@gmail.com';
    const shipping = order.shippingAddress;
    
    // 1. Send notification to ADMIN
    const adminMessage = `
      🚀 NEW ORDER RECEIVED (NOTIFIED ONLY)
      
      Order Summary:
      -------------------------
      Subtotal: RS ${order.subtotal || 0}
      Delivery Charges: RS ${order.deliveryCharge || 0}
      Total Amount: RS ${order.totalAmount}
      Payment Method: ${order.paymentMethod?.toUpperCase()}
      ${order.transactionId ? `TID: ${order.transactionId}` : ''}
      
      Customer Information:
      -------------------------
      Name: ${shipping.fullName}
      Email: ${order.customerEmail || 'N/A'}
      Phone: ${shipping.phone}
      
      Shipping Address:
      -------------------------
      Address: ${shipping.address}
      City: ${shipping.city}
      Zip Code: ${shipping.zipCode}
      
      Items:
      -------------------------
      ${order.items.map(i => `- ${i.name} (x${i.quantity})`).join('\n      ')}
    `;

    await sendEmail({
      email: adminEmail,
      subject: `[NEW ORDER] ${shipping.fullName} - Rs. ${order.totalAmount}`,
      message: adminMessage
    });

    // 2. Send confirmation to CUSTOMER
    if (order.customerEmail) {
      await sendEmail({
        email: order.customerEmail,
        subject: 'Order Received - AhmadClothesHouse',
        message: `Hello ${shipping.fullName},\n\nWe have received your order request for Rs. ${order.totalAmount}.\n\nOur team is reviewing the details and will contact you shortly via WhatsApp or Phone to confirm shipment.\n\nThank you for choosing AhmadClothesHouse.`
      });
    }

    res.status(200).json({ success: true, message: 'Notification sent successfully' });
  } catch (err) {
    console.error('ORDER_NOTIFY_ERROR:', err.message);
    res.status(500).json({ success: false, error: 'Email notification failed' });
  }
};

// @desc    Create an order
exports.createOrder = async (req, res) => {
  console.log('AHMADCLOTHS: Received Order Request');
  try {
    const order = await Order.create(req.body);

    // Send notification email to customer
    if (order.user && order.user.email) {
      try {
        await sendEmail({
          email: order.user.email,
          subject: 'Order Confirmation - AhmadClothesHouse',
          message: `Hello ${order.user.name || 'Valued Customer'},\n\nThank you for your order at AhmadClothesHouse.\n\nOrder ID: ${order._id}\nTotal: Rs. ${order.totalAmount}\n\nWe are processing your order and will notify you when it ships.\n\nBest regards,\nAhmadClothesHouse Team`
        });
      } catch (custMailErr) {
        console.error('AHMADCLOTHS_CUSTOMER_CONFIRMATION_MAIL_ERROR:', custMailErr.message);
      }
    }

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

    // Send notification email to CUSTOMER if status changed to Shipped
    if (status === 'Shipped' && order.customerEmail) {
      try {
        const shipping = order.shippingAddress;
        
        // Construct Google Maps Live Tracking URL
        const query = encodeURIComponent(`${shipping.address}, ${shipping.city}, Pakistan`);
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

        const emailMessage = `
          DEAR ${order.customerName || 'VALUED CLIENT'},
          
          ENCHANTED NEWS FROM AHMADCLOTHESHOUSE! 🌟
          
          YOUR EXQUISITE ORDER #${order._id} HAS OFFICIALLY COMMENCED ITS JOURNEY FROM OUR BOUTIQUE TO YOUR DOORSTEP.
          
          ORDER STATUS: SHIPPED 📦
          DESTINATION: ${shipping.address}, ${shipping.city}
          
          TRACK YOUR DELIVERY LIVE ON GOOGLE MAPS:
          ${mapsUrl}
          
          PLEASE ALLOW 24-48 HOURS FOR OUR COURIER PARTNERS TO COMPLETE THE FINAL STAGES OF LOGISTICS.
          
          THANK YOU FOR CHOOSING AHMADCLOTHESHOUSE. FOR ANY ASSISTANCE, OUR CONCIERGE TEAM IS AT YOUR SERVICE.
        `;

        await sendEmail({
          email: order.customerEmail,
          subject: `[SHIPPED] YOUR BOUTIQUE SELECTION IS EN ROUTE - #${order._id}`,
          message: emailMessage
        });
        
        console.log('AHMADCLOTHS: Customer notified for shipping %s', order._id);
      } catch (mailErr) {
        console.error('AHMADCLOTHS_CUSTOMER_MAIL_ERROR:', mailErr.message);
      }
    }

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
      subject: 'AhmadClothesHouse - SMTP Test Connection',
      message: 'If you receive this, your email notification system for AhmadClothesHouse is working correctly!'
    });
    res.status(200).json({ success: true, message: 'Test email sent successfully' });
  } catch (err) {
    console.error('AHMADCLOTHS_MAIL_ERROR [Test]:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};
