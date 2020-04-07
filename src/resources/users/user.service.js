const User = require('./user.model');
const usersRepo = require('./user.memory.repository');

const getAll = async () => {
  const users = await usersRepo.getAll();
  return users.map(User.toResponse);
};

const create = async user => await usersRepo.create(new User(user));

module.exports = { getAll, create };
