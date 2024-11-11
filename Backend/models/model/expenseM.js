const { DataTypes } = require('sequelize');
const sequelize = require('../../db/dbs');

const Expense = sequelize.define('Expense', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        defaultValue: 'expense',
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'expenses',  // Explicitly specify the table name if needed
    timestamps: true,       // Automatically adds `createdAt` and `updatedAt`
});

module.exports = Expense;
