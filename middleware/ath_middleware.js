// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
const env = require('../db')

module.exports.protect = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Not authorized' });
  }
  jwt.verify(token, env.config.JWT_SECRET, async (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired, please log in again' });
      }
      return res.status(401).json({ message: 'Token is not valid' });
    }
    req.user = await User.findById(decoded.id);
    next();
  });
};
