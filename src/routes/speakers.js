const express = require('express');

const speakersRoutes = express.Router();

speakersRoutes.get('/', (request, response) => {
  response.render('pages/speakers', { pageTitle: 'Speakers' });
});

module.exports = speakersRoutes;
