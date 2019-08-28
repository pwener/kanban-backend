const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const List = new Schema({
  name: {
    type: String,
    required: true,
    min: [3, 'Minimum 3 characters'],
    max: [25, 'Maximum 25 characters']
  },
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card',
  }]
});

// Compile model from schema
module.exports = mongoose.model('List', List);