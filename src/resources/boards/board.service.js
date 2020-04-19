const NotFoundError = require('../../helpers/error.helper');
const Board = require('./board.model');
const boardsRepo = require('./board.db.repository');
const { deleteManyTasks } = require('../tasks/task.service');

const getAll = async () => {
  const boards = await boardsRepo.getAll();

  return boards.map(Board.toResponse);
};

const create = async board => {
  const savedBoard = await boardsRepo.create(board);

  return Board.toResponse(savedBoard);
};

const getOne = async id => {
  const board = await boardsRepo.getOne(id);

  if (!board) {
    throw new NotFoundError('Board not found');
  }

  return Board.toResponse(board);
};

const update = async (id, board) => {
  const updatedBoard = await boardsRepo.update(id, board);

  if (!updatedBoard) {
    throw new NotFoundError('Board not found');
  }

  return Board.toResponse(updatedBoard);
};

const deleteOne = async id => {
  const deletedBoard = await boardsRepo.deleteOne(id);

  if (!deletedBoard) {
    throw new NotFoundError('Board not found');
  }
  await deleteManyTasks(id);

  return Board.toResponse(deletedBoard);
};

module.exports = { getAll, create, getOne, update, deleteOne };
