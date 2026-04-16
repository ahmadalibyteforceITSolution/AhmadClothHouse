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
      from: 'AhmadClothesHouse Support <onboarding@resend.dev>',
      to: [options.email],
      subject: options.subject,
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
