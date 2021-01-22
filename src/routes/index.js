const express = require('express');

const feedBackRoutes = require('./feedback');
const speakersRoutes = require('./speakers');

const routes = express.Router();

routes.use('/feedback', feedBackRoutes);

routes.use('/speakers', speakersRoutes);

routes.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Welcome' });
});

module.exports = routes;
