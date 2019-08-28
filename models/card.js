const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Card = new Schema({
  title: String,
  content: String,
  color: String,
});

// Compile model from schema
module.exports = mongoose.model('Card', Card);