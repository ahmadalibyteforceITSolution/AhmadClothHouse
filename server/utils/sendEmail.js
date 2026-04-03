const nodemailer = require('nodemailer');

/**
 * Send an email notification using Nodemailer / Gmail SMTP
 * @param {Object} options - email options {email, subject, message}
 */
const sendEmail = async (options) => {
  // Use Vercel Environment variables or fallback to local ones for instant Vercel support
  const smtpEmail = process.env.SMTP_EMAIL || 'ahmadalihafeez24@gmail.com';
  const smtpPassword = process.env.SMTP_PASSWORD || 'rfsmuthssmtqjysw';

  if (!smtpEmail || !smtpPassword) {
    console.error('AHMADCLOTHS MAIL ERROR: SMTP credentials missing.');
    throw new Error('Email service not configured. Please set SMTP_EMAIL and SMTP_PASSWORD.');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  });

  try {
    console.log('AHMADCLOTHS MAIL: Sending via Gmail SMTP to %s', options.email);

    const info = await transporter.sendMail({
      from: `"Ahmad Cloth House" <${smtpEmail}>`,
      to: options.email,
      subject: options.subject,
      html: `
        <div style="font-family: 'Inter', sans-serif; background-color: #050505; color: #fff; padding: 40px; border-radius: 20px; max-width: 600px; margin: auto; border: 1px solid #d4af3733;">
          <h1 style="color: #d4af37; text-transform: uppercase; letter-spacing: 0.2em; font-size: 24px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Ahmad Cloth House</h1>
          <p style="font-size: 14px; line-height: 1.6; color: #d1d5db; margin-top: 20px;">
            ${options.message.replace(/\n/g, '<br>')}
          </p>
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #d4af3711; font-size: 10px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em;">
            &copy; 2026 AHMAD CLOTH HOUSE. ALL RIGHTS RESERVED.
          </div>
        </div>
      `,
      text: options.message,
    });

    console.log('AHMADCLOTHS MAIL SUCCESS: Email sent! Message ID: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('AHMADCLOTHS MAIL ERROR:', error.message);
    throw error;
  }
};

module.exports = sendEmail;
