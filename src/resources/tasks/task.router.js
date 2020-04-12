const { Router } = require('express');
const tasksService = require('./task.service');
const NotFoundError = require('../../helpers/error.helper');

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await tasksService.getAll();

    return res.json(tasks);
  } catch (err) {
    return next(err);
  }
};

const createTask = async (req, res, next) => {
  try {
    const newTask = await tasksService.create(req.params.boardId, req.body);

    return res.json(newTask);
  } catch (err) {
    return next(err);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const task = await tasksService.getOne(req.params.id);
    if (!task) {
      next(new NotFoundError('Task not found'));

      return;
    }

    return res.json(task);
  } catch (err) {
    return next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const task = await tasksService.update(req.params.id, req.body);

    return res.json(task);
  } catch (err) {
    return next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const id = await tasksService.deleteOne(req.params.id);

    return res.json(id);
  } catch (err) {
    return next(err);
  }
};

module.exports = Router()
  .get('/:boardId/tasks', getAllTasks)
  .post('/:boardId/tasks', createTask)
  .get('/:boardId/tasks/:id', getTaskById)
  .put('/:boardId/tasks/:id', updateTask)
  .delete('/:boardId/tasks/:id', deleteTask);
