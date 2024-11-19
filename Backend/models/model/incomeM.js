const { DataTypes } = require('sequelize');
const sequelize = require('../../db/dbs');

const Income = sequelize.define('Income', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: 'incomes',  // Specify the table name
    timestamps: false,    // Disable automatic timestamp columns
});

module.exports = Income;
