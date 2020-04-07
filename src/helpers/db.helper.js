const fs = require('fs').promises;
const path = require('path');

const readDb = async () => {
  const db = await fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8');
  return JSON.parse(db);
};

const writeDb = async dbUpdated => {
  const db = JSON.stringify(dbUpdated);
  await fs.writeFile(path.join(__dirname, '../db/db.json'), db, 'utf-8');
};

module.exports = {
  readDb,
  writeDb
};
