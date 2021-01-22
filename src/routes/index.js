const express = require('express');

const feedBackRoutes = require('./feedback');

const routes = express.Router();

routes.use('/feedback', feedBackRoutes);

routes.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Welcome' });
});

module.exports = routes;
