import connectToDatabase from './_connector.js'; // Adjust path if needed

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
});
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

module.exports = async (req, res) => {
  try {
    await connectToDatabase();
    const blogs = await Blog.find().populate('author', 'username');
    res.status(200).json(blogs);
  } catch (err) {
    console.error('Error in /api/blogs/all:', err.message);
    res.status(500).json({ error: 'Failed to fetch blogs', details: err.message });
  }
};