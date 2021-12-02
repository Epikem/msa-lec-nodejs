const express = require('express');
const axios = require('axios');

const app = express();

app.post('/events', async (req, res) => {
  res.send({});
});

app.listen(4003, () => {
  console.log('Moderation service listening on 4003');
});
