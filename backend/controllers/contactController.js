import { Contact } from '../models/index.js';

// ─── Submit Contact Form ───────────────────────────────────
export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      message: 'Your message has been sent successfully. We will get back to you soon!',
      contact,
    });
  } catch (error) {
    console.error('SubmitContact error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
