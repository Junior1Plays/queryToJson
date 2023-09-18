const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const queryParams = req.query;
  res.json(queryParams);
});

app.listen(port, () => {
  console.log(`API está rodando na porta ${port}`);
});
