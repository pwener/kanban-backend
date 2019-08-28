const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Card = new Schema({
  title: {
    type: String,
    required: true,
    min: [3, 'Minimum 3 characters'],
    max: [25, 'Maximum 25 characters']
  },
  content: {
    type: String,
    required: true,
    max: [255, 'Maximum 255 characters']
  },
  color: {
    type: String,
    required: false,
    min: [4, 'You need pass something like #FFF'],
    max: [6, 'You need pass something like #DCDCDC']
  },
  list: [{
    required: false,
    type: Schema.Types.ObjectId,
    ref: 'List'
  }],
});

// Compile model from schema
module.exports = mongoose.model('Card', Card);