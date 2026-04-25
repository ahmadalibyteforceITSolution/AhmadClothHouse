const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  product: {
    type: String, // Supports both MongoDB ObjectIds and Hardcoded IDs (e.g. 'mariab-001')
    ref: 'Product',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Clear existing model to prevent "Cast to ObjectId" errors when schema changes
if (mongoose.models.Review) {
  delete mongoose.models.Review;
}

module.exports = mongoose.model('Review', ReviewSchema);
