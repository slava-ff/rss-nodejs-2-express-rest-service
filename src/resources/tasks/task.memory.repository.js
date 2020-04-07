const { readDb, writeDb } = require('../../helpers/db.helper');

const getAll = async () => {
  const db = await readDb();
  return Object.values(db.tasks);
};

const create = async task => {
  const db = await readDb();

  db.tasks[task.id] = task;
  await writeDb(db);

  return task.id;
};

const getOne = async id => {
  const db = await readDb();
  return db.tasks[id];
};

const update = async (idToUpdate, task) => {
  const db = await readDb();

  db.tasks[idToUpdate] = task;
  await writeDb(db);
};

const deleteOne = async id => {
  const db = await readDb();
  delete db.tasks[id];

  await writeDb(db);
  return id;
};

module.exports = { getAll, create, getOne, update, deleteOne };
