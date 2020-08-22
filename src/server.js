const express = require('express');

// Initializations
const app = express();

// Directorio public
app.use(express.static('public'));

// Routes
app.use(require('./routes/rootRoutes'));

module.exports = app;
