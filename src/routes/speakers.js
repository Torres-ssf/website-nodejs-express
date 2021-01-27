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

const getAllSpeakersMiddleware = async (request, response, next) => {
  try {
    const speakers = await speakersService.getListShort();

    response.locals.speakers = speakers;

    return next();
  } catch (err) {
    return next(err);
  }
};

const getSpeakerNamesMiddleware = async (request, response, next) => {
  try {
    const names = await speakersService.getNames();

    response.locals.speakerNames = names;

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  speakersRoutes,
  getSpeakerNamesMiddleware,
  getAllSpeakersMiddleware,
};
