const { readDb, writeDb } = require('../../helpers/db.helper');

const getAll = async () => {
  const db = await readDb();
  const users = Object.values(db.users);
  return users;
  // const usersWithoutPassswords = users.map(user => {
  //   delete user.password;
  //   return user;
  // });
  // return usersWithoutPassswords;
};

const create = async user => {
  const db = await readDb();
  db.users[user.id] = user;
  writeDb(db);
};

module.exports = { getAll, create };
