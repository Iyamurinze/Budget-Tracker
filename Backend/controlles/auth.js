const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/model/userM'); 

const JWT_SECRET = process.env.JWT_SECRET || ' ';

// Signup function
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await User.create({ name, email, password: hashedPassword });

    // Generate token
    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      token,
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Get user
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  signup,
  login,
};
