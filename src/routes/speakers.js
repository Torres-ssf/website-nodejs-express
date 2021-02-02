const express = require('express');

const SpeakersService = require('../services/SpeakerService');

const speakersService = new SpeakersService('./src/data/speakers.json');

const speakersRoutes = express.Router();

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

speakersRoutes.get('/', async (request, response) => {
  const speakers = await speakersService.getList();

  const artwork = await speakersService.getAllArtwork();

  return response.render('layouts', {
    pageTitle: 'Speakers',
    template: 'speakers',
    speakers,
    artwork,
  });
});

speakersRoutes.get('/:shortname', async (request, response) => {
  const { shortname } = request.params;

  const speaker = await speakersService.getSpeaker(shortname);
  const artwork = await speakersService.getArtworkForSpeaker(shortname);

  return response.render('layouts', {
    pageTitle: shortname,
    template: 'speakers-detail',
    speaker,
    artwork,
  });
});

module.exports = {
  speakersRoutes,
  getSpeakerNamesMiddleware,
  getAllSpeakersMiddleware,
};
