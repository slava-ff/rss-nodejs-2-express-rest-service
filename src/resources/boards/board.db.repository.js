const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const create = async board => {
  return Board.create(board);
};

const getOne = async id => {
  return Board.findById(id);
};

const update = async (idToUpdate, board) => {
  return Board.updateOne({ _id: idToUpdate }, board);
};

const deleteOne = async id => {
  return Board.findByIdAndDelete(id);
};

module.exports = { getAll, create, getOne, update, deleteOne };
