const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoShema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
})

const TodosModel = mongoose.model('todos', TodoShema);

module.exports = TodosModel;