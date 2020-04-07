const Board = require('./board.model');
const boardsRepo = require('./board.memory.repository');

const getAll = async () => {
  const boards = await boardsRepo.getAll();
  return boards.map(Board.toResponse);
};

const create = async board => {
  const id = await boardsRepo.create(new Board(board));
  return await getOne(id);
};

const getOne = async id => {
  const board = await boardsRepo.getOne(id);
  if (!board) {
    return null;
  }
  return Board.toResponse(board);
};

const update = async (id, board) => {
  await boardsRepo.update(id, new Board(board));
  return await getOne(id);
};

const deleteOne = async id => {
  const idToDelete = await boardsRepo.deleteOne(id);
  return idToDelete;
};

module.exports = { getAll, create, getOne, update, deleteOne };
