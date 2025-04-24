const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Halo dari API di Vercel!' });
});

module.exports = app;
module.exports.handler = serverless(app);
