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
router.get('/', async (req, res) => {
  try {
    const inquiries = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// @desc    Update inquiry status
// @route   PUT /api/contact/:id
router.put('/:id', async (req, res) => {
  try {
    const inquiry = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!inquiry) {
      return res.status(404).json({ success: false, error: 'Inquiry not found' });
    }

    res.status(200).json({ success: true, data: inquiry });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// @desc    Delete an inquiry
// @route   DELETE /api/contact/:id
router.delete('/:id', async (req, res) => {
  try {
    const inquiry = await Contact.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ success: false, error: 'Inquiry not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
