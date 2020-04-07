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
  console.log('getUserById:', req.body, res.body);
};

const updateUser = async (req, res) => {
  console.log('updateUser:', req.body, res.body);
};

const deleteUser = async (req, res) => {
  console.log('deleteUser:', req.body, res.body);
};

module.exports = Router()
  .get('/', getAllUsers)
  .post('/', createUser)
  .get('/:id', getUserById)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser);
