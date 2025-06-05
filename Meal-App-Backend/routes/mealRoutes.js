import express from 'express';
import { addMeal, getAllMeals, deleteCategoryMeals } from '../controllers/mealController.js';

const router = express.Router();

router.post('/meals', addMeal);
router.get('/getmeals', getAllMeals);

router.delete('/deletecategory/:category', deleteCategoryMeals);


export default router;