const dbs  = require('../app'); // Import MySQL connection from app.js

// Create Expense Table if it doesn't exist
const createExpenseTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS expenses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(50) NOT NULL,
            amount DECIMAL(10, 2) NOT NULL,
            type VARCHAR(20) DEFAULT 'expense',
            date DATE NOT NULL,
            category VARCHAR(50) NOT NULL,
            description VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `;
    dbs.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating expenses table:", err);
        } else {
            console.log("Expenses table created or exists already.");
        }
    });
};

// Call function to create table on import
createExpenseTable();

// Function to add a new expense record
const addExpense = (expenseData, callback) => {
    const { title, amount, type, date, category, description } = expenseData;
    const sql = `INSERT INTO expenses (title, amount, type, date, category, description) VALUES (?, ?, ?, ?, ?, ?)`;
    dbs.query(sql, [title, amount, type, date, category, description], (err, result) => {
        callback(err, result);
    });
};

// Function to get all expense records
const getExpenses = (callback) => {
    const sql = `SELECT * FROM expenses ORDER BY date DESC`;
    dbs.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Function to get a specific expense record by ID
const getExpenseById = (id, callback) => {
    const sql = `SELECT * FROM expenses WHERE id = ?`;
    dbs.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};

// Function to update an expense record
const updateExpense = (id, expenseData, callback) => {
    const { title, amount, type, date, category, description } = expenseData;
    const sql = `
        UPDATE expenses SET title = ?, amount = ?, type = ?, date = ?, category = ?, description = ?
        WHERE id = ?
    `;
    dbs.query(sql, [title, amount, type, date, category, description, id], (err, result) => {
        callback(err, result);
    });
};

// Function to delete an expense record by ID
const deleteExpense = (id, callback) => {
    const sql = `DELETE FROM expenses WHERE id = ?`;
    dbs.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};

// Exporting the model functions
module.exports = {
    addExpense,
    getExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense
};
