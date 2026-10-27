
// Helper to build luxury HTML email with product images and details
function buildOrderEmailHtml(order, shipping, customerEmail) {
  const BASE_URL = 'https://ahmad-cloths.vercel.app';
  const cleanPhone = (shipping.phone || '').replace(/[^0-9]/g, '');

  const itemsRows = (order.items && order.items.length)
    ? order.items.map((item, idx) => {
        let imgUrl = item.image || item.variant?.image || '';
        if (imgUrl && !imgUrl.startsWith('http')) {
          imgUrl = BASE_URL + (imgUrl.startsWith('/') ? '' : '/') + imgUrl;
        }
        const itemTotal = ((item.price || 0) * (item.quantity || 1)).toLocaleString();
        return `
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px 10px; width: 75px; vertical-align: top;">
              ${imgUrl ? `<img src="${imgUrl}" alt="${item.name || 'Product'}" width="70" height="90" style="width: 70px; height: 90px; object-fit: cover; border-radius: 6px; border: 1px solid #d4af37; display: block;" />` : `<div style="width: 70px; height: 90px; background: #f0f0f0; border-radius: 6px; text-align: center; line-height: 90px; font-size: 10px; color: #888;">No Photo</div>`}
            </td>
            <td style="padding: 12px 10px; vertical-align: top;">
              <div style="font-size: 14px; font-weight: bold; color: #111; margin-bottom: 3px;">${item.name || 'Pakistani Designer Suit'}</div>
              ${item.variant?.size || item.variant?.color ? `<div style="font-size: 11px; color: #777; margin-bottom: 3px;">Size: ${item.variant?.size || 'Standard'} | Color: ${item.variant?.color || 'Original'}</div>` : ''}
              <div style="font-size: 12px; color: #555;">Quantity: <strong style="color: #111;">${item.quantity || 1}</strong></div>
              <div style="font-size: 13px; font-weight: bold; color: #b8860b; margin-top: 4px;">Rs. ${Number(item.price || 0).toLocaleString()} <span style="font-size: 11px; color: #888; font-weight: normal;">each</span></div>
            </td>
            <td style="padding: 12px 10px; vertical-align: top; text-align: right; font-weight: bold; font-size: 14px; color: #111;">
              Rs. ${itemTotal}
            </td>
          </tr>
        `;
      }).join('')
    : '<tr><td colspan="3" style="padding: 12px; text-align: center; color: #888;">No items specified</td></tr>';

  return `
    <div style="font-family: 'Playfair Display', Georgia, serif; max-width: 650px; margin: 0 auto; padding: 35px 25px; background: #fafaf8; border: 1px solid #d4af3744; border-radius: 8px;">
      <div style="text-align: center; margin-bottom: 25px;">
        <h1 style="color: #111; font-size: 26px; font-style: italic; margin: 0; letter-spacing: 2px;">Ahmad Clothes House</h1>
        <p style="color: #b8860b; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 3px; margin: 5px 0 0 0;">Haute Couture & Atelier • Lahore</p>
        <div style="height: 1px; background: #d4af3788; width: 80px; margin: 15px auto;"></div>
        <div style="display: inline-block; background: #111; color: #d4af37; font-size: 11px; font-weight: bold; padding: 6px 16px; border-radius: 20px; text-transform: uppercase; letter-spacing: 2px;">
          🚀 New Order Received
        </div>
      </div>

      <div style="background: #ffffff; border: 1px solid #eee; border-radius: 8px; padding: 20px; margin-bottom: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <table style="width: 100%; font-size: 13px;">
          <tr>
            <td style="color: #666; padding: 4px 0;">Order Tracking ID:</td>
            <td style="font-weight: bold; font-family: monospace; text-align: right; color: #111;">#${order._id}</td>
          </tr>
          <tr>
            <td style="color: #666; padding: 4px 0;">Subtotal:</td>
            <td style="text-align: right; color: #111;">Rs. ${(order.subtotal || 0).toLocaleString()}</td>
          </tr>
          <tr>
            <td style="color: #666; padding: 4px 0;">Delivery Charges:</td>
            <td style="text-align: right; color: #111;">Rs. ${(order.deliveryCharge || 0).toLocaleString()}</td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="color: #111; font-weight: bold; padding: 10px 0 4px 0; font-size: 15px;">TOTAL PAYABLE:</td>
            <td style="font-weight: bold; font-size: 17px; color: #b8860b; text-align: right; padding: 10px 0 4px 0;">Rs. ${(order.totalAmount || 0).toLocaleString()}</td>
          </tr>
          <tr>
            <td style="color: #666; padding: 4px 0;">Payment Method:</td>
            <td style="text-align: right; font-weight: bold; text-transform: uppercase; color: #059669;">${(order.paymentMethod || 'COD').toUpperCase()} ${order.transactionId ? `(TID: ${order.transactionId})` : ''}</td>
          </tr>
        </table>
      </div>

      <div style="background: #ffffff; border: 1px solid #eee; border-radius: 8px; padding: 20px; margin-bottom: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <h3 style="margin: 0 0 12px 0; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; color: #b8860b;">Customer & Delivery Details</h3>
        <table style="width: 100%; font-size: 13px;">
          <tr>
            <td style="color: #666; width: 100px; padding: 4px 0;">Name:</td>
            <td style="font-weight: bold; color: #111;">${shipping.fullName || order.customerName || 'N/A'}</td>
          </tr>
          <tr>
            <td style="color: #666; padding: 4px 0;">Phone:</td>
            <td><a href="tel:${shipping.phone}" style="color: #111; text-decoration: none; font-weight: bold;">${shipping.phone || 'N/A'}</a> &nbsp; ${cleanPhone ? `<a href="https://wa.me/${cleanPhone}" style="color: #25D366; text-decoration: none; font-weight: bold;">[WhatsApp]</a>` : ''}</td>
          </tr>
          <tr>
            <td style="color: #666; padding: 4px 0;">Email:</td>
            <td><a href="mailto:${customerEmail || ''}" style="color: #111; text-decoration: none;">${customerEmail || 'N/A'}</a></td>
          </tr>
          <tr>
            <td style="color: #666; padding: 4px 0; vertical-align: top;">Address:</td>
            <td style="color: #111; line-height: 1.4;">${shipping.address || 'N/A'}, ${shipping.city || 'N/A'}, ${shipping.country || 'Pakistan'}</td>
          </tr>
        </table>
      </div>

      <div style="background: #ffffff; border: 1px solid #eee; border-radius: 8px; padding: 20px; margin-bottom: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <h3 style="margin: 0 0 12px 0; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; color: #b8860b;">Ordered Products (${(order.items || []).length})</h3>
        <table style="width: 100%; border-collapse: collapse;">
          ${itemsRows}
        </table>
      </div>

      ${cleanPhone ? `
      <div style="text-align: center; margin: 25px 0 15px 0;">
        <a href="https://wa.me/${cleanPhone}?text=${encodeURIComponent('Assalam-o-Alaikum ' + (shipping.fullName || '') + ', thank you for your order with Ahmad Clothes House! We have received your order #' + order._id + ' for Rs. ' + (order.totalAmount || 0).toLocaleString() + ' and will dispatch it shortly.')}" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 13px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; box-shadow: 0 4px 12px rgba(37,211,102,0.3);">
          💬 Chat with Customer on WhatsApp
        </a>
      </div>` : ''}

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 11px; color: #888; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <p style="margin: 0;">WhatsApp Concierge: +92 341 6887454 | Helpline: 0324 4902607</p>
        <p style="margin: 6px 0 0 0; letter-spacing: 1px; font-size: 9px; text-transform: uppercase;">© 2026 Ahmad Clothes House. All Rights Reserved.</p>
      </div>
    </div>
  `;
}

