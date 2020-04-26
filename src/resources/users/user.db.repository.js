const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const create = async user => {
  return User.create(user);
};

const getOneById = async id => {
  return User.findById(id);
};

const getOneByLogin = async login => {
  return User.findOne(login);
};

const update = async (idToUpdate, user) => {
  return User.updateOne({ _id: idToUpdate }, user);
};

const deleteOne = async id => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  create,
  getOneById,
  getOneByLogin,
  update,
  deleteOne
};
