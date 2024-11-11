const { addExpense, getExpenses, deleteExpense } = require("../models/expenseModel");

exports.addExpense = (req, res) => {
    console.log(req.body); 
    const { title, amount, category, description, date } = req.body;

    // Validation
    if (!title || !category || !description || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (amount <= 0 || typeof amount !== 'number') {
        return res.status(400).json({ message: 'Amount must be a positive number' });
    }

    // Call addExpense from the model
    const expenseData = { title, amount, type: "expense", date, category, description };
    addExpense(expenseData, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Server error' });
        }
        res.status(200).json({ message: 'Expense Added', data: result });
    });
};

exports.getExpense = (req, res) => {
    // Call getExpenses from the model
    getExpenses((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Server error' });
        }
        if (!results || results.length === 0) {
            return res.status(404).json({ message: 'No expenses found' });
        }
        res.status(200).json(results);
    });
};

exports.deleteExpense = (req, res) => {
    const { id } = req.params;

    // Call deleteExpense from the model
    deleteExpense(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Server error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json({ message: 'Expense Deleted' });
    });
};
