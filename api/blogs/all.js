import connectToDatabase from '../_connector.js'; // Path to shared connector

const mongoose = await import('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
});
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default async function handler(req, res) {
  try {
    await connectToDatabase(); // Use cached connection
    const blogs = await Blog.find().populate('author', 'username');
    if (!blogs || blogs.length === 0) {
      return res.status(404).json({ error: 'No blogs found' });
    }
    res.status(200).json(blogs);
  } catch (err) {
    console.error('Error in /api/blogs/all:', err.message); // Log for Vercel Functions Logs
    res.status(500).json({ error: 'Failed to fetch blogs', details: err.message });
  }
}