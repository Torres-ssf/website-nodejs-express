const express = require('express');

const feedBackRoutes = require('./feedback');
const speakersRoutes = require('./speakers');

const routes = express.Router();

routes.use('/feedbacks', feedBackRoutes);

routes.use('/speakers', speakersRoutes);

routes.get('/', (request, response) => {
  response.render('layouts', { pageTitle: 'Welcome', template: 'index' });
});

module.exports = routes;