const Order = require('../models/Order');
const sendEmail = require('../utils/sendEmail');

// @desc    Get all orders (admin)
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
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
  console.log('AHMADCLOTHS: 📧 ORDER NOTIFICATION INITIATED for %s', req.body?.shippingAddress?.fullName);
  try {
    const order = req.body;
    const adminEmail = process.env.ADMIN_EMAIL || 'ahmadalihafeez26@gmail.com';
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

    const orderHtml = buildOrderEmailHtml(order, shipping, order.customerEmail);
    await sendEmail({
      email: adminEmail,
      subject: `[NEW ORDER] #${order._id || 'N/A'} - ${shipping.fullName} (Rs. ${Number(order.totalAmount || 0).toLocaleString()})`,
      message: adminMessage,
      html: orderHtml
    });

    // 2. Send confirmation to CUSTOMER
    if (order.customerEmail) {
      await sendEmail({
        email: order.customerEmail,
        subject: 'Order Received - AhmadClothesHouse',
        message: `Hello ${shipping.fullName},\n\nWe have received your order request for Rs. ${Number(order.totalAmount).toLocaleString()}.\n\nOur team is reviewing the details and will contact you shortly via WhatsApp or Phone to confirm shipment.\n\nThank you for choosing AhmadClothesHouse.`
      });
    }

    res.status(200).json({ success: true, message: 'Notification sent successfully' });
  } catch (err) {
    console.error('ORDER_NOTIFY_ERROR:', err.message);
    res.status(500).json({ 
      success: false, 
      error: 'Email notification failed',
      details: err.message // Send specific error back for debugging
    });
  }
};

