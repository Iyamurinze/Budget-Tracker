const express = require('express');
const { addExpense, getExpenses, deleteExpense } = require('../controlles/expenses');
const { addIncome, getIncomes, deleteIncome } = require('../controlles/income');
const {signup, login} = require('../controlles/auth');
const router = express.Router();

router.get('/', (req, res) => res.send('Transaction routes are working!'));

//Authontication
router.post('/signup', signup);
router.post('/login', login);

// Income routes
router.post('/add-income', addIncome);
router.get('/get-income', getIncomes);
router.delete('/delete-income/:id', deleteIncome);

// Expense routes
router.post('/add-expense', addExpense);
router.get('/get-expense', getExpenses);
router.delete('/delete-expense/:id', deleteExpense);

module.exports = router;
