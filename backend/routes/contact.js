import { Router } from 'express';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';
import { submitContact } from '../controllers/contactController.js';

const router = Router();

// ─── POST /api/contact ─────────────────────────────────────
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('message').trim().notEmpty().withMessage('Message is required'),
    validate,
  ],
  submitContact
);

export default router;
