const express = require('express');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config();

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.MAILING_LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

// Serve static files from React App

//routes
// API endpoint
app.get('/api/memberList', (req, res) => {
    mailchimp.get(`/lists/${list_id}/members`)
    .then(function(results){
      res.send(results);
    })
    .catch(function(err){
      res.send(err);
    });
  });

const port = process.env.PORT || 9001;
app.listen(port);
console.log(`express app listening on port ${port}`);