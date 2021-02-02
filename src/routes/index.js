const express = require('express');

const SpeakersService = require('../services/SpeakerService');

const feedBackRoutes = require('./feedback');
const { speakersRoutes, getAllSpeakersMiddleware } = require('./speakers');

const routes = express.Router();

const speakersService = new SpeakersService('./src/data/speakers.json');

routes.use('/feedbacks', feedBackRoutes);

routes.use('/speakers', speakersRoutes);

routes.get('/', getAllSpeakersMiddleware, async (request, response) => {
  const { speakers } = response.locals;

  const artwork = await speakersService.getAllArtwork();

  response.render('layouts', {
    pageTitle: 'Welcome',
    template: 'index',
    topSpeakers: speakers,
    artwork,
  });
});

module.exports = routes;
