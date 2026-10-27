const PDFDocument = require('pdfkit');

/**
 * Generate a luxury, printable PDF invoice buffer using PDFKit
 * @param {Object} order - Order document or payload
 * @param {Object} shipping - Shipping address object
 * @returns {Promise<Buffer>}
 */
function generatePdfInvoice(order, shipping = {}) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        margin: 36,
        size: 'A4',
        info: {
          Title: `Tax Invoice #${order._id || 'ACH-2026'}`,
          Author: 'Ahmad Clothes House Atelier',
          Subject: 'Official Order Tax Invoice & Packing Slip'
        }
      });

      const buffers = [];
      doc.on('data', chunk => buffers.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(buffers)));

      const invoiceId = order._id ? String(order._id) : ('ACH-' + Math.floor(100000 + Math.random() * 900000));
      const invoiceDate = new Date().toLocaleDateString('en-PK', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });

      // ── Header ──
      doc.rect(36, 36, 523, 70).fill('#111111');
      
      doc.fillColor('#FFFFFF')
         .fontSize(20)
         .text('AHMAD CLOTHES HOUSE', 36, 48, { align: 'center', characterSpacing: 2 });
      
      doc.fillColor('#D4AF37')
         .fontSize(8.5)
         .text('HAUTE COUTURE & ATELIER • WHOLESALE & RETAIL • LAHORE', 36, 73, { align: 'center', characterSpacing: 2 });
      
      doc.fillColor('#BBBBBB')
         .fontSize(8)
         .text('Helpline: 0324 4902607  |  WhatsApp: +92 341 6887454  |  Email: ahmadalihafeez26@gmail.com', 36, 88, { align: 'center' });

      doc.moveDown(2);

      // ── Title & Meta Bar ──
      const metaY = 120;
      doc.fillColor('#111111').fontSize(14).text('OFFICIAL TAX INVOICE', 36, metaY, { underline: true });
      doc.fillColor('#666666').fontSize(9).text('Computer Generated Sales Receipt', 36, metaY + 18);

      doc.fillColor('#111111')
         .fontSize(10)
         .text(`Invoice #: #${invoiceId}`, 360, metaY, { align: 'right' })
         .text(`Date: ${invoiceDate}`, 360, metaY + 14, { align: 'right' })
         .text(`Status: CONFIRMED`, 360, metaY + 28, { align: 'right' });

      // Horizontal Divider
      doc.moveTo(36, 170).lineTo(559, 170).strokeColor('#E0D7C7').lineWidth(1).stroke();

      // ── Customer & Dispatch Info ──
      const custY = 180;
      doc.fillColor('#B8860B').fontSize(9).text('BILLED & SHIPPED TO:', 36, custY);
      doc.fillColor('#111111').fontSize(11).text(shipping.fullName || order.customerName || 'Valued Customer', 36, custY + 14);
      doc.fillColor('#444444').fontSize(9)
         .text(`Phone: ${shipping.phone || 'N/A'}`, 36, custY + 28)
         .text(`Email: ${order.customerEmail || 'customer@ahmadcloths.com'}`, 36, custY + 41)
         .text(`Address: ${shipping.address || 'Address on file'}, ${shipping.city || 'Lahore'}, Pakistan`, 36, custY + 54);

      doc.fillColor('#B8860B').fontSize(9).text('PAYMENT & SHIPPING DETAILS:', 340, custY);
      doc.fillColor('#111111').fontSize(9)
         .text(`Payment Mode: ${(order.paymentMethod || 'COD').toUpperCase()}`, 340, custY + 14)
         .text(`Transaction ID: ${order.transactionId || 'None (Cash on Delivery)'}`, 340, custY + 28)
         .text(`Courier: BlueEx Luxury Express (2-4 Days)`, 340, custY + 41)
         .text(`Verification: 100% Original Brand Fabric`, 340, custY + 54);

      // Horizontal Divider
      doc.moveTo(36, 260).lineTo(559, 260).strokeColor('#E0D7C7').lineWidth(1).stroke();

      // ── Items Table Header ──
      const tableY = 275;
      doc.rect(36, tableY, 523, 22).fill('#F5F5F3');
      doc.fillColor('#111111').fontSize(9)
         .text('#', 44, tableY + 6)
         .text('Product Description', 70, tableY + 6)
         .text('Qty', 350, tableY + 6, { align: 'center', width: 40 })
         .text('Unit Price', 400, tableY + 6, { align: 'right', width: 70 })
         .text('Total', 480, tableY + 6, { align: 'right', width: 70 });

      // ── Items Rows ──
      let currentY = tableY + 28;
      const rawItems = (order.items && order.items.length) ? order.items : [];

      rawItems.forEach((item, index) => {
        const itemTotal = (item.price || 0) * (item.quantity || 1);
        doc.fillColor('#555555').fontSize(9).text(String(index + 1), 44, currentY);
        
        doc.fillColor('#111111').fontSize(9.5).text(item.name || 'Pakistani Designer Suit', 70, currentY, { width: 270 });
        
        const variantText = [
          item.variant?.size ? `Size: ${item.variant.size}` : '',
          item.variant?.color ? `Color: ${item.variant.color}` : ''
        ].filter(Boolean).join(' | ');

        if (variantText) {
          doc.fillColor('#777777').fontSize(8).text(variantText, 70, currentY + 12);
        }

        doc.fillColor('#111111').fontSize(9)
           .text(String(item.quantity || 1), 350, currentY, { align: 'center', width: 40 })
           .text(`Rs. ${Number(item.price || 0).toLocaleString()}`, 400, currentY, { align: 'right', width: 70 })
           .text(`Rs. ${itemTotal.toLocaleString()}`, 480, currentY, { align: 'right', width: 70 });

        currentY += variantText ? 30 : 22;
        doc.moveTo(36, currentY - 4).lineTo(559, currentY - 4).strokeColor('#EEEEEE').lineWidth(0.5).stroke();
      });

      // ── Financial Summary ──
      const sumY = Math.max(currentY + 15, 420);
      doc.rect(340, sumY, 219, 75).fill('#FAFAF8').strokeColor('#E0D7C7').lineWidth(1).stroke();

      doc.fillColor('#555555').fontSize(9)
         .text('Subtotal:', 350, sumY + 10)
         .text(`Rs. ${(order.subtotal || 0).toLocaleString()}`, 440, sumY + 10, { align: 'right', width: 110 })
         .text('Delivery Charges:', 350, sumY + 26)
         .text((order.deliveryCharge || 0) === 0 ? 'FREE' : `Rs. ${(order.deliveryCharge || 0).toLocaleString()}`, 440, sumY + 26, { align: 'right', width: 110 });

      doc.moveTo(350, sumY + 44).lineTo(550, sumY + 44).strokeColor('#D4AF37').lineWidth(1).stroke();

      doc.fillColor('#111111').fontSize(11)
         .text('TOTAL PAYABLE:', 350, sumY + 52);
      doc.fillColor('#B8860B').fontSize(12)
         .text(`Rs. ${(order.totalAmount || 0).toLocaleString()}`, 440, sumY + 50, { align: 'right', width: 110 });

      // ── Notes & Guarantee ──
      doc.fillColor('#888888').fontSize(8)
         .text('TERMS & RETURN POLICY:', 36, sumY + 10)
         .text('• 7-Day Hassle-Free Exchange on intact, unstitched garments.', 36, sumY + 22)
         .text('• Open parcel delivery inspection available with BlueEx courier.', 36, sumY + 34)
         .text('• Authorized Electronic Computer-Generated Invoice.', 36, sumY + 46);

      // ── Footer ──
      doc.rect(36, 760, 523, 30).fill('#111111');
      doc.fillColor('#D4AF37').fontSize(8)
         .text('AHMAD CLOTHES HOUSE ATELIER  •  100% ORIGINAL DESIGNER REPLICAS & BRANDS', 36, 768, { align: 'center', characterSpacing: 1 });
      doc.fillColor('#FFFFFF').fontSize(7.5)
         .text('Questions or Exchange Support? Call / WhatsApp Concierge: 0324 4902607', 36, 778, { align: 'center' });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = generatePdfInvoice;
