const NotFoundError = require('../../helpers/error.helper');
const User = require('./user.model');
const usersRepo = require('./user.db.repository');
const { updateManyTasks } = require('../tasks/task.service');

const getAll = async () => {
  const users = await usersRepo.getAll();

  return users.map(User.toResponse);
};

const create = async user => {
  const savedUser = await usersRepo.create(user);

  return User.toResponse(savedUser);
};

const getOneById = async id => {
  const user = await usersRepo.getOneById(id);

  if (!user) {
    throw new NotFoundError('User not found');
  }

  return User.toResponse(user);
};

const update = async (id, user) => {
  const updatedUser = await usersRepo.update(id, user);

  if (!updatedUser) {
    throw new NotFoundError('User not found');
  }

  return User.toResponse(updatedUser);
};

const deleteOne = async id => {
  const deletedUser = await usersRepo.deleteOne(id);

  if (!deletedUser) {
    throw new NotFoundError('User not found');
  }
  await updateManyTasks(id);

  return User.toResponse(deletedUser);
};

module.exports = { getAll, create, getOneById, update, deleteOne };
