const { readDb, writeDb } = require('../../helpers/db.helper');

const getAll = async () => {
  const db = await readDb();
  return Object.values(db.users);
};

const create = async user => {
  const db = await readDb();

  db.users[user.id] = user;
  await writeDb(db);

  return user.id;
};

const getOne = async id => {
  const db = await readDb();
  return db.users[id];
};

const update = async (idToUpdate, user) => {
  const db = await readDb();

  db.users[idToUpdate] = user;
  await writeDb(db);
};

const deleteOne = async id => {
  const db = await readDb();
  delete db.users[id];

  await writeDb(db);
  return id;
};

module.exports = { getAll, create, getOne, update, deleteOne };
