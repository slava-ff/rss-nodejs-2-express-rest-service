const { Router } = require('express');
const boardsService = require('./board.service');
const NotFoundError = require('../../helpers/error.helper');

const getAllBoards = async (req, res) => {
  const boards = await boardsService.getAll();

  res.json(boards);
};

const createBoard = async (req, res) => {
  const newBoard = await boardsService.create(req.body);

  res.json(newBoard);
};

const getBoardById = async (req, res, next) => {
  const board = await boardsService.getOne(req.params.id);
  if (!board) {
    next(new NotFoundError('Board not found'));

    return;
  }

  res.json(board);
};

const updateBoard = async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);

  res.json(board);
};

const deleteBoard = async (req, res) => {
  const id = await boardsService.deleteOne(req.params.id);

  res.json(id);
};

module.exports = Router()
  .get('/', getAllBoards)
  .post('/', createBoard)
  .get('/:id', getBoardById)
  .put('/:id', updateBoard)
  .delete('/:id', deleteBoard);
