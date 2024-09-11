const jwt = require('jsonwebtoken');

// Helper function to sign JWT
exports.signJwt = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Helper function to verify JWT
exports.verifyJwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
