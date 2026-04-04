const express = require("express");
const router = express.Router();

// In-memory active user tracking
// In a production environment with multiple instances, use Redis.
let activeSessions = new Map();

// Middleware to clean up old sessions every minute
setInterval(() => {
  const now = Date.now();
  for (const [sessionId, lastSeen] of activeSessions.entries()) {
    if (now - lastSeen > 60000) { // 1 minute timeout
      activeSessions.delete(sessionId);
    }
  }
}, 60000);

// Heartbeat endpoint
router.post("/ping", (req, res) => {
  const { sessionId } = req.body;
  if (!sessionId) {
    return res.status(400).json({ message: "Session ID required" });
  }
  
  activeSessions.set(sessionId, Date.now());
  res.json({ success: true });
});

// Stats endpoint for Admin Dashboard
router.get("/stats", (req, res) => {
  // Simple active count
  const activeCount = activeSessions.size;
  
  // Simulated historical data for traffic charts if needed
  res.json({
    activeUsers: activeCount,
    totalToday: activeCount * 12, // For demo purposes
    luxuryIndex: 99.9,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
