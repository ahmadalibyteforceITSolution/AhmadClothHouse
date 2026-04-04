const mongoose = require("mongoose");

const MonetizationSchema = new mongoose.Schema({
  publisherId: {
    type: String,
    default: ""
  },
  adSnippet: {
    type: String,
    default: ""
  },
  isActive: {
    type: Boolean,
    default: false
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Monetization", MonetizationSchema);
