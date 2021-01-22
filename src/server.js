const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(3333, () => {
  console.log('server lauched at 3333 🚀');
});
