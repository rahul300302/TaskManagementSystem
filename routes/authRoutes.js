// routes/authRoutes.js
const express = require('express');
const { signup, login } = require('../controller/athuController');
const router = express.Router();

// POST /auth/signup - User Signup
router.post('/signup', signup);

// POST /auth/login - User Login
router.post('/login', login);

module.exports = router;
