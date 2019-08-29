const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');
const helmet  = require('helmet');

const cardRouter = require('./routes/card');
const listRouter = require('./routes/list');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cards', cardRouter);
app.use('/lists', listRouter); // check models/list to more explanations

module.exports = app;
