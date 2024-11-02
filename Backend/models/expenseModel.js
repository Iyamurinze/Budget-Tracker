const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        trim: true,
        maxlength: 50
    },
    amonunt: {
        type: Number,
        require: true,
        trim: true,
        maxlength: 20
    },
    type: {
        type: String,
        default: "income"
    },
    data: {
        type: Date,
        require: true,
        trim: true
    },
    category: {
        type: String,
        require: true,
        trim: true,
    },
    descrition: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
}, {timestamps: true})

module.exports = mongoose.model('Income', ExpenseSchema)