const Review = require('../models/Review');
const Product = require('../models/Product');
const mongoose = require('mongoose');

// @desc    Get all approved reviews for a product
// @route   GET /api/reviews/product/:productId
exports.getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ 
      product: req.params.productId,
      status: 'approved' // Only show approved reviews
    })
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: reviews.length, data: reviews });
  } catch (err) {
    console.error(`❌ [Review Error]: ${err.message}`);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch reviews',
      details: err.message,
      productId: req.params.productId 
    });
  }
};

// @desc    Add a review
// @route   POST /api/reviews
exports.addReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    
    // Check if product exists (only if it's a valid MongoDB ObjectId)
    if (mongoose.Types.ObjectId.isValid(productId)) {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ success: false, error: 'Product not found in database' });
      }
    } else {
      // For hardcoded products, we just verify the ID exists in the request
      if (!productId) {
        return res.status(400).json({ success: false, error: 'Product ID is required' });
      }
      console.log(`📝 [Review]: Adding review for hardcoded product ${productId}`);
    }

    const review = await Review.create({
      product: productId,
      user: req.user.id, // Authenticated user
      userName: req.user.name,
      rating,
      comment
    });

    res.status(201).json({ success: true, data: review });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Get all reviews (Admin)
// @route   GET /api/reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate('product', 'name image')
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: reviews });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ success: false, error: 'Review not found' });
    }

    // Check if user is owner or admin
    if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ success: false, error: 'Not authorized' });
    }

    await review.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Update review status (Admin)
// @route   PATCH /api/reviews/:id/status
exports.updateReviewStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status' });
    }

    const review = await Review.findByIdAndUpdate(
      req.params.id, 
      { status }, 
      { new: true, runValidators: true }
    ).populate('product', 'name image');

    if (!review) {
      return res.status(404).json({ success: false, error: 'Review not found' });
    }

    res.status(200).json({ success: true, data: review });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
