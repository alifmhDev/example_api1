const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Halo dari API Express di Vercel!' });
});

router.get('/about', (req, res) => {
  res.json({ message: 'Ini adalah endpoint /about' });
});

router.get('/user/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hai ${name}, ini dari dynamic route!` });
});

app.use('/api', router);

module.exports.handler = serverless(app);
