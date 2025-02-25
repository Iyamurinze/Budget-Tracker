const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,  // Add port explicitly
        dialect: process.env.DB_DIALECT,
        logging: false,  // Disable logging (optional)
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }
);

// Test the connection
sequelize.authenticate()
    .then(() => console.log('PostgreSQL database connected successfully'))
    .catch(err => console.error('Unable to connect to the PostgreSQL database:', err));

module.exports = sequelize;
