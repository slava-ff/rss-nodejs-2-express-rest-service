/* eslint-disable no-process-exit */
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const { PORT } = require('./common/config');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');
const { logRequests, logErrors } = require('./helpers/logger.helper');

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

const confirmServiceIsRunning = (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
};

process.on('uncaughtException', (error, origin) => {
  logErrors(`${origin}. Captured error: ${error}`);
  process.exit(1);
});

// uncomment the line below to check the uncaught exception capturing:

// throw Error('uncaughtException test');

process.on('unhandledRejection', (reason, promise) => {
  logErrors(`Unhandled rejection detected: ${reason.message}.
  Promise: ${promise}`);
  process.exit(1);
});

// uncomment the line below to check the unhandled rejection detection

// Promise.reject(Error('unhandledRejection test'));

const errorHandler = (err, req, res, next) => {
  logErrors(err.message || getStatusText(INTERNAL_SERVER_ERROR));

  res
    .status(err.status || INTERNAL_SERVER_ERROR)
    .send(err.message || getStatusText(INTERNAL_SERVER_ERROR));

  next();
};

module.exports = express()
  .use(express.json())
  .use('/', logRequests)

  // uncomment the lines below and run tests to check
  // the error handling middleware or just run tests
  // (there should be ones from tests)

  // .use('/', () => {
  //   throw Error;
  // })
  .use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  .use('/', confirmServiceIsRunning)
  .use('/users', userRouter)
  .use('/boards', taskRouter)
  .use('/boards', boardRouter)
  .use(errorHandler)
  .listen(PORT, () => console.log(`Server started on :${PORT}`));
