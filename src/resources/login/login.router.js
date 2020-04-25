const { Router } = require('express');

const loginAccept = async (req, res, next) => {
  try {
    return res.json();
  } catch (err) {
    return next(err);
  }
};

module.exports = Router().post('/', loginAccept);
