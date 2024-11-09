const { addExpense, getExpenses, deleteExpense } = require('../controlles/expenses');
const { addIncome, getIncomes, deleteIncome } = require('../controlles/income');

const router = require('express').Router();

// Income routes
router.post('/add-income', (req, res) => {
    addIncome(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error adding income' });
        res.status(200).json({ message: 'Income added successfully', data: result });
    });
});

router.get('/get-income', (req, res) => {
    getIncomes((err, results) => {
        if (err) return res.status(500).json({ error: 'Error fetching incomes' });
        res.status(200).json({ data: results });
    });
});

router.delete('/delete-income/:id', (req, res) => {
    deleteIncome(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error deleting income' });
        res.status(200).json({ message: 'Income deleted successfully' });
    });
});

// Expense routes
router.post('/add-expense', (req, res) => {
    addExpense(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error adding expense' });
        res.status(200).json({ message: 'Expense added successfully', data: result });
    });
});

router.get('/get-expense', (req, res) => {
    getExpenses((err, results) => {
        if (err) return res.status(500).json({ error: 'Error fetching expenses' });
        res.status(200).json({ data: results });
    });
});

router.delete('/delete-expense/:id', (req, res) => {
    deleteExpense(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error deleting expense' });
        res.status(200).json({ message: 'Expense deleted successfully' });
    });
});

module.exports = router;
