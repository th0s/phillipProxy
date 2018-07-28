const express = require('express');
const axios = require('axios');


const app = express();

app.listen(1337, () => { console.log('Listening on port 1337...') });

app.get('/ads', (req, res) => {
  axios.post('54.172.33.64/ads', { userId: req.query.userId, tags: req.query.tags })
    .catch((err) => {
      console.log('There was an error with your request: ', err);
    })
})