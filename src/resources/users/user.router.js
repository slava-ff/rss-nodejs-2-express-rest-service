const { Router } = require('express');
const usersService = require('./user.service');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersService.getAll();

    return res.json(users);
  } catch (err) {
    return next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const newUser = await usersService.create(req.body);

    return res.json(newUser);
  } catch (err) {
    return next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await usersService.getOneById(req.params.id);

    return res.json(user);
  } catch (err) {
    return next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await usersService.update(req.params.id, req.body);

    return res.json(user);
  } catch (err) {
    return next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = await usersService.deleteOne(req.params.id);

    return res.json(id);
  } catch (err) {
    return next(err);
  }
};

module.exports = Router()
  .get('/', getAllUsers)
  .post('/', createUser)
  .get('/:id', getUserById)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser);
