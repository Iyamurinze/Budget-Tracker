const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// MySQL Database Connection
const dbs = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'budget-tracker'
});

dbs.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
    } else {
        console.log("Connected to MySQL database.");
    }
});

module.exports = dbs;

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

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
