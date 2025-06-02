import Meal from '../models/mealModel.js';

export const addMeal = async (req, res) => {
  try {
    const { title, category, duration, imageUrl, ingredients, steps } = req.body;

    // Validate required fields
    if (!title || !duration || !ingredients || !steps) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    // Create new meal (field names must match the schema)
    const meal = await Meal.create({
      title,
      category,
      duration,
      image: imageUrl || 'default-meal.jpg',
      ingredients,
      steps,
    });

    res.status(201).json({
      success: true,
      data: meal,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
