const express = require('express');

const feedBackRoutes = express.Router();

feedBackRoutes.get('/', (request, response) => {
  response.render('pages/feedback', { pageTitle: 'Feedback' });
});

module.exports = feedBackRoutes;
