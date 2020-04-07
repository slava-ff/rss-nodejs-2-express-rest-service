const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');

const getAll = async () => {
  const tasks = await tasksRepo.getAll();
  return tasks.map(Task.toResponse);
};

const create = async (boardId, task) => {
  task.boardId = boardId;
  const id = await tasksRepo.create(new Task(task));
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
  await tasksRepo.update(id, new Task(task));
  return await getOne(id);
};

const deleteOne = async id => {
  const idToDelete = await tasksRepo.deleteOne(id);
  return idToDelete;
};

module.exports = { getAll, create, getOne, update, deleteOne };
