const mongoose = require('mongoose');

const TrafficSchema = new mongoose.Schema({
  date: {
    type: String, // YYYY-MM-DD
    unique: true,
    required: true
  },
  totalVisitors: {
    type: Number,
    default: 0
  },
  uniqueSessions: {
    type: [String], // Array of session IDs
    default: []
  },
  luxuryIndex: {
    type: Number,
    default: 99.9
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Traffic', TrafficSchema);
