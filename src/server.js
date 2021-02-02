const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const routes = require('./routes/index.js');
const { getSpeakerNamesMiddleware } = require('./routes/speakers');

const app = express();

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['hausdhia', 'ashjdahjsd'],
  }),
);

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.locals.siteName = 'ROUX Meetings';

app.use(getSpeakerNamesMiddleware);

app.use(routes);

app.listen(3333, () => {
  console.log('server lauched at 3333 🚀');
});
