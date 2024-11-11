const Income = require('../models/model/incomeM');

// Function to add a new income record
const addIncome = async (incomeData) => {
    try {
        const income = await Income.create(incomeData);
        return income;
    } catch (error) {
        console.error("Error adding income:", error);
        throw error;
    }
};

// Function to get all income records
const getIncomes = async () => {
    try {
        const incomes = await Income.findAll({ order: [['date', 'DESC']] });
        return incomes;
    } catch (error) {
        console.error("Error retrieving incomes:", error);
        throw error;
    }
};

// Function to get a specific income record by ID
const getIncomeById = async (id) => {
    try {
        const income = await Income.findByPk(id);
        return income;
    } catch (error) {
        console.error("Error retrieving income by ID:", error);
        throw error;
    }
};

// Function to update an income record
const updateIncome = async (id, incomeData) => {
    try {
        await Income.update(incomeData, { where: { id } });
        const updatedIncome = await Income.findByPk(id);
        return updatedIncome;
    } catch (error) {
        console.error("Error updating income:", error);
        throw error;
    }
};

// Function to delete an income record by ID
const deleteIncome = async (id) => {
    try {
        await Income.destroy({ where: { id } });
        return { message: "Income deleted successfully" };
    } catch (error) {
        console.error("Error deleting income:", error);
        throw error;
    }
};

module.exports = {
    addIncome,
    getIncomes,
    getIncomeById,
    updateIncome,
    deleteIncome,
};