// @desc    Create an order
exports.createOrder = async (req, res) => {
  console.log('AHMADCLOTHS: Received Order Request');
  try {
    const order = await Order.create(req.body);

    // Send notification email to customer
    if (order.customerEmail) {
      try {
        await sendEmail({
          email: order.customerEmail,
          subject: 'Order Confirmation - AhmadClothesHouse',
          message: `Hello ${order.customerName || 'Valued Customer'},\n\nThank you for your order at AhmadClothesHouse.\n\nOrder ID: ${order._id}\nTotal: Rs. ${order.totalAmount}\n\nWe are processing your order and will notify you when it ships.\n\nBest regards,\nAhmadClothesHouse Team`
        });
      } catch (custMailErr) {
        console.error('AHMADCLOTHS_CUSTOMER_CONFIRMATION_MAIL_ERROR:', custMailErr.message);
      }
    }

    // Send notification email to admin
    try {
      const adminEmail = process.env.ADMIN_EMAIL || 'ahmadalihafeez26@gmail.com';
      const shipping = order.shippingAddress;
      
      const itemsList = order.items && order.items.length
        ? order.items.map((i, index) => `${index + 1}. ${i.name || 'Item'} (Qty: ${i.quantity}) - Rs. ${((i.price || 0) * (i.quantity || 1)).toLocaleString()}`).join('\n        ')
        : 'N/A';

      const emailMessage = `
        🚀 NEW ORDER RECEIVED - AHMAD CLOTHES HOUSE!
        
        Order Details:
        ------------------------------------------
        Order ID: #${order._id}
        Subtotal: Rs. ${(order.subtotal || 0).toLocaleString()}
        Delivery Charges: Rs. ${(order.deliveryCharge || 0).toLocaleString()}
        TOTAL PAYABLE: Rs. ${(order.totalAmount || 0).toLocaleString()}
        Payment Method: ${(order.paymentMethod || 'COD').toUpperCase()}
        ${order.transactionId ? `Transaction ID: ${order.transactionId}` : ''}
        
        Customer Information:
        ------------------------------------------
        Name: ${shipping.fullName || order.customerName || 'N/A'}
        Phone / WhatsApp: ${shipping.phone || 'N/A'}
        Email: ${req.body.customerEmail || order.customerEmail || 'N/A'}
        
        Shipping Address:
        ------------------------------------------
        Address: ${shipping.address || 'N/A'}
        City: ${shipping.city || 'N/A'}
        Country: ${shipping.country || 'Pakistan'}
        
        Ordered Items:
        ------------------------------------------
        ${itemsList}
        
        ------------------------------------------
        Please check your Admin Dashboard to prepare and dispatch this order.
      `;

      const orderHtml = buildOrderEmailHtml(order, shipping, req.body.customerEmail || order.customerEmail);
      await sendEmail({
        email: adminEmail,
        subject: `[NEW ORDER] #${order._id} - ${shipping.fullName} (Rs. ${(order.totalAmount || 0).toLocaleString()})`,
        message: emailMessage,
        html: orderHtml
      });
      
      console.log('AHMADCLOTHS: Admin notified via email for order %s', order._id);
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
    const adminEmail = process.env.ADMIN_EMAIL || 'ahmadalihafeez26@gmail.com';
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
