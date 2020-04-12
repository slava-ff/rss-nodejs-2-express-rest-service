const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const { PORT } = require('./common/config');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const { logErrors } = require('./helpers/logger.helper');
const logRequests = require('./middlewares/logRequests.middleware');
const errorHandler = require('./middlewares/errorHandler.middleware');
const confirmServiceIsRunning = require('./middlewares/rootReqs.middleware');

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

process
  .on('uncaughtException', error => {
    logErrors(`Uncaught exception detected: ${error}`);
    const { exit } = process;
    exit(1);
  })
  .on('unhandledRejection', error => {
    logErrors(`Unhandled rejection detected: ${error}.`);
    const { exit } = process;
    exit(1);
  });

// uncomment the line below to check the uncaught exception capturing:
// throw Error('uncaughtException test');

// uncomment the line below to check the unhandled rejection detection
// Promise.reject(Error('unhandledRejection test'));

module.exports = express()
  .use(express.json())
  .use(logRequests)

  // uncomment the lines below and run tests to check the error handling
  // middleware or just run tests (there should be ones from tests)

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
