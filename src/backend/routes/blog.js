const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.userId = decoded.userId;
    next();
  });
};

// Create a blog
router.post('/', authenticateToken, async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = new Blog({ title, content, author: req.userId });
    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get user's blogs
router.get('/', authenticateToken, async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.userId }).sort({ timestamp: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a blog
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id, author: req.userId });
    if (!blog) return res.status(404).json({ error: 'Blog not found or unauthorized' });
    await Blog.deleteOne({ _id: req.params.id });
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// New endpoint to get all blogs (public or authenticated, depending on your choice)
router.get('/all', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ timestamp: -1 }).populate('author', 'username'); // Populate author username
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;