const mongoose = require('mongoose');

const VariantSchema = new mongoose.Schema({
  size: { type: String, required: true },
  color: { type: String, required: true },
  image: { type: String, required: true }
});

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  separateName: { type: String },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  category: { type: String, required: true },
  parentCategory: { type: String },
  nature: { type: String, default: 'standard' },
  image: { type: String, required: true }, // Base64 or URL
  filterImageUrl: { type: String },
  description: { type: String },
  details: { type: [String], default: ["Ahmadcloths Guaranteed", "Premium Luxury Fabric"] },
  variants: { type: [VariantSchema], default: [] },
  views: { type: Number, default: 0 },
  sales: { type: Number, default: 0 },
  costPrice: { type: Number, default: 0 },
  icon: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

ProductSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Product', ProductSchema);

