const { addIncome, getIncomes, deleteIncome } = require('../models/incomeModel');

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    if (!title || !category || !description || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (amount <= 0 || typeof amount !== 'number') {
        return res.status(400).json({ message: 'Amount must be a positive number' });
    }

    const incomeData = { title, amount, type: "income", date, category, description };
    try {
        const result = await addIncome(incomeData);
        res.status(200).json({ message: 'Income Added', data: result });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const results = await getIncomes();
        if (!results || results.length === 0) {
            return res.status(404).json({ message: 'No incomes found' });
        }
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteIncome(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Income not found' });
        }
        res.status(200).json({ message: 'Income Deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
