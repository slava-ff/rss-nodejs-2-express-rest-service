const { Router } = require('express');
const loginService = require('./login.service');

const loginAccept = async (req, res, next) => {
  try {
    const token = await loginService.checkLogin(req.body);

    return res.json(token);
  } catch (err) {
    return next(err);
  }
};

module.exports = Router().post('/', loginAccept);
