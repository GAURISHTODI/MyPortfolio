// api/send-email.js (Improved Version)

const express = require('express');
const { Resend } = require('resend');
const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY); 
const myEmail = process.env.MY_PERSONAL_EMAIL;

router.post('/send-email', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: [myEmail],
            subject: `New Portfolio Message: ${subject}`,
            // CHANGE 'react:' TO 'html:' AND ADD STYLING
            html: `
              <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6;">
                <h1 style="color: #1a1a1a;">New Message from Your Portfolio</h1>
                <hr style="border: none; border-top: 1px solid #eee;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <br>
                <p><strong>Message:</strong></p>
                <p style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">${message}</p>
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

module.exports = router;