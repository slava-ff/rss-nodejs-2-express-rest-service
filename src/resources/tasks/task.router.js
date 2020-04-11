const { Router } = require('express');
const tasksService = require('./task.service');
const NotFoundError = require('../../helpers/error.helper');

const getAllTasks = async (req, res) => {
  const tasks = await tasksService.getAll();

  res.json(tasks);
};

const createTask = async (req, res) => {
  const newTask = await tasksService.create(req.params.boardId, req.body);

  res.json(newTask);
};

const getTaskById = async (req, res, next) => {
  const task = await tasksService.getOne(req.params.id);
  if (!task) {
    next(new NotFoundError('Task not found'));

    return;
  }

  res.json(task);
};

const updateTask = async (req, res) => {
  const task = await tasksService.update(req.params.id, req.body);

  res.json(task);
};

const deleteTask = async (req, res) => {
  const id = await tasksService.deleteOne(req.params.id);

  res.json(id);
};

module.exports = Router()
  .get('/:boardId/tasks', getAllTasks)
  .post('/:boardId/tasks', createTask)
  .get('/:boardId/tasks/:id', getTaskById)
  .put('/:boardId/tasks/:id', updateTask)
  .delete('/:boardId/tasks/:id', deleteTask);
