const User = require('./user.model');
const usersRepo = require('./user.db.repository');

const getAll = async () => {
  const users = await usersRepo.getAll();
  return users.map(User.toResponse);
};

const create = async user => {
  const savedUser = await usersRepo.create(user);
  return User.toResponse(savedUser);
};

const getOne = async id => {
  const user = await usersRepo.getOne(id);
  return User.toResponse(user);
};

const update = async (id, user) => {
  return await usersRepo.update(id, user);
};

const deleteOne = async id => {
  const deletedUser = await usersRepo.deleteOne(id);
  // to delete User In Related Tasks tasks
  return deletedUser._id;
};

module.exports = { getAll, create, getOne, update, deleteOne };
