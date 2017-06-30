const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path');
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header(
    'Access-Control-Expose-Headers',
    'X-Total-Pages, Cache-Control, Expires, Pragma'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE, HEAD'
  );
  next();
});

// (private) routes
app.use('/', routes);

app.use((err, req, res, next) => {
  // 422 Unprocessable Entity
  console.warn(err);
  res.status(422).send({ error: err.message });
});

module.exports = app;
