const { Resend } = require('resend');

/**
 * Send an email notification using Resend API
 * @param {Object} options - email options {email, subject, message}
 */
const sendEmail = async (options) => {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error('AHMADCLOTHS MAIL ERROR: RESEND_API_KEY is not set in .env');
    throw new Error('Email service not configured. Please set RESEND_API_KEY.');
  }

  const resend = new Resend(apiKey);

  try {
    console.log('AHMADCLOTHS MAIL: Sending via Resend API to %s', options.email);

    const { data, error } = await resend.emails.send({
      from: 'Ahmad Cloth House <onboarding@resend.dev>',
      to: [options.email],
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

    if (error) {
      console.error('AHMADCLOTHS MAIL ERROR:', error);
      throw new Error(error.message);
    }

    console.log('AHMADCLOTHS MAIL SUCCESS: Email sent! ID: %s', data?.id);
    return data;
  } catch (error) {
    console.error('AHMADCLOTHS MAIL ERROR:', error.message);
    throw error;
  }
};

module.exports = sendEmail;
