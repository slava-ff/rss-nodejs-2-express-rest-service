const Task = require('./task.model');

const getAll = async () => {
  return Task.find({});
};

const create = async task => {
  return Task.create(task);
};

const getOne = async id => {
  return Task.findById(id);
};

const update = async (idToUpdate, task) => {
  return Task.updateOne({ _id: idToUpdate }, task);
};

const deleteOne = async id => {
  return Task.findByIdAndDelete(id);
};

module.exports = { getAll, create, getOne, update, deleteOne };
