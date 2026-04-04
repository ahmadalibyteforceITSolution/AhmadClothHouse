const express = require('express');
const router = express.Router();
const { getOrders, getOrderById, getUserOrders, createOrder, updateOrderStatus, deleteOrder, testEmail } = require('../controllers/order');

// Admin routes
router.get('/', getOrders);
router.get('/test-mail', testEmail);
router.put('/:id', updateOrderStatus);
router.delete('/:id', deleteOrder);

// User routes
router.get('/user/:userId', getUserOrders);
router.post('/', createOrder);

// Public Tracking
router.get('/:id', getOrderById);

module.exports = router;
