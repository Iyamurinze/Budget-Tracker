const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  User  = require('./model/userM'); 

const JWT_SECRET = process.env.JWT_SECRET || ' ';

// Signup function
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already existing 
    const existingUser = await User.findOne({ where: { email } });
  
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const newUser = await User.create({ name, email, password: hashedPassword });

    // Generate Token
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    });
    
    res.status(201).json({
      message: 'Signup successful',
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: hashedPassword,
      token,
    });
}
  catch (error) {
    console.error('Signup error5:', error);
    res.status(500).json({ message: 'Server error5' });
  }
};

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Request body:", req.body);

    // Get user
    const user = await User.findOne({ where: { email } });
  console.log(user.password)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password); 
    console.log(isMatch)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const tok= jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });

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


//I will use this later  

// , (err, result) => {
//   if (err) {
//       // Handle error
//       console.error('Error comparing passwords:', err);
//       return;
//   }

// if (result) {
//   // Passwords match, authentication successful
//   console.log('Passwords match! User authenticated.');
// } else {
//   // Passwords don't match, authentication failed
//   console.log('Passwords do not match! Authentication failed.');
// }
// }