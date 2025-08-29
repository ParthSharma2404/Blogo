import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const uri = process.env.MONGODB_URI || process.env.MONGODB_URI_LOCAL || 'mongodb://localhost:27017/blogodb';
    cached.promise = mongoose.connect(uri, { bufferCommands: false, serverSelectionTimeoutMS: 5000 }).then(mongoose => {
      console.log('Connected to MongoDB');
      return mongoose;
    }).catch(err => {
      console.error('Connection error:', err.message);
      throw err;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  return cached.conn;
}

export default connectToDatabase;