import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    const opts = {
      bufferCommands: false, // Disable buffering on initial connect
      serverSelectionTimeoutMS: 5000, // 5-second timeout
      maxPoolSize: 10, // Limit connections for serverless (Atlas free tier)
    };

    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
      console.log('Connected to MongoDB Atlas successfully');
      return mongoose;
    }).catch((err) => {
      console.error('MongoDB connection error:', err.message);
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