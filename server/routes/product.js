const express = require('express');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct, viewProduct, recordSale, uploadImage } = require('../controllers/product');
const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.post('/upload', upload.single('image'), uploadImage);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.patch('/views/:id', viewProduct);
router.post('/sale/:id', recordSale);

module.exports = router;
