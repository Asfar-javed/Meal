import express from 'express';
import { addMeal, getAllMeals, deleteCategoryMeals, toggleFavorite, // ✅ Make sure this is imported
  getFavoriteMeals, deleteMeal } from '../controllers/mealController.js';

const router = express.Router();

router.post('/meals', addMeal);
router.get('/getmeals', getAllMeals);
router.delete('/deletecategory/:category', deleteCategoryMeals);
router.patch('/togglefavorite/:id', toggleFavorite);
router.get('/favorites', getFavoriteMeals);
router.delete("/deletemeal/:id", deleteMeal);


export default router;