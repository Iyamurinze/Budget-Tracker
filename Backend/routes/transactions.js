const express = require('express');
const { addExpense, getExpenses, deleteExpense } = require('../controlles/expenses');
const { addIncome, getIncomes, deleteIncome } = require('../controlles/income'); 
const { signup, login } = require('../models/auth');
const auth = require('../midlleware/au'); 
const router = express.Router();
    
router.get('/', (req, res) => res.send('Transaction routes are working!'));

// Authentication
router.post('/signup', signup);
router.post('/login', login);

// Income routes
router.post('/add-income', auth, addIncome); 
router.get('/get-income', auth, getIncomes);  
router.delete('/delete-income/:id', auth, deleteIncome); 

// Expense routes
router.post('/add-expense', auth, addExpense);  
router.get('/get-expense', auth, getExpenses);  
router.delete('/delete-expense/:id', auth, deleteExpense); 

module.exports = router;
