const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'silly',
  format: format.combine(format.colorize(), format.cli()),
  transports: [new transports.Console()]
});

const logErrors = message => {
  logger.error(`message: ${message}`);
};

module.exports = { logger, logErrors };
