const express = require('express');
const router = express.Router();
const { 
  getProductReviews, 
  addReview, 
  getAllReviews, 
  deleteReview,
  updateReviewStatus
} = require('../controllers/review');
const { protect, authorize } = require('../middleware/auth');

router.get('/product/:productId', getProductReviews);
router.post('/', protect, addReview);
router.get('/', protect, authorize('admin'), getAllReviews);
router.patch('/:id/status', protect, authorize('admin'), updateReviewStatus);
router.delete('/:id', protect, deleteReview);

module.exports = router;
