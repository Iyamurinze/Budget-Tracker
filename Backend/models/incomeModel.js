const dbs = require('../app');  // Import the MySQL connection from app.js

// Function to add a new income record
const addIncome = (incomeData, callback) => {
    const { title, amount, type, date, category, description } = incomeData;
    const sql = `INSERT INTO income (title, amount, type, date, category, description) VALUES (?, ?, ?, ?, ?, ?)`;
    dbs.query(sql, [title, amount, type, date, category, description], (err, result) => {
        console.log("Query Error:", err);  // Log any query errors
        console.log("Query Result:", result);  // Log the result returned from the database
        callback(err, result);  // Pass both error and result to the callback
    });
};

// Function to get all income records
const getIncomes = (callback) => {
    const sql = `SELECT * FROM income ORDER BY date DESC`;
    dbs.query(sql, (err, results) => {
        console.log("Query Error:", err);  // Log any query errors
        console.log("Query Results:", results);  // Log the results
        callback(err, results);
    });
};

// Function to get a specific income record by ID
const getIncomeById = (id, callback) => {
    const sql = `SELECT * FROM income WHERE id = ?`;
    dbs.query(sql, [id], (err, result) => {
        console.log("Query Error:", err);  // Log any query errors
        console.log("Query Result:", result);  // Log the result returned from the database
        callback(err, result);
    });
};

// Function to update an income record
const updateIncome = (id, incomeData, callback) => {
    const { title, amount, type, date, category, description } = incomeData;
    const sql = `
        UPDATE income SET title = ?, amount = ?, type = ?, date = ?, category = ?, description = ?
        WHERE id = ?
    `;
    dbs.query(sql, [title, amount, type, date, category, description, id], (err, result) => {
        console.log("Query Error:", err);  // Log any query errors
        console.log("Query Result:", result);  // Log the result returned from the database
        callback(err, result);
    });
};

// Function to delete an income record by ID
const deleteIncome = (id, callback) => {
    const sql = `DELETE FROM income WHERE id = ?`;
    dbs.query(sql, [id], (err, result) => {
        console.log("Query Error:", err);  // Log any query errors
        console.log("Query Result:", result);  // Log the result returned from the database
        callback(err, result);
    });
};

// Exporting the model functions
module.exports = {
    addIncome,
    getIncomes,
    getIncomeById,
    updateIncome,
    deleteIncome
};
