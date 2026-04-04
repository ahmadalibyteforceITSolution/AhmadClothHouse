const express = require("express");
const router = express.Router();
const Monetization = require("../models/Monetization");

// Get monetization settings
router.get("/", async (req, res) => {
  try {
    let settings = await Monetization.findOne();
    if (!settings) {
      settings = new Monetization();
      await settings.save();
    }
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching monetization settings" });
  }
});

// Update monetization settings
router.post("/", async (req, res) => {
  try {
    const { publisherId, adSnippet, isActive } = req.body;
    let settings = await Monetization.findOne();
    
    if (!settings) {
      settings = new Monetization({ publisherId, adSnippet, isActive });
    } else {
      settings.publisherId = publisherId;
      settings.adSnippet = adSnippet;
      settings.isActive = isActive;
      settings.lastUpdated = Date.now();
    }

    await settings.save();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: "Server error updating monetization settings" });
  }
});

module.exports = router;
