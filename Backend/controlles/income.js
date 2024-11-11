const { addIncome, getIncomes, deleteIncome } = require("../models/incomeModel");

exports.addIncome = (req, res) => {
    console.log(req.body); 
    const { title, amount, category, description, date } = req.body;
    
    // Validation
    if (!title  || !category || !description || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (amount <= 0 || typeof amount !== 'number') {
        return res.status(400).json({ message: 'Amount must be a positive number' });
    }

    // Call addIncome from the model
    const IncomeData = { title, amount, type: "Incomes", date, category, description };
    addIncome(IncomeData, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Server error' });
        }
        res.status(200).json({ message: 'Income Added', data: result });
    });
};

exports.getIncomes = (req, res) => {
    // Call getIncomes from the model
    getIncomes((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Server error' });
        }
        if (!results || results.length === 0) {
            return res.status(404).json({ message: 'No Income found' });
        }
        res.status(200).json(results);
    });
};

exports.deleteIncome = (req, res) => {
    const { id } = req.params;

    // Call deleteIncome from the model
    deleteIncome(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Server error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Income not found' });
        }
        res.status(200).json({ message: 'Income Deleted' });
    });
};
