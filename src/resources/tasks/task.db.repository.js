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

const deleteMany = async boardId => {
  return Task.deleteMany({ boardId });
};

const updateMany = async userId => {
  return Task.updateMany({ userId }, { userId: null });
};

module.exports = {
  getAll,
  create,
  getOne,
  update,
  deleteOne,
  deleteMany,
  updateMany
};
