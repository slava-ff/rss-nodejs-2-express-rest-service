let db = {
  users: {},
  tasks: {},
  boards: {}
};

const readDb = async () => {
  return db;
};

const writeDb = async dbUpdated => {
  db = dbUpdated;
};

module.exports = {
  readDb,
  writeDb
};
