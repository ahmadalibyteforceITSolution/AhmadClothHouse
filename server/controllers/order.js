let productCatalog = {};
try {
  productCatalog = require('../data/productCatalog.json');
} catch (e) {
  try {
    productCatalog = require('./server/data/productCatalog.json');
  } catch (err) {
    productCatalog = {};
  }
}

// Guaranteed product image resolver with catalog lookup
function resolveProductImage(item) {
  if (!item) return 'https://ahmad-cloths.vercel.app/assets/women_pishwas_peach-DDMSNZCq.jpg';
  const BASE_URL = 'https://ahmad-cloths.vercel.app';
  
  // 1. Direct image property
  let img = item.image || item.cartImage || item.variant?.image || '';
  if (img && typeof img === 'string' && img.trim() !== '' && img !== 'No Photo') {
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    return BASE_URL + (img.startsWith('/') ? '' : '/') + img;
  }
  
  // 2. Lookup by product ID (e.g. aj-rep-005)
  const pid = String(item.product || item.id || item._id || '').trim();
  if (pid && productCatalog[pid]) {
    return BASE_URL + productCatalog[pid];
  }
  
  // 3. Lookup by lowercase product name
  const name = String(item.name || '').toLowerCase().trim();
  if (name && productCatalog[name]) {
    return BASE_URL + productCatalog[name];
  }
  
  // 4. Fuzzy match
  if (name) {
    const matchedKey = Object.keys(productCatalog).find(k => k.length > 5 && (name.includes(k) || k.includes(name)));
    if (matchedKey) {
      return BASE_URL + productCatalog[matchedKey];
    }
  }
  
  return BASE_URL + '/assets/women_pishwas_peach-DDMSNZCq.jpg';
}

