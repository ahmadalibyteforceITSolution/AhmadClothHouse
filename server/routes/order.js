const express = require('express');
const router = express.Router();
const { getOrders, getUserOrders, createOrder, updateOrderStatus, deleteOrder } = require('../controllers/order');

// Admin routes
router.get('/', getOrders);
router.put('/:id', updateOrderStatus);
router.delete('/:id', deleteOrder);

// User routes
router.get('/user/:userId', getUserOrders);
router.post('/', createOrder);

module.exports = router;
