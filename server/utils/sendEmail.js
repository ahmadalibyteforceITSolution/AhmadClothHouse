const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  let transporterConfig;

  // Use OAuth2 if client ID, client secret, and refresh token are provided
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN) {
    transporterConfig = {
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.SMTP_EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    };
  } else {
    // Fallback to standard SMTP (e.g., for App Passwords)
    transporterConfig = {
      service: process.env.SMTP_SERVICE || 'gmail',
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.SMTP_EMAIL || 'your-email@gmail.com',
        pass: process.env.SMTP_PASSWORD || 'your-app-password',
      },
    };
  }

  const transporter = nodemailer.createTransport(transporterConfig);

  const message = {
    from: `${process.env.FROM_NAME || 'Ahmadcloths Security'} <${process.env.FROM_EMAIL || 'security@ahmadclothshouse.com'}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: `
      <div style="font-family: 'Inter', sans-serif; background-color: #050505; color: #fff; padding: 40px; border-radius: 20px; max-width: 600px; margin: auto; border: 1px solid #d4af3733;">
        <h1 style="color: #d4af37; text-transform: uppercase; letter-spacing: 0.2em; font-size: 24px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Ahmadcloths Security Protocol</h1>
        <p style="font-size: 14px; line-height: 1.6; color: #d1d5db; margin-top: 20px;">
          ${options.message.replace(/\n/g, '<br>')}
        </p>
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #d4af3711; font-size: 10px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em;">
          © 2026 AHMADCLOTHS HOUSE. ALL RIGHTS RESERVED. THIS IS AN AUTOMATED SECURITY TRANSMISSION.
        </div>
      </div>
    `
  };

  const info = await transporter.sendMail(message);

  console.log('AHMADCLOTHS MAIL PROTOCOL: Message Transmitted - ID: %s', info.messageId);
};

module.exports = sendEmail;
