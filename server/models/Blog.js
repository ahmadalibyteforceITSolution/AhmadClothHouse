const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  id: Number,
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  date: { type: String, default: () => new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) },
  author: { type: String, default: 'Ahmad Cloth House Editorial' },
  category: { type: String, required: true },
  image: { type: String },
  summary: { type: String },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
