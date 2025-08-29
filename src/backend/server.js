const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env' }); // Points to root .env from src/backend

const app = express();

// Cached MongoDB Connection
let cachedDb = null;
async function connectDB() {
  if (cachedDb) return cachedDb;
  try {
    cachedDb = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log('Connected to MongoDB Atlas');
    return cachedDb;
  } catch (error) {
    console.error('Atlas connection error:', error.message);
    process.exit(1);
  }
}

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Models
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
});
const Blog = mongoose.model('Blog', blogSchema);

// Routes
app.post('/api/login', async (req, res) => {
  try {
    await connectDB();
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/blogs', async (req, res) => {
  try {
    await connectDB();
    const blogs = await Blog.find().populate('author', 'username');
    if (!blogs || blogs.length === 0) {
      return res.status(404).json({ error: 'No blogs found' });
    }
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Seed Data (Optional, for testing)
app.get('/api/seed', async (req, res) => {
  try {
    await connectDB();
    const user = new User({ email: 'test@example.com', username: 'testuser', password: await bcrypt.hash('password123', 10) });
    await user.save();
    const blog = new Blog({ title: 'Sample Blog', content: 'This is a test blog.', author: user._id });
    await blog.save();
    res.json({ message: 'Seeded data successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));