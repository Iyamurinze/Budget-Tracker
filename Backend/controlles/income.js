const { addIncome, getIncomes, deleteIncome } = require("../models/incomeModel");

exports.addIncome = (req, res) => {
    const { title, amount, category, description, date } = req.body;

    console.log("Request Body:", req.body);  // Log incoming request body for debugging

    // Validate input
    if (!title || !category || !description || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (amount <= 0 || typeof amount !== 'number') {
        return res.status(400).json({ message: 'Amount must be a positive number' });
    }

    // Prepare income data
    const incomeData = { title, amount, type: "income", date, category, description };

    // Call addIncome from the model
    addIncome(incomeData, (err, result) => {
        if (err) {
            console.error('Error adding income:', err);  // Log the error for debugging
            return res.status(500).json({ message: 'Server error', error: err });
        }
        // If result is undefined or doesn't contain affectedRows, handle gracefully
        if (!result) {
            console.error('No result returned from database');
            return res.status(500).json({ message: 'Failed to add income, no result returned' });
        }
        // Check if there are affectedRows
        if (result.affectedRows === 0) {
            return res.status(500).json({ message: 'Failed to add income, no rows affected' });
        }

        // Success response
        console.log("Income added successfully:", result);
        res.status(200).json({ message: 'Income Added', data: result });
    });
};

exports.getIncomes = (req, res) => {
    // Call getIncomes from the model
    getIncomes((err, results) => {
        if (err) {
            console.error('Error fetching incomes:', err);  // Log the error for debugging
            return res.status(500).json({ message: 'Server error', error: err });
        }
        // If no results are found, handle gracefully
        if (!results || results.length === 0) {
            console.log("No incomes found.");
            return res.status(404).json({ message: 'No incomes found' });
        }

        // Success response
        console.log("Incomes fetched successfully:", results);
        res.status(200).json(results);
    });
};

exports.deleteIncome = (req, res) => {
    const { id } = req.params;

    console.log("Request Params:", req.params);  // Log incoming request parameters for debugging

    // Validate the ID
    if (!id) {
        return res.status(400).json({ message: 'Income ID is required' });
    }

    // Call deleteIncome from the model
    deleteIncome(id, (err, result) => {
        if (err) {
            console.error('Error deleting income:', err);  // Log the error for debugging
            return res.status(500).json({ message: 'Server error', error: err });
        }
        // If no result is returned, handle gracefully
        if (!result) {
            console.error('No result returned from database');
            return res.status(404).json({ message: 'Income not found' });
        }
        // If no rows are affected, handle gracefully
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Income not found' });
        }

        // Success response
        console.log("Income deleted successfully:", result);
        res.status(200).json({ message: 'Income Deleted' });
    });
};
