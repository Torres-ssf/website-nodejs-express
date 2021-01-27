const express = require('express');

const SpeakersService = require('../services/SpeakerService');

const speakersService = new SpeakersService('./src/data/speakers.json');

const speakersRoutes = express.Router();

speakersRoutes.get('/', async (request, response) => {
  const speakers = await speakersService.getList();

  // response.render('pages/speakers', { pageTitle: 'Speakers' });

  return response.json(speakers);
});

speakersRoutes.get('/:name', (request, response) => {
  response.send(`You are looking for ${request.path}`);
});

module.exports = speakersRoutes;
