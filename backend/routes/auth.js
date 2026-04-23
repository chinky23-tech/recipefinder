import { Router } from 'express';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';
import auth from '../middleware/auth.js';
import {
  register,
  login,
  refresh,
  logout,
  getMe,
  forgetPassword,
} from '../controllers/authController.js';

const router = Router();

// ─── POST /api/auth/register ───────────────────────────────
router.post(
  '/register',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
    validate,
  ],
  register
);

// ─── POST /api/auth/login ──────────────────────────────────
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
    validate,
  ],
  login
);

// ─── POST /api/auth/refresh ────────────────────────────────
router.post(
  '/refresh',
  [
    body('refreshToken').notEmpty().withMessage('Refresh token is required'),
    validate,
  ],
  refresh
);

// ─── POST /api/auth/logout ─────────────────────────────────
router.post(
  '/logout',
  [
    body('refreshToken').notEmpty().withMessage('Refresh token is required'),
    validate,
  ],
  logout
);

// ─── GET /api/auth/me (Protected) ──────────────────────────
router.get('/me', auth, getMe);

// ─── POST /api/auth/forget-password ────────────────────────
router.post(
  '/forget-password',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    validate,
  ],
  forgetPassword
);

export default router;
