const nodemailer = require('nodemailer');
const { Resend } = require('resend');

/**
 * Send an email notification with dual support:
 * 1. Gmail SMTP (Nodemailer) - direct to and from Gmail (ahmadalihafeez26@gmail.com)
 * 2. Resend API (HTTP) - fallback when RESEND_API_KEY is configured
 * @param {Object} options - { email, subject, message, html, attachments }
 */
const sendEmail = async (options) => {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_EMAIL || 'ahmadalihafeez26@gmail.com';
  const smtpPass = process.env.SMTP_PASSWORD || process.env.GMAIL_APP_PASSWORD || 'vybjjzyhjkohwwso';
  const resendKey = process.env.RESEND_API_KEY;

  const htmlContent = options.html || `
    <div style="font-family: 'Playfair Display', Georgia, serif; max-width: 600px; margin: 0 auto; padding: 35px 25px; background: #fafaf8; border: 1px solid #d4af3744; border-radius: 8px;">
      <div style="text-align: center; margin-bottom: 25px;">
        <h1 style="color: #111; font-size: 26px; font-style: italic; margin: 0; letter-spacing: 2px;">Ahmad Clothes House</h1>
        <p style="color: #b8860b; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 3px; margin: 5px 0 0 0;">Haute Couture & Atelier • Lahore</p>
        <div style="height: 1px; background: #d4af3788; width: 80px; margin: 15px auto;"></div>
      </div>
      <div style="color: #333; line-height: 1.8; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; white-space: pre-wrap;">${(options.message || '').replace(/\n/g, '<br>')}</div>
      <div style="margin-top: 35px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 11px; color: #888; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <p style="margin: 0;">WhatsApp Concierge: <a href="https://wa.me/923416887454" style="color: #b8860b; text-decoration: none; font-weight: bold;">+92 341 6887454</a> | Helpline: <a href="tel:03244902607" style="color: #b8860b; text-decoration: none; font-weight: bold;">0324 4902607</a></p>
        <p style="margin: 8px 0 0 0; letter-spacing: 1px; font-size: 9px; text-transform: uppercase;">© 2026 Ahmad Clothes House. All Rights Reserved.</p>
      </div>
    </div>
  `;

  let lastError = null;

  // 1. Try Gmail SMTP if SMTP password is provided
  if (smtpPass) {
    try {
      console.log('AHMADCLOTHS MAIL: Sending via Gmail SMTP to %s', options.email);
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: adminEmail,
          pass: smtpPass
        },
        tls: { rejectUnauthorized: false }
      });

      const mailOptions = {
        from: `"Ahmad Clothes House" <${adminEmail}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: htmlContent
      };

      // Direct file attachment support (e.g. PDF Invoice)
      if (options.attachments && options.attachments.length) {
        mailOptions.attachments = options.attachments;
      }

      const info = await transporter.sendMail(mailOptions);

      console.log('AHMADCLOTHS MAIL SUCCESS (Gmail SMTP): %s', info.messageId);
      return info;
    } catch (smtpErr) {
      console.error('AHMADCLOTHS GMAIL SMTP ERROR:', smtpErr.message);
      lastError = smtpErr;
    }
  }

  // 2. Try Resend API if API key is provided
  if (resendKey) {
    try {
      console.log('AHMADCLOTHS MAIL: Sending via Resend API to %s', options.email);
      const resend = new Resend(resendKey);
      const emailPayload = {
        from: 'AhmadClothesHouse <onboarding@resend.dev>',
        to: [options.email],
        subject: options.subject,
        html: htmlContent,
        text: options.message,
      };

      if (options.attachments && options.attachments.length) {
        emailPayload.attachments = options.attachments.map(att => ({
          filename: att.filename,
          content: Buffer.isBuffer(att.content) ? att.content : Buffer.from(att.content)
        }));
      }

      const { data, error } = await resend.emails.send(emailPayload);

      if (error) {
        console.error('AHMADCLOTHS RESEND API ERROR:', error.message);
        lastError = new Error(error.message);
      } else {
        console.log('AHMADCLOTHS MAIL SUCCESS (Resend): %s', data?.id);
        return data;
      }
    } catch (resendErr) {
      console.error('AHMADCLOTHS RESEND ERROR:', resendErr.message);
      lastError = resendErr;
    }
  }

  // If no credentials or both failed, log diagnostic message
  if (!smtpPass && !resendKey) {
    console.warn('AHMADCLOTHS MAIL WARNING: Neither SMTP_PASSWORD nor RESEND_API_KEY is configured in environment.');
  }

  if (lastError) {
    throw lastError;
  }

  return { simulated: true, to: options.email };
};

module.exports = sendEmail;
