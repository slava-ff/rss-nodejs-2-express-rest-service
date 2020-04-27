const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../common/config');
const { AuthError } = require('../helpers/error.helper');

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(new AuthError());
  }

  const token = authHeader.replace('Bearer ', '');

  jwt.verify(token, JWT_SECRET_KEY, err => {
    if (err) {
      return next(new AuthError());
    }

    return next();
  });
};

module.exports = authentication;
