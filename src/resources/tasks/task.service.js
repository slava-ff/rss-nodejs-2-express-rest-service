const Task = require('./task.model');
const tasksRepo = require('./task.db.repository');

const getAll = async () => {
  const tasks = await tasksRepo.getAll();
  return tasks.map(Task.toResponse);
};

const create = async (boardId, task) => {
  task.boardId = boardId;
  const id = await tasksRepo.create(task);
  return await getOne(id);
};

const getOne = async id => {
  const task = await tasksRepo.getOne(id);
  if (!task) {
    return null;
  }
  return Task.toResponse(task);
};

const update = async (id, task) => {
  return await tasksRepo.update(id, task);
};

const deleteOne = async id => {
  const deletedTask = await tasksRepo.deleteOne(id);
  return deletedTask._id;
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
