const express = require('express');
const path = require('path');

const routes = require('./routes/index.js');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use(routes);

app.listen(3333, () => {
  console.log('server lauched at 3333 🚀');
});
