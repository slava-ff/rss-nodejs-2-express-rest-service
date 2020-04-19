const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const create = async user => {
  return User.create(user);
};

const getOne = async id => {
  return User.findById(id);
};

const update = async (idToUpdate, user) => {
  return User.updateOne({ _id: idToUpdate }, user);
};

const deleteOne = async id => {
  return User.findByIdAndDelete(id);
};

module.exports = { getAll, create, getOne, update, deleteOne };
