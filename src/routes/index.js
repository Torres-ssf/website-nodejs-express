const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Welcome' });
});

module.exports = routes;
