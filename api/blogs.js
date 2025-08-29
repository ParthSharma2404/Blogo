const mongoose = require('mongoose');
require('dotenv').config({ path: './src/backend/.env' });
const connectDB = require('../src/backend/config/db');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
});
const Blog = mongoose.model('Blog', blogSchema);

connectDB();

module.exports = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};