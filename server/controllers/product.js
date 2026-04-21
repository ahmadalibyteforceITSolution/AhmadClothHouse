// @desc    Get all products
const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// @desc    Get all products
exports.getProducts = async (req, res) => {
  try {
    // Optimized fetch:
    // 1. Exclude heavy fields (variants, description, details) for list view
    // 2. KEEP image and filterImageUrl so products display correctly
    // 3. Use .lean() for faster execution
    const products = await Product.find()
      .select('-variants -description -details')
      .sort({ createdAt: -1 })
      .limit(100)
      .lean();
    // Cache product list for 30s to reduce DB load on repeated fetches
    res.setHeader('Cache-Control', 'private, max-age=30');
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (err) {
    console.error('AHMADCLOTHS_SERVER_ERROR [Fetch]:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Get all products for ADMIN (includes all details, no hard limits)
exports.getAdminProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 })
      .lean();
    res.setHeader('Cache-Control', 'private, max-age=10'); // less cache for admin, fresher data
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (err) {
    console.error('AHMADCLOTHS_SERVER_ERROR [AdminFetch]:', err.message);
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

// @desc    Get product image directly as binary
exports.getProductImage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).select('image').lean();
    if (!product || !product.image) {
      return res.status(404).json({ success: false, error: 'Image not found' });
    }
    
    // Check if it's base64 data
    if (product.image.startsWith('data:image/')) {
      const parts = product.image.split(';');
      const mime = parts[0].split(':')[1];
      const base64Data = parts[1].replace('base64,', '');
      const imgBuffer = Buffer.from(base64Data, 'base64');
      
      res.set('Cache-Control', 'public, max-age=604800, immutable');
      res.type(mime);
      return res.send(imgBuffer);
    } else {
      // If it's a relative path like /uploads/..., we can redirect to the static file server
      // or if it's an external URL, redirect directly.
      return res.redirect(product.image);
    }
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to stream image' });
  }
};

// @desc    Upload an image to Vercel Blob
exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Please upload an image' });
    }

    const token = process.env.BLOB_READ_WRITE_TOKEN;

    // Check if token exists
    if (!token || token === 'YOUR_VERCEL_BLOB_TOKEN_HERE') {
      console.warn('⚠️ AHMADCLOTHS: Vercel Blob token missing. Falling back to Base64.');
      const base64Data = req.file.buffer.toString('base64');
      const dataUri = `data:${req.file.mimetype};base64,${base64Data}`;
      return res.status(200).json({ 
        success: true, 
        url: dataUri,
        storage: 'base64',
        note: 'BLOB_READ_WRITE_TOKEN not configured. Using Base64 fallback.'
      });
    }
    
    // Attempt Vercel Blob upload
    try {
      const { put } = require('@vercel/blob');

      const uniqueSuffix = crypto.randomBytes(6).toString('hex');
      const ext = path.extname(req.file.originalname) || '.jpg';
      const filename = `products/product-${Date.now()}-${uniqueSuffix}${ext}`;

      console.log(`AHMADCLOTHS: Uploading to Vercel Blob: ${filename} (${req.file.size} bytes)`);
      console.log(`AHMADCLOTHS: Token present: ${!!token}, Token length: ${token.length}`);

      // Explicitly pass the token — Vercel auto-detection can fail in serverless
      const blob = await put(filename, req.file.buffer, {
        access: 'public',
        contentType: req.file.mimetype,
        token: token
      });

      console.log(`AHMADCLOTHS: Blob upload SUCCESS -> ${blob.url}`);
      return res.status(200).json({ success: true, url: blob.url, storage: 'vercel-blob' });

    } catch (blobErr) {
      // LOG THE REAL ERROR so we can debug
      console.error('❌ AHMADCLOTHS Vercel Blob FAILED:', blobErr.message);
      console.error('❌ Full Blob Error:', JSON.stringify(blobErr, Object.getOwnPropertyNames(blobErr)));
      
      // Fallback to Base64 but WARN the admin
      const base64Data = req.file.buffer.toString('base64');
      const dataUri = `data:${req.file.mimetype};base64,${base64Data}`;
      return res.status(200).json({ 
        success: true, 
        url: dataUri,
        storage: 'base64-fallback',
        note: `Vercel Blob error: ${blobErr.message}. Using Base64 fallback. Fix your BLOB_READ_WRITE_TOKEN in Vercel Dashboard.`
      });
    }
  } catch (err) {
    console.error('AHMADCLOTHS_SERVER_ERROR [Upload]:', err.message);
    res.status(500).json({ success: false, error: 'Upload failed: ' + err.message });
  }
};


// @desc    Create a product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    console.error('AHMADCLOTHS_SERVER_ERROR [Create]:', err.message);
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
    console.error('AHMADCLOTHS_SERVER_ERROR [Update]:', err.message);
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
