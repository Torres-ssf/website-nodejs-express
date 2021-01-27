const express = require('express');

const FeedbackService = require('../services/FeedbackService');

const feedbackService = new FeedbackService('./src/data/feedback.json');

const feedBackRoutes = express.Router();

feedBackRoutes.get('/', async (request, response) => {
  const feedbacks = await feedbackService.getList();
  // response.render('pages/feedback', { pageTitle: 'Feedback' });

  return response.json(feedbacks);
});

feedBackRoutes.post('/', (request, response) => {
  response.send('Feedback posted');
});

module.exports = feedBackRoutes;
