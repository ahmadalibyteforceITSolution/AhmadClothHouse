const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');


router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ success: false, error: 'Email is required' });
    }

    const subscriber = await Subscriber.create({ email });

    res.status(201).json({ success: true, data: subscriber });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ success: false, error: 'Identity already joined' });
    }
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
