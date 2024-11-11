const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const { readdirSync } = require('fs');
const app = express();
const sequelize = require('./db/dbs');
const Income = require('./models/model/incomeM');
const Expense = require('./models/model/expenseM');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Sync database
sequelize.sync()
    .then(() => {
        console.log('Database Connected');
    })
    .catch(err => {
        console.error('Error Connecting database:', err);
    });

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
readdirSync('./routes').map((route) => {
    const routeModule = require('./routes/' + route);

    if (typeof routeModule === 'function') {
        app.use('/api/v1', routeModule);
    } else {
        console.error(`Route module ${route} is not a valid function`);
    }
});

// Start Server
app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
});

module.exports = app;
