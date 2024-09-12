// authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/userModel');
const env = require('../db')

// Signup
exports.signup = async (req, res) => {

  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const find = await User.find({ email })
    if (find.length > 0) {
      let id = find[0]._id.toString()
      res.status(401).json({
        result: false,
        message: 'User Email Already exits ',
        id: id
      });
    } else {
      const user = await User.create({ email, password: hashedPassword });
      const token = jwt.sign({ id: user._id.toString() }, env.config.JWT_SECRET, { expiresIn: '12h' });
      res.status(201).json({ token });
    }
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log("hihhihihiii");
    
    const token = jwt.sign({ id: user._id.toString() }, env.config.JWT_SECRET, { expiresIn: '12h' });
    res.status(200).json({
      result: true,
      message: `Login Successfully`,
      user_data: user,
      token
    });
  } catch (error) {
    console.error('Error during Login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

};
