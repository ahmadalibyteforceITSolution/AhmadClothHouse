// @desc    Get all products
const Product = require('../models/Product');

// @desc    Get all products
exports.getProducts = async (req, res) => {
  try {
    // Optimized fetch:
    // 1. Exclude large fields like 'variants', 'description', and 'details' for list view
    // 2. Use .lean() for faster execution
    const products = await Product.find()
      .select('-variants -description -details')
      .sort({ createdAt: -1 })
      .lean();
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (err) {
    console.error('FUDGEABLES_SERVER_ERROR [Fetch]:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Get single product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) return res.status(404).json({ success: false, error: 'Product not found' });
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Upload an image
exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Please upload an image' });
    }
    const url = `/uploads/${req.file.filename}`;
    res.status(200).json({ success: true, url });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Create a product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    console.error('FUDGEABLES_SERVER_ERROR [Create]:', err.message);
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update a product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
      runValidators: true
    });
    if (!product) return res.status(404).json({ success: false, error: 'Product not found' });
    
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    console.error('FUDGEABLES_SERVER_ERROR [Update]:', err.message);
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, error: 'Product not found' });
    
    await product.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Increment product views
exports.viewProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, 
      { $inc: { views: 1 } }, 
      { returnDocument: 'after' }
    );
    if (!product) return res.status(404).json({ success: false, error: 'Product not found' });
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Mock sale
exports.recordSale = async (req, res) => {
  try {
    const { quantity } = req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, 
      { $inc: { sales: quantity || 1 } }, 
      { returnDocument: 'after' }
    );
    if (!product) return res.status(404).json({ success: false, error: 'Product not found' });
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
