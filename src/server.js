const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Welcome' });
});

app.listen(3333, () => {
  console.log('server lauched at 3333 🚀');
});
