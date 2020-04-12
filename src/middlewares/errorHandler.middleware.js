const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');
const { logErrors } = require('../helpers/logger.helper');

const errorHandler = (err, req, res, next) => {
  logErrors(err.message || getStatusText(INTERNAL_SERVER_ERROR));

  res
    .status(err.status || INTERNAL_SERVER_ERROR)
    .send(err.message || getStatusText(INTERNAL_SERVER_ERROR));

  next();
};

module.exports = errorHandler;
