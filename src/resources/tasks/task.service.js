const { NotFoundError } = require('../../helpers/error.helper');
const Task = require('./task.model');
const tasksRepo = require('./task.db.repository');

const getAll = async () => {
  const tasks = await tasksRepo.getAll();

  return tasks.map(Task.toResponse);
};

const create = async (boardId, task) => {
  task.boardId = boardId;
  const savedTask = await tasksRepo.create(task);

  return Task.toResponse(savedTask);
};

const getOne = async id => {
  const task = await tasksRepo.getOne(id);

  if (!task) {
    throw new NotFoundError('Task not found');
  }

  return Task.toResponse(task);
};

const update = async (id, task) => {
  const updatedTask = await tasksRepo.update(id, task);

  if (!updatedTask) {
    throw new NotFoundError('Task not found');
  }

  return Task.toResponse(updatedTask);
};

const deleteOne = async id => {
  const deletedTask = await tasksRepo.deleteOne(id);

  if (!deletedTask) {
    throw new NotFoundError('Task not found');
  }

  return Task.toResponse(deletedTask);
};

const deleteManyTasks = async boardId => {
  const deletedTasks = await tasksRepo.deleteMany(boardId);

  return deletedTasks;
};

const updateManyTasks = async userId => {
  const updatedTasks = await tasksRepo.updateMany(userId);

  return updatedTasks;
};

module.exports = {
  getAll,
  create,
  getOne,
  update,
  deleteOne,
  deleteManyTasks,
  updateManyTasks
};
