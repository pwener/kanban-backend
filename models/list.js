/**
 * This class represents the columns in kanban board, 
 * like 'To Do', 'Doing' and 'Done'
 */
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

model = mongoose.model('List', List);

module.exports = model;