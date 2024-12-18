const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./model/userM');

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

// Signup function
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = await User.create({ name, email, password: hashedPassword });

    // Generate a JWT token
    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // Send success response
    res.status(201).json({
      message: 'Signup successful',
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

    // Check if the user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

     // Compare the provided password with the hashed password in the database
     const isMatch = await bcrypt.compare(password, user.password);
     if (isMatch) {
       return res.status(400).json({ message: 'you are welcome' });
     }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });

    // Send success response
    res.status(200).json({
      message: 'Login successful, welcome...',
      id: user.id,
      name: user.name,
      email: user.email,
      token,
      redirectTo: '/dashboard',
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Export the functions
module.exports = {
  signup,
  login,
};
