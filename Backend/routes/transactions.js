const { addExpense, getExpense, deleteExpense } = require('../controlles/expenses');
const { addIncome, getIncomes, deleteIncome } = require('../controlles/income');

const router = require('express').Router();

router.post('/add-income', addIncome)
       .get('/get-income', getIncomes)
       .delete('/delete-income/:id', deleteIncome)
       .post('/get-expense', addExpense)
       .get('/get-expense', getExpense)
       .delete('/delete-expense/:id', deleteExpense)

module.exports = router; 
