import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { User, RefreshToken } from '../models/index.js';

// ─── Helper: Generate Access Token (short-lived) ───────────
const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRE || '15m' }
  );
};

// ─── Helper: Generate & Store Refresh Token (long-lived) ───
const generateRefreshToken = async (user) => {
  // Generate a random token string
  const tokenValue = crypto.randomBytes(40).toString('hex');

  // Calculate expiry (default 7 days)
  const expireDays = parseInt(process.env.JWT_REFRESH_EXPIRE) || 7;
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + expireDays);

  // Store in database
  await RefreshToken.create({
    token: tokenValue,
    userId: user.id,
    expiresAt,
  });

  return tokenValue;
};

// ─── Register ──────────────────────────────────────────────
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // Create user (password is hashed by the model hook)
    const user = await User.create({ name, email, password });

    // Generate tokens
    const accessToken = generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    res.status(201).json({
      message: 'User registered successfully.',
      user: user.toJSON(),
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// ─── Login ─────────────────────────────────────────────────
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Validate password
    const isValidPassword = await user.validatePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate tokens
    const accessToken = generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    res.json({
      message: 'Login successful.',
      user: user.toJSON(),
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// ─── Refresh Token ─────────────────────────────────────────
export const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh token is required.' });
    }

    // Find the refresh token in the database
    const storedToken = await RefreshToken.findOne({
      where: { token: refreshToken },
      include: [{ model: User, as: 'user' }],
    });

    if (!storedToken) {
      return res.status(401).json({ message: 'Invalid refresh token.' });
    }

    // Check if the token is expired
    if (storedToken.isExpired()) {
      await storedToken.destroy(); // Clean up expired token
      return res.status(401).json({ message: 'Refresh token has expired. Please login again.' });
    }

    // Generate a new access token
    const accessToken = generateAccessToken(storedToken.user);

    res.json({
      message: 'Token refreshed successfully.',
      accessToken,
    });
  } catch (error) {
    console.error('Refresh error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// ─── Logout ────────────────────────────────────────────────
export const logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh token is required.' });
    }

    // Delete the refresh token from the database
    const deleted = await RefreshToken.destroy({ where: { token: refreshToken } });

    if (!deleted) {
      return res.status(400).json({ message: 'Refresh token not found.' });
    }

    res.json({ message: 'Logged out successfully.' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// ─── Get Current User ──────────────────────────────────────
export const getMe = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ user: user.toJSON() });
  } catch (error) {
    console.error('GetMe error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// ─── Forget Password ───────────────────────────────────────
export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      // Don't reveal if user exists or not (security best practice)
      return res.json({ message: 'If an account with that email exists, a password reset link has been sent.' });
    }

    // Generate a reset token (in production, store this and send via email)
    const resetToken = crypto.randomBytes(32).toString('hex');

    console.log('─────────────────────────────────────────');
    console.log('PASSWORD RESET REQUEST');
    console.log(`User: ${user.email}`);
    console.log(`Reset Token: ${resetToken}`);
    console.log(`Reset URL: http://localhost:5173/reset-password?token=${resetToken}`);
    console.log('─────────────────────────────────────────');

    res.json({ message: 'If an account with that email exists, a password reset link has been sent.' });
  } catch (error) {
    console.error('ForgetPassword error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
