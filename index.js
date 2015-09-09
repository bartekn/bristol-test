var express = require('express');
var bristol = require('bristol');
var app = express();

app.get('/fast', function (req, res) {
  res.status(200).send('fast');
});

app.get('/slow', function (req, res) {
  for (var i = 0; i < 30; i++) {
    bristol.info('test');
  }
  res.status(200).send('slow');
});

app.listen(3000);
