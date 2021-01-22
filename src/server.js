const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello World 😁');
});

app.listen(3333, () => {
  console.log('server lauched at 3333 🚀');
});
