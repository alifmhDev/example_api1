const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Halo dari API Express di Vercel!' });
});

module.exports.handler = serverless(app);
