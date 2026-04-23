import { Router } from 'express';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';
import auth from '../middleware/auth.js';
import {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from '../controllers/recipeController.js';

const router = Router();

// ─── GET /api/recipes ──────────────────────────────────────
router.get('/', getRecipes);

// ─── GET /api/recipes/:id ──────────────────────────────────
router.get('/:id', getRecipe);

// ─── POST /api/recipes (Protected) ─────────────────────────
router.post(
  '/',
  auth,
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('category')
      .isIn(['breakfast', 'lunch', 'dinner'])
      .withMessage('Category must be breakfast, lunch, or dinner'),
    body('ingredients').isArray().withMessage('Ingredients must be an array'),
    body('instructions').isArray().withMessage('Instructions must be an array'),
    validate,
  ],
  createRecipe
);

// ─── PUT /api/recipes/:id (Protected) ──────────────────────
router.put('/:id', auth, updateRecipe);

// ─── DELETE /api/recipes/:id (Protected) ────────────────────
router.delete('/:id', auth, deleteRecipe);

export default router;
