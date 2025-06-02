import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import mealRoutes from './routes/mealRoutes.js';

// Initialize app and middleware
const app = express();
app.use(cors());
app.use(express.json()); // body-parser is now built into Express

// Load environment variables
dotenv.config();

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Connection error:', err.message);
    process.exit(1);
  }
};

// Routes
app.get('/', (req, res) => res.send('API Running'));

// Start server
const start = async () => {
  await connectDB();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};
app.use('/api', mealRoutes);
start();