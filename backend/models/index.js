import sequelize from '../config/database.js';
import User from './User.js';
import RefreshToken from './RefreshToken.js';
import Recipe from './Recipe.js';
import Contact from './Contact.js';

// ─── Associations ────────────────────────────────────────────

// User has many RefreshTokens
User.hasMany(RefreshToken, { foreignKey: 'userId', as: 'refreshTokens', onDelete: 'CASCADE' });
RefreshToken.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// User has many Recipes
User.hasMany(Recipe, { foreignKey: 'createdBy', as: 'recipes', onDelete: 'SET NULL' });
Recipe.belongsTo(User, { foreignKey: 'createdBy', as: 'author' });

export { sequelize, User, RefreshToken, Recipe, Contact };
