const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Card = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [4, 'Minimum 4 characters'],
    maxlength: [25, 'Maximum 25 characters']
  },
  content: {
    type: String,
    required: true,
    maxlength: [255, 'Maximum 255 characters']
  },
  color: {
    type: String,
    required: false,
    minlength: [4, 'You need pass a valid color, like #FFF'],
    maxlength: [7, 'You need pass a valid color, like #DCDCDC']
  },
});

// Compile model from schema
module.exports = mongoose.model('Card', Card);