const express = require('express');
const cors = require('cors');
const db = require('./db/db');  
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

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

const server = () => {
    db();  
    app.listen(PORT, () => {
        console.log('Listening to port:', PORT);
    });
};

server();
