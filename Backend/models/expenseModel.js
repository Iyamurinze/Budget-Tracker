const Expense = require('../models/model/expenseM');

// Function to add a new expense record
const addExpense = async (expenseData) => {
    try {
        const expense = await Expense.create(expenseData);
        return expense;
    } catch (error) {
        console.error("Error adding expense:", error);
        throw error;
    }
};

// Function to get all expense records
const getExpenses = async () => {
    try {
        const expenses = await Expense.findAll({ userId: req.user.id });
        return expenses;
    } catch (error) {
        console.error("Error retrieving expenses:", error);
        throw error;
    }
};

// Function to get a specific expense record by ID
const getExpenseById = async (id) => {
    try {
        const expense = await Expense.findByPk(id);
        return expense;
    } catch (error) {
        console.error("Error retrieving expense by ID:", error);
        throw error;
    }
};

// Function to update an expense record
const updateExpense = async (id, expenseData) => {
    try {
        await Expense.update(expenseData, { where: { id } });
        const updatedExpense = await Expense.findByPk(id);
        return updatedExpense;
    } catch (error) {
        console.error("Error updating expense:", error);
        throw error;
    }
};

// Function to delete an expense record by ID
const deleteExpense = async (id) => {
    try {
        await Expense.destroy({ where: { id } });
        return { message: "Expense deleted successfully" };
    } catch (error) {
        console.error("Error deleting expense:", error);
        throw error;
    }
};

module.exports = {
    addExpense,
    getExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense,
};
