const User = require('./user.model');
const usersRepo = require('./user.memory.repository');

const getAll = async () => {
  const users = await usersRepo.getAll();
  return users.map(User.toResponse);
};

const create = async user => {
  const id = await usersRepo.create(new User(user));
  return await getOne(id);
};

const getOne = async id => {
  const user = await usersRepo.getOne(id);
  return User.toResponse(user);
};

const update = async (id, user) => {
  await usersRepo.update(id, new User(user));
  return await getOne(id);
};

const deleteOne = async id => {
  const idToDelete = await usersRepo.deleteOne(id);
  return idToDelete;
};

module.exports = { getAll, create, getOne, update, deleteOne };
