const express = require('express');
const data = require('../crush.json');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send(data);
});

module.exports = app;