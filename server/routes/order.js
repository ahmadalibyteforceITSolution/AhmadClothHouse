const express = require('express');
const router = express.Router();
const { getOrders, getOrderById, getUserOrders, createOrder, updateOrderStatus, deleteOrder, testEmail, notifyOrder } = require('../controllers/order');
const { protect, authorize } = require('../middleware/auth');

// Admin routes
router.get('/', protect, authorize('admin'), getOrders);
router.get('/test-mail', protect, authorize('admin'), testEmail);
router.put('/:id', protect, authorize('admin'), updateOrderStatus);
router.delete('/:id', protect, authorize('admin'), deleteOrder);

// User routes
router.get('/user/:userId', getUserOrders);
router.post('/notify', notifyOrder);
router.post('/', createOrder);

// Public Tracking
router.get('/:id', getOrderById);

module.exports = router;
