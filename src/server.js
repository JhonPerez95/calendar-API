const express = require('express');

// Initializations
const app = express();

// Directorio public
app.use(express.static('public'));

//
app.use(express.json());

// Routes
app.use(require('./routes/rootRoutes'));

module.exports = app;
