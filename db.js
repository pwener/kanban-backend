require('dotenv').config({path: __dirname + '/.env'})

const mongoose = require('mongoose');

const user = process.env.USER;
const password = encodeURIComponent(process.env.PASSWORD);
const uri = process.env.URI;
const db = process.env.DB;

const url = `mongodb+srv://phwener:${password}@${uri}/${db}?retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true });