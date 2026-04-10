const express = require('express');
const router = express.Router();
const { 
  getProductReviews, 
  addReview, 
  getAllReviews, 
  deleteReview 
} = require('../controllers/review');
const { protect, authorize } = require('../middleware/auth');

router.get('/product/:productId', getProductReviews);
router.post('/', protect, addReview);
router.get('/', protect, authorize('admin'), getAllReviews);
router.delete('/:id', protect, deleteReview);

module.exports = router;
