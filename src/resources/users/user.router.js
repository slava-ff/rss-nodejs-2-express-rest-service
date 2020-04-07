const { Router } = require('express');
// const User = require('./user.model');
const usersService = require('./user.service');

const getAllUsers = async (req, res) => {
  const users = await usersService.getAll();

  res.json(users);
};

const createUser = async (req, res) => {
  const newUser = await usersService.create(req.body);

  res.json(newUser);
};

const getUserById = async (req, res) => {
  const user = await usersService.getOne(req.params.id);

  res.json(user);
};

const updateUser = async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);

  res.json(user);
};

const deleteUser = async (req, res) => {
  const id = await usersService.deleteOne(req.params.id);

  res.json(id);
};

module.exports = Router()
  .get('/', getAllUsers)
  .post('/', createUser)
  .get('/:id', getUserById)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser);
