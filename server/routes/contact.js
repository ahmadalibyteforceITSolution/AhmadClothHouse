const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @desc    Submit a contact inquiry
// @route   POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const inquiry = await Contact.create({
      name,
      email,
      subject,
      message
    });

    res.status(201).json({ success: true, data: inquiry });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// @desc    Get all inquiries (Admin Only)
// @route   GET /api/contact
// (Add protect middleware later if needed, but keeping it simple as per previous admin logic)

module.exports = router;
