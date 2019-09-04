const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');
const helmet  = require('helmet');
var cors = require('cors');

const cardRouter = require('./routes/card');
const listRouter = require('./routes/list');

const app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: 'http://localhost:*' });

server.listen(8000);

// apply socket-io as middleware
app.use(function(req, res, next) {
  req.io = io;
  next();
});
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cards', cardRouter);
app.use('/lists', listRouter); // check models/list to more explanations

module.exports = app;
