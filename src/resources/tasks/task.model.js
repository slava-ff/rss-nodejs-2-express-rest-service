const uuid = require('uuid');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'TITLE'
  },
  order: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: 'description'
  },
  userId: {
    type: String,
    default: null
  },
  boardId: {
    type: String,
    default: null
  },
  columnId: {
    type: String,
    default: null
  },
  _id: {
    type: String,
    default: uuid
  }
});

taskSchema.statics.toResponse = task => {
  const { id, title, order, description, userId, boardId, columnId } = task;
  return { id, title, order, description, userId, boardId, columnId };
};

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
