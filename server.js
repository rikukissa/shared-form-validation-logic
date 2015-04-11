var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');

var validator = require('./modules/validator.js');

var app = express();
app.use(serveStatic('./'));
app.use(bodyParser.json());


app.post('/person', function(req, res) {

  if(!validator(req.body)) {
    res.status(400).send('Invalid age');
    return;
  }

  // Save user
  res.status(201).send('User created');
});

app.listen(9000);
