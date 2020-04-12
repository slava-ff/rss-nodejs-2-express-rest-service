const { logger } = require('../helpers/logger.helper');

const logRequests = (req, res, next) => {
  const { method, url, query, body } = req;

  logger.info(`
        ${method} ${url}
        query parameters: ${JSON.stringify(query)}
        body: ${JSON.stringify(body)}
        `);

  next();
};

module.exports = logRequests;
