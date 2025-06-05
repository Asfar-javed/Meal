import Meal from '../models/mealModel.js';

export const deleteCategoryMeals = async (req, res) => {
  try {
    const categoryTitle = req.params.category;

    const result = await Meal.deleteMany({ category: categoryTitle });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'No meals found in this category',
      });
    }

    res.status(200).json({
      success: true,
      message: `Deleted all meals in category: ${categoryTitle}`,
    });
  } catch (error) {
    console.error('Error deleting category meals:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};



export const getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find({}).sort({ createdAt: -1 }); // Sort by newest first
    
    res.status(200).json({
      success: true,
      count: meals.length,
      data: meals,
    });
  } catch (error) {
    console.error('Error fetching meals:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

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
