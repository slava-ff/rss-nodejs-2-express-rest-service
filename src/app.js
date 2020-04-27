const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const loginRouter = require('./resources/login/login.router');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const logRequests = require('./middlewares/logRequests.middleware');
const errorHandler = require('./middlewares/errorHandler.middleware');
const confirmServiceIsRunning = require('./middlewares/rootReqs.middleware');
const authentication = require('./middlewares/auth.middleware');

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

module.exports = express()
  .use(express.json())
  .use(logRequests)
  .use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  .use('/', confirmServiceIsRunning)
  .use('/login', loginRouter)
  .use('/users', authentication, userRouter)
  .use('/boards', authentication, taskRouter)
  .use('/boards', authentication, boardRouter)
  .use(errorHandler);
