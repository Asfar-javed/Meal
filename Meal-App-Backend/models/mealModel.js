import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Meal name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  category: {
    type: String,
    required: false,
    enum: [
    'Italian',
    'Quick & Easy',
    'Hamburgers',
    'German',
    'Light & Lovely',
    'Exotic',
    'Breakfast',
    'Asian',
    'French',
    'Summer'
  ]
  },
  image: {
    type: String,
    default: 'default-meal.jpg'
  },
  ingredients: {
    type: [String],
    required: true
  },
  duration: {
    type: Number, // in minutes
    required: true
  },
  steps: {
    type: [String],
    required: true
  },
  favorite: {
    type: Boolean,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



export default mongoose.model('Meal', mealSchema);