import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI missing');
    cached.promise = mongoose.connect(uri, { bufferCommands: false, serverSelectionTimeoutMS: 5000 }).then(mongoose => {
      console.log('Atlas connected');
      return mongoose;
    }).catch(err => {
      console.error('Atlas error:', err.message);
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