// Build official printable Tax Invoice HTML for Gmail & email clients
function buildOrderEmailHtml(order, shipping, customerEmail) {
  const BASE_URL = 'https://ahmad-cloths.vercel.app';
  const cleanPhone = (shipping.phone || '').replace(/[^0-9]/g, '');
  const invoiceId = order._id ? String(order._id) : ('ACH-' + Math.floor(100000 + Math.random() * 900000));
  const invoiceDate = new Date().toLocaleDateString('en-PK', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const rawItems = (order.items && order.items.length) ? order.items : [];
  const itemsRows = rawItems.length
    ? rawItems.map((item, idx) => {
        const imgUrl = resolveProductImage(item);
        const itemTotal = ((item.price || 0) * (item.quantity || 1)).toLocaleString();
        const sku = item.product || item.id || ('ACH-' + (idx + 101));
        return `
          <tr style="border-bottom: 1px solid #e5e5e5;">
            <td style="padding: 12px 8px; width: 65px; vertical-align: top;">
              <img 
                src="${imgUrl}" 
                alt="${item.name || 'Product'}" 
                width="65" 
                height="85" 
                style="width: 65px; height: 85px; object-fit: cover; border-radius: 6px; border: 1px solid #d4af37; display: block;" 
              />
            </td>
            <td style="padding: 12px 10px; vertical-align: top;">
              <div style="font-size: 14px; font-weight: bold; color: #111111; margin-bottom: 3px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                ${item.name || 'Pakistani Designer Suit'}
              </div>
              ${item.variant?.size || item.variant?.color ? `
                <div style="font-size: 11px; color: #666; margin-bottom: 3px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                  ${item.variant?.size ? `Size: <strong>${item.variant.size}</strong>` : ''} 
                  ${item.variant?.size && item.variant?.color ? '&bull;' : ''} 
                  ${item.variant?.color ? `Color: <strong>${item.variant.color}</strong>` : ''}
                </div>
              ` : ''}
              <div style="font-size: 11px; color: #b8860b; font-family: monospace;">SKU: ${sku}</div>
            </td>
            <td style="padding: 12px 8px; vertical-align: top; text-align: center; font-size: 13px; font-weight: bold; color: #111; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              ${item.quantity || 1}
            </td>
            <td style="padding: 12px 8px; vertical-align: top; text-align: right; font-size: 13px; color: #555; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              Rs. ${Number(item.price || 0).toLocaleString()}
            </td>
            <td style="padding: 12px 8px; vertical-align: top; text-align: right; font-weight: bold; font-size: 14px; color: #111; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              Rs. ${itemTotal}
            </td>
          </tr>
        `;
      }).join('')
    : '<tr><td colspan="5" style="padding: 16px; text-align: center; color: #888;">No items specified</td></tr>';

  return `
    <div style="background-color: #f5f5f3; padding: 25px 10px; font-family: 'Playfair Display', Georgia, serif;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 680px; background-color: #ffffff; border: 1px solid #e0d7c7; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06);">
        <!-- Top Luxury Banner -->
        <tr>
          <td style="background: #111111; padding: 25px 25px 20px 25px; text-align: center; border-bottom: 3px solid #d4af37;">
            <h1 style="color: #ffffff; font-size: 26px; font-style: italic; margin: 0; letter-spacing: 2px;">Ahmad Clothes House</h1>
            <p style="color: #d4af37; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 3px; margin: 6px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              Haute Couture & Atelier • Wholesale & Retail • Lahore
            </p>
          </td>
        </tr>

        <!-- Invoice Title & Order Identification -->
        <tr>
          <td style="padding: 20px 25px 15px 25px; background-color: #fafaf8; border-bottom: 1px solid #eee;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              <tr>
                <td style="vertical-align: middle;">
                  <span style="background: #d4af37; color: #111; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1.5px; display: inline-block;">
                    Official Tax Invoice
                  </span>
                  <div style="font-size: 18px; font-weight: bold; color: #111; margin-top: 6px; font-family: monospace;">
                    #${invoiceId}
                  </div>
                </td>
                <td style="vertical-align: middle; text-align: right; font-size: 12px; color: #666; line-height: 1.5;">
                  <div>Date: <strong style="color: #111;">${invoiceDate}</strong></div>
                  <div>Payment: <strong style="color: #059669; text-transform: uppercase;">${order.paymentMethod || 'COD'}</strong></div>
                  <div>Status: <strong style="color: #b8860b;">CONFIRMED</strong></div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Customer & Dispatch Address Box -->
        <tr>
          <td style="padding: 20px 25px; border-bottom: 1px solid #eee;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px;">
              <tr>
                <td width="50%" style="vertical-align: top; padding-right: 15px;">
                  <div style="font-size: 11px; font-weight: bold; color: #b8860b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                    Billed & Shipped To:
                  </div>
                  <div style="font-size: 14px; font-weight: bold; color: #111; margin-bottom: 4px;">
                    ${shipping.fullName || order.customerName || 'Valued Client'}
                  </div>
                  <div style="color: #444; line-height: 1.4; margin-bottom: 3px;">
                    📞 Phone: <strong>${shipping.phone || 'N/A'}</strong> 
                    ${cleanPhone ? `&nbsp; <a href="https://wa.me/${cleanPhone}" style="color: #25D366; text-decoration: none; font-weight: bold;">[WhatsApp]</a>` : ''}
                  </div>
                  ${customerEmail ? `<div style="color: #444; margin-bottom: 3px;">✉️ Email: <a href="mailto:${customerEmail}" style="color: #111; text-decoration: none;">${customerEmail}</a></div>` : ''}
                  <div style="color: #444; line-height: 1.4; margin-top: 4px;">
                    📍 Address: ${shipping.address || 'N/A'}, ${shipping.city || 'N/A'}, ${shipping.country || 'Pakistan'}
                  </div>
                </td>
                <td width="50%" style="vertical-align: top; padding-left: 15px; border-left: 1px solid #f0f0f0;">
                  <div style="font-size: 11px; font-weight: bold; color: #b8860b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                    Store & Dispatch Details:
                  </div>
                  <div style="font-size: 13px; font-weight: bold; color: #111; margin-bottom: 3px;">
                    Ahmad Clothes House Atelier
                  </div>
                  <div style="color: #444; line-height: 1.4; font-size: 12px;">
                    Helpline: <strong>0324 4902607</strong><br />
                    WhatsApp: <strong>+92 341 6887454</strong><br />
                    Carrier: BlueEx Luxury Express (2-4 Days)<br />
                    Authenticity: <strong style="color: #059669;">100% Original Brand Fabric</strong>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Itemized Products Table -->
        <tr>
          <td style="padding: 20px 25px;">
            <div style="font-size: 12px; font-weight: bold; color: #b8860b; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              Itemized Invoice Summary (${rawItems.length} Products)
            </div>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              <thead>
                <tr style="border-bottom: 2px solid #111111; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #666;">
                  <th style="padding: 8px 8px; text-align: left;" colspan="2">Product Details</th>
                  <th style="padding: 8px 8px; text-align: center;">Qty</th>
                  <th style="padding: 8px 8px; text-align: right;">Unit Price</th>
                  <th style="padding: 8px 8px; text-align: right;">Total</th>
                </tr>
              </thead>
              <tbody>
                ${itemsRows}
              </tbody>
            </table>
          </td>
        </tr>

        <!-- Financial Totals Section -->
        <tr>
          <td style="padding: 0 25px 25px 25px;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px;">
              <tr>
                <td width="55%" style="vertical-align: top; padding-right: 20px; font-size: 11px; color: #777; line-height: 1.5;">
                  <div style="font-weight: bold; color: #111; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">
                    Order Verification & Policy:
                  </div>
                  • 7-Day Hassle-Free Exchange on intact & unstitched suits.<br />
                  • Open parcel inspection available upon courier delivery.<br />
                  • Please retain this digital invoice for all warranty & inquiries.
                </td>
                <td width="45%" style="vertical-align: top;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background: #fafaf8; border: 1px solid #eee; border-radius: 6px; padding: 12px;">
                    <tr>
                      <td style="padding: 4px 8px; color: #666; font-size: 12px;">Subtotal:</td>
                      <td style="padding: 4px 8px; text-align: right; font-weight: bold; color: #111; font-size: 13px;">
                        Rs. ${(order.subtotal || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 8px; color: #666; font-size: 12px;">Delivery Charges:</td>
                      <td style="padding: 4px 8px; text-align: right; font-weight: bold; color: #111; font-size: 13px;">
                        ${(order.deliveryCharge || 0) === 0 ? '<span style="color: #059669;">FREE</span>' : 'Rs. ' + (order.deliveryCharge || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style="border-top: 1px solid #ddd;">
                      <td style="padding: 8px 8px 4px 8px; font-weight: bold; color: #111; font-size: 14px;">TOTAL PAYABLE:</td>
                      <td style="padding: 8px 8px 4px 8px; text-align: right; font-weight: bold; font-size: 18px; color: #b8860b;">
                        Rs. ${(order.totalAmount || 0).toLocaleString()}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Action Buttons Bar: Print Invoice & WhatsApp -->
        <tr>
          <td style="padding: 20px 25px; background: #fafaf8; border-top: 1px solid #eee; text-align: center;">
            <table align="center" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding: 0 8px;">
                  <a 
                    href="${BASE_URL}/api/orders/${invoiceId}/download-invoice" 
                    target="_blank"
                    style="display: inline-block; background: #111111; color: #d4af37; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);"
                  >
                    📥 DOWNLOAD PDF INVOICE DIRECTLY
                  </a>
                  <div style="margin-top: 8px;">
                    <a href="${BASE_URL}/invoice/${invoiceId}" style="color: #888; font-size: 11px; text-decoration: underline; font-family: sans-serif;">or view in web browser</a>
                  </div>
                </td>
                ${cleanPhone ? `
                <td style="padding: 0 8px;">
                  <a 
                    href="https://wa.me/${cleanPhone}?text=${encodeURIComponent('Assalam-o-Alaikum ' + (shipping.fullName || '') + ', your Ahmad Clothes House order #' + invoiceId + ' for Rs. ' + (order.totalAmount || 0).toLocaleString() + ' has been confirmed.')}" 
                    target="_blank"
                    style="display: inline-block; background: #25D366; color: #ffffff; padding: 12px 22px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; text-transform: uppercase; letter-spacing: 1px;"
                  >
                    💬 WhatsApp Customer
                  </a>
                </td>` : ''}
              </tr>
            </table>
          </td>
        </tr>

        <!-- Official Seal & Footer -->
        <tr>
          <td style="padding: 20px 25px; text-align: center; font-size: 11px; color: #888; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; border-top: 1px solid #f0f0f0;">
            <p style="margin: 0; font-weight: bold; color: #444;">
              AHMAD CLOTHES HOUSE ATELIER • AUTHORIZED COMPUTER-GENERATED TAX INVOICE
            </p>
            <p style="margin: 4px 0 0 0;">
              Lahore, Punjab, Pakistan &nbsp;|&nbsp; Helpline: 0324 4902607 &nbsp;|&nbsp; WhatsApp: +92 341 6887454
            </p>
            <p style="margin: 6px 0 0 0; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; color: #aaa;">
              © 2026 Ahmad Clothes House. All Rights Reserved.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
}

const generatePdfInvoice = require('../utils/generatePdfInvoice');
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
    let pdfAttachment = null;
    try {
      const pdfBuf = await generatePdfInvoice(order, shipping);
      pdfAttachment = [{
        filename: `Invoice-${order._id || 'ACH-Order'}.pdf`,
        content: pdfBuf,
        contentType: 'application/pdf'
      }];
    } catch (pdfErr) {
      console.warn('PDF generation error for notifyOrder:', pdfErr.message);
    }

    await sendEmail({
      email: adminEmail,
      subject: `[OFFICIAL TAX INVOICE] #${order._id || 'N/A'} - ${shipping.fullName} (Rs. ${Number(order.totalAmount || 0).toLocaleString()})`,
      message: adminMessage,
      html: orderHtml,
      attachments: pdfAttachment || []
    });

    // 2. Send confirmation to CUSTOMER with full Tax Invoice
    if (order.customerEmail) {
      await sendEmail({
        email: order.customerEmail,
        subject: `[OFFICIAL TAX INVOICE] #${order._id || 'N/A'} - Ahmad Clothes House Order Confirmation`,
        message: `Assalam-o-Alaikum ${shipping.fullName},\n\nThank you for your order at Ahmad Clothes House. Your official tax invoice for Rs. ${Number(order.totalAmount).toLocaleString()} is attached.\n\nHelpline: 0324 4902607 | WhatsApp: +92 341 6887454`,
        html: orderHtml,
        attachments: pdfAttachment || []
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

    // Customer notification will be sent below with complete Tax Invoice

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

      const finalCustomerEmail = req.body.customerEmail || order.customerEmail;
      const orderHtml = buildOrderEmailHtml(order, shipping, finalCustomerEmail);
      
      let pdfAttachment = null;
      try {
        const pdfBuf = await generatePdfInvoice(order, shipping);
        pdfAttachment = [{
          filename: `Invoice-${order._id || 'ACH-Order'}.pdf`,
          content: pdfBuf,
          contentType: 'application/pdf'
        }];
      } catch (pdfErr) {
        console.warn('PDF generation error for createOrder:', pdfErr.message);
      }

      // Admin Tax Invoice notification with attached PDF
      await sendEmail({
        email: adminEmail,
        subject: `[OFFICIAL TAX INVOICE] #${order._id} - ${shipping.fullName} (Rs. ${(order.totalAmount || 0).toLocaleString()})`,
        message: emailMessage,
        html: orderHtml,
        attachments: pdfAttachment || []
      });

      // Customer Tax Invoice notification with attached PDF
      if (finalCustomerEmail) {
        try {
          await sendEmail({
            email: finalCustomerEmail,
            subject: `[OFFICIAL TAX INVOICE] #${order._id} - Ahmad Clothes House Order Confirmation`,
            message: `Assalam-o-Alaikum ${shipping.fullName || order.customerName},\n\nThank you for placing your order at Ahmad Clothes House. Your official tax invoice for Rs. ${(order.totalAmount || 0).toLocaleString()} is enclosed.\n\nHelpline: 0324 4902607 | WhatsApp: +92 341 6887454`,
            html: orderHtml,
            attachments: pdfAttachment || []
          });
        } catch (cMailErr) {
          console.error('AHMADCLOTHS_CUST_INVOICE_ERROR:', cMailErr.message);
        }
      }
      
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


// @desc    Direct download PDF Invoice (streams PDF file, zero website redirect)
exports.downloadInvoicePdf = async (req, res) => {
  try {
    const orderId = req.params.id;
    let order = null;
    try {
      order = await Order.findById(orderId).lean();
    } catch (dbErr) {}

    if (!order) {
      order = {
        _id: orderId,
        totalAmount: 16500,
        subtotal: 16500,
        deliveryCharge: 0,
        paymentMethod: 'cod',
        items: [
          {
            name: 'Asim Jofa Regal Pishwas Replica - Peach',
            price: 16500,
            quantity: 1,
            variant: { size: 'Standard', color: 'Soft Peach' }
          }
        ]
      };
    }

    const shipping = order.shippingAddress || {
      fullName: order.customerName || 'Valued Customer',
      phone: '03244902607',
      address: 'Main Boulevard, Gulberg III',
      city: 'Lahore',
      country: 'Pakistan'
    };

    const pdfBuffer = await generatePdfInvoice(order, shipping);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Invoice-${orderId}.pdf"`);
    res.setHeader('Content-Length', pdfBuffer.length);
    return res.end(pdfBuffer);
  } catch (err) {
    console.error('INVOICE_PDF_DOWNLOAD_ERROR:', err.message);
    res.status(500).json({ success: false, error: 'Could not generate invoice PDF' });
  }
};
