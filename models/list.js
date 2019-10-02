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

// TODO: consider just same list in kanban
List.path('name').validate((value, done) => {
  this.model('List').count({ name: value }, (err, count) => {
    if (err) {
      return done(err);
    } 
    // If `count` is greater than zero, "invalidate"
    done(!count);
  });
}, 'This list already exist to this Kanban');

module.exports = mongoose.model('List', List);