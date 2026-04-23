const express = require("express");
const router = express.Router();
const Traffic = require("../models/Traffic");

// In-memory active user tracking
let activeSessions = new Map();

// Helper to get today's date string
const getTodayStr = () => new Date().toISOString().split('T')[0];

// Passive cleanup helper (works better in serverless than setInterval)
const cleanupSessions = () => {
  const now = Date.now();
  for (const [sessionId, lastSeen] of activeSessions.entries()) {
    if (now - lastSeen > 60000) activeSessions.delete(sessionId);
  }
};

// Heartbeat endpoint
router.post("/ping", async (req, res) => {
  const { sessionId } = req.body;
  if (!sessionId) {
    return res.status(400).json({ message: "Session ID required" });
  }
  
  cleanupSessions();
  activeSessions.set(sessionId, Date.now());

  try {
    const today = getTodayStr();
    let traffic = await Traffic.findOne({ date: today });
    
    if (!traffic) {
      traffic = new Traffic({ 
        date: today, 
        uniqueSessions: [sessionId], 
        totalVisitors: 1 
      });
      await traffic.save();
    } else if (!traffic.uniqueSessions.includes(sessionId)) {
      traffic.uniqueSessions.push(sessionId);
      traffic.totalVisitors += 1;
      traffic.lastUpdated = Date.now();
      await traffic.save();
    }
    // If session already exists, we skip saving to reduce DB connections/writes
  } catch (err) {
    console.error("Traffic Error:", err.message);
  }

  res.json({ success: true });
});

const { protect, authorize } = require('../middleware/auth');

// Stats endpoint for Admin Dashboard
router.get("/stats", protect, authorize('admin'), async (req, res) => {
  const activeCount = activeSessions.size;
  const today = getTodayStr();
  
  try {
    const traffic = await Traffic.findOne({ date: today });
    
    res.json({
      activeUsers: activeCount,
      totalToday: traffic ? traffic.totalVisitors : activeCount,
      luxuryIndex: traffic ? traffic.luxuryIndex : 99.9,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.json({
      activeUsers: activeCount,
      totalToday: activeCount,
      luxuryIndex: 99.9,
      timestamp: new Date().toISOString()
    });
  }
});

module.exports = router;
