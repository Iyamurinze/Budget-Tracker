const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('Database connection error:', err));
};

module.exports = db;
