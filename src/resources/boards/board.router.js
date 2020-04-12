const { Router } = require('express');
const boardsService = require('./board.service');
const NotFoundError = require('../../helpers/error.helper');

const getAllBoards = async (req, res, next) => {
  try {
    const boards = await boardsService.getAll();

    return res.json(boards);
  } catch (err) {
    return next(err);
  }
};

const createBoard = async (req, res, next) => {
  try {
    const newBoard = await boardsService.create(req.body);

    return res.json(newBoard);
  } catch (err) {
    return next(err);
  }
};

const getBoardById = async (req, res, next) => {
  try {
    const board = await boardsService.getOne(req.params.id);
    if (!board) {
      next(new NotFoundError('Board not found'));

      return;
    }
    return res.json(board);
  } catch (err) {
    return next(err);
  }
};

const updateBoard = async (req, res, next) => {
  try {
    const board = await boardsService.update(req.params.id, req.body);

    return res.json(board);
  } catch (err) {
    return next(err);
  }
};

const deleteBoard = async (req, res, next) => {
  try {
    const id = await boardsService.deleteOne(req.params.id);

    return res.json(id);
  } catch (err) {
    return next(err);
  }
};

module.exports = Router()
  .get('/', getAllBoards)
  .post('/', createBoard)
  .get('/:id', getBoardById)
  .put('/:id', updateBoard)
  .delete('/:id', deleteBoard);
