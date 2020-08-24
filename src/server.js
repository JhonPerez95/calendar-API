const express = require('express');
const cors = require('cors');

const { connectDb } = require('./database/database');

// Initializations
const app = express();

// Database
connectDb();

// Public Directory
app.use(express.static('public'));

// Config
app.use(cors());
app.use(express.json());

// Routes
app.use(require('./routes/rootRoutes'));

module.exports = app;
