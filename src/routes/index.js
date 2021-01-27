const express = require('express');

const feedBackRoutes = require('./feedback');
const { speakersRoutes, getAllSpeakersMiddleware } = require('./speakers');

const routes = express.Router();

routes.use('/feedbacks', feedBackRoutes);

routes.use('/speakers', speakersRoutes);

routes.get('/', getAllSpeakersMiddleware, (request, response) => {
  const { speakers } = response.locals;

  response.render('layouts', {
    pageTitle: 'Welcome',
    template: 'index',
    topSpeakers: speakers,
  });
});

module.exports = routes;
