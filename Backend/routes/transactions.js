const { addExpense, getExpense, deleteExpense } = require('../controlles/expenses');
const { addIncome, getIncomes, deleteIncome } = require('../controlles/income');

const router = require('express').Router();

router.post('/add-income', addIncome);
router.get('/get-income', getIncomes);
router.delete('/delete-income/:id', deleteIncome);

router.post('/add-expense', addExpense);
router.get('/get-expense', getExpense);
router.delete('/delete-expense/:id', deleteExpense);

module.exports = router;
