import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Recipe = sequelize.define('Recipe', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Title is required' },
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ingredients: {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: [],
  },
  instructions: {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: [],
  },
  category: {
    type: DataTypes.ENUM('breakfast', 'lunch', 'dinner'),
    allowNull: false,
    validate: {
      isIn: {
        args: [['breakfast', 'lunch', 'dinner']],
        msg: 'Category must be breakfast, lunch, or dinner',
      },
    },
  },
  prepTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'Users',
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
}, {
  timestamps: true,
});

export default Recipe;
