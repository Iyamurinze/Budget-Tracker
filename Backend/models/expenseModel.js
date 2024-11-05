const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        trim: true,
        maxlength: 50
    },
    amount: {
        type: Number,
        require: true,
        trim: true,
        maxlength: 20
    },
    type: {
        type: String,
        default: "expense"
    },
    date: {
        type: Date,
        require: true,
        trim: true
    },
    category: {
        type: String,
        require: true,
        trim: true,
    },
    description: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
}, {timestamps: true})

module.exports = mongoose.model('Income', ExpenseSchema)