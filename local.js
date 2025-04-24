// local.js
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Halo dari API lokal (tanpa Vercel)' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server lokal jalan di http://localhost:${PORT}/api`);
});
