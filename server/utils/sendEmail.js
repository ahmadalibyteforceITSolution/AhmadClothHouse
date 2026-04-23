const nodemailer = require('nodemailer');

/**
 * Send an email notification using Nodemailer (Gmail SMTP)
 * @param {Object} options - email options {email, subject, message}
 */
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE || 'gmail',
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL || 'ahmadalihafeez24@gmail.com',
      pass: process.env.SMTP_PASSWORD || 'rfsmuthssmtqjysw'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    console.log('AHMADCLOTHS MAIL: Sending via Nodemailer to %s', options.email);

    const mailOptions = {
      from: `"${process.env.FROM_NAME || 'Ahmad Cloth House'}" <${process.env.SMTP_EMAIL || 'ahmadalihafeez24@gmail.com'}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: `
        <div style="font-family: 'Playfair Display', serif; padding: 40px; background: #fafaf8; border: 1px solid #d4af3722;">
          <h1 style="color: #000; text-align: center; font-style: italic;">AhmadClothesHouse</h1>
          <div style="height: 1px; background: #d4af3744; width: 100px; margin: 20px auto;"></div>
          <div style="color: #444; line-height: 1.8; font-size: 14px;">
            ${options.message.replace(/\n/g, '<br>')}
          </div>
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 10px; color: #999; letter-spacing: 2px;">
            © 2026 AHMADCLOTHESHOUSE LUXURY COUTURE
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('AHMADCLOTHS MAIL SUCCESS: Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('AHMADCLOTHS MAIL ERROR:', error.message);
    throw error;
  }
};

module.exports = sendEmail;
