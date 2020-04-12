const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');
const logger = require('../helpers/logger.helper');

const errorHandler = (err, req, res, next) => {
  logger.error(err.stack || getStatusText(INTERNAL_SERVER_ERROR));

  res
    .status(err.status || INTERNAL_SERVER_ERROR)
    .send(err.message || getStatusText(INTERNAL_SERVER_ERROR));

  next();
};

module.exports = errorHandler;
