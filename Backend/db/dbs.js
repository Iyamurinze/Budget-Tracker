const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('budget-tracker', 'jeremie', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
