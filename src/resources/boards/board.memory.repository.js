const { readDb, writeDb } = require('../../helpers/db.helper');

const getAll = async () => {
  const db = await readDb();
  return Object.values(db.boards);
};

const create = async board => {
  const db = await readDb();

  db.boards[board.id] = board;
  await writeDb(db);

  return board.id;
};

const getOne = async id => {
  const db = await readDb();
  return db.boards[id];
};

const update = async (idToUpdate, board) => {
  const db = await readDb();

  db.boards[idToUpdate] = board;
  await writeDb(db);
};

const deleteRelatedTasks = async (boardId, db) => {
  Object.values(db.tasks).forEach(task => {
    if (task.boardId === boardId) {
      delete db.tasks[task.id];
    }
  });
  return db;
};

const deleteOne = async id => {
  let db = await readDb();
  delete db.boards[id];
  db = deleteRelatedTasks(id, db);

  await writeDb(db);
  return id;
};

module.exports = { getAll, create, getOne, update, deleteOne };
