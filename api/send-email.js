// api/index.js
const express = require('express');
const { Resend } = require('resend');

const app = express();
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_PERSONAL_EMAIL;

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: [myEmail],
      subject: `New Portfolio Message: ${subject}`,
      react: `
        <div>
          <h1>New message from ${name}</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error({ error });
      return res.status(500).json({ error: 'Failed to send email.' });
    }

    return res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An internal server error occurred.' });
  }
});

module.exports = app;