const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Halo dari API kamu sendiri!' });
});

module.exports.handler = serverless(app);
