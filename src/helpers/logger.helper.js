const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'silly',
  format: format.combine(format.colorize(), format.cli()),
  transports: [new transports.Console()]
});

const logRequests = (req, res, next) => {
  const { method, url, query, body } = req;

  logger.info(`
      ${method} ${url}
      query parameters: ${JSON.stringify(query)}
      body: ${JSON.stringify(body)}
      `);

  next();
};

const logErrors = message => {
  logger.error(`message: ${message}`);
};

module.exports = { logRequests, logErrors };
