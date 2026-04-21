const express = require('express');
const router = express.Router();
const { register, login, googleLogin, forgotPassword, resetPassword, getUsers, updateUser, deleteUser } = require('../controllers/auth');
const { protect, authorize } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/google-login', googleLogin);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:resetToken', resetPassword);

// User Management Routes (Admin Only)
router.get('/users', protect, authorize('admin'), getUsers);
router.put('/users/:id', protect, authorize('admin'), updateUser);
router.delete('/users/:id', protect, authorize('admin'), deleteUser);

module.exports = router;
