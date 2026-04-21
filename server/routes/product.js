const express = require('express');
const router = express.Router();
const { getProducts, getProduct, getProductImage, createProduct, updateProduct, deleteProduct, viewProduct, recordSale, uploadImage } = require('../controllers/product');
const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const { protect, authorize } = require('../middleware/auth');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.get('/:id/image', getProductImage);
router.post('/', protect, authorize('admin'), createProduct);
router.post('/upload', protect, authorize('admin'), upload.single('image'), uploadImage);
router.put('/:id', protect, authorize('admin'), updateProduct);
router.delete('/:id', protect, authorize('admin'), deleteProduct);
router.patch('/views/:id', viewProduct);
router.post('/sale/:id', recordSale);

module.exports = router;
