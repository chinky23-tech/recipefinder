import { Recipe, User } from '../models/index.js';

// ─── Get All Recipes (with optional category filter) ───────
export const getRecipes = async (req, res) => {
  try {
    const { category, search } = req.query;
    const where = {};

    if (category) {
      where.category = category;
    }

    if (search) {
      const { Op } = await import('sequelize');
      where.title = { [Op.iLike]: `%${search}%` };
    }

    const recipes = await Recipe.findAll({
      where,
      include: [{ model: User, as: 'author', attributes: ['id', 'name'] }],
      order: [['createdAt', 'DESC']],
    });

    res.json({ recipes });
  } catch (error) {
    console.error('GetRecipes error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// ─── Get Single Recipe ─────────────────────────────────────
export const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id, {
      include: [{ model: User, as: 'author', attributes: ['id', 'name'] }],
    });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found.' });
    }

    res.json({ recipe });
  } catch (error) {
    console.error('GetRecipe error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// ─── Create Recipe (Protected) ─────────────────────────────
export const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions, category, prepTime, image } = req.body;

    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      instructions,
      category,
      prepTime,
      image,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: 'Recipe created successfully.',
      recipe,
    });
  } catch (error) {
    console.error('CreateRecipe error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// ─── Update Recipe (Protected) ─────────────────────────────
export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found.' });
    }

    // Only the creator can update
    if (recipe.createdBy !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this recipe.' });
    }

    const { title, description, ingredients, instructions, category, prepTime, image } = req.body;

    await recipe.update({
      title: title || recipe.title,
      description: description ?? recipe.description,
      ingredients: ingredients || recipe.ingredients,
      instructions: instructions || recipe.instructions,
      category: category || recipe.category,
      prepTime: prepTime ?? recipe.prepTime,
      image: image ?? recipe.image,
    });

    res.json({
      message: 'Recipe updated successfully.',
      recipe,
    });
  } catch (error) {
    console.error('UpdateRecipe error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// ─── Delete Recipe (Protected) ─────────────────────────────
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found.' });
    }

    // Only the creator can delete
    if (recipe.createdBy !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this recipe.' });
    }

    await recipe.destroy();

    res.json({ message: 'Recipe deleted successfully.' });
  } catch (error) {
    console.error('DeleteRecipe error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
