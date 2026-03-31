const express = require('express');
const router = express.Router();
const { register, login, googleLogin, forgotPassword, resetPassword, getUsers, updateUser, deleteUser } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/google-login', googleLogin);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:resetToken', resetPassword);

// User Management Routes
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
