const { addExpense, getExpenses, deleteExpense } = require('../models/expenseModel');

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    if (!title || !category || !description || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (amount <= 0 || typeof amount !== 'number') {
        return res.status(400).json({ message: 'Amount must be a positive number' });
    }

    const expenseData = { title, amount, type: "expense", date, category, description };
    try {
        const result = await addExpense(expenseData);
        res.status(200).json({ message: 'Expense Added', data: result });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const results = await getExpenses();
        if (!results || results.length === 0) {
            return res.status(404).json({ message: 'No expenses found' });
        }
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteExpense(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json({ message: 'Expense Deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
