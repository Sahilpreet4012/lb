// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const resourcesRoutes = require('./routes/resources');

// Our home page
app.get('/', (req, res) => {
  res.render('pages/home');
});
// Our home page
app.get('/show', (req, res) => {
  res.render('pages/show');
});
app.get('/new', (req, res) => {
  res.render('pages/new');
});
app.get('/edit', (req, res) => {
  res.render('pages/edit');
});

// Your route file for your resource

// Exporting the changes
module.exports = app;