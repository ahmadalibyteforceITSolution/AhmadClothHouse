const express = require('express');
const router = express.Router();
const { getOrders, getUserOrders, createOrder, updateOrderStatus, deleteOrder, testEmail } = require('../controllers/order');

// Admin routes
router.get('/', getOrders);
router.get('/test-mail', testEmail);
router.put('/:id', updateOrderStatus);
router.delete('/:id', deleteOrder);

// User routes
router.get('/user/:userId', getUserOrders);
router.post('/', createOrder);

module.exports = router;
