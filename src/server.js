const express = require('express');
const { connectDb } = require('./database/database');

// Initializations
const app = express();

// Database
connectDb();

// Directorio public
app.use(express.static('public'));

// Config
app.use(express.json());

// Routes
app.use(require('./routes/rootRoutes'));

module.exports = app;
