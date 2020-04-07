const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const { PORT } = require('./common/config');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

module.exports = express()
  .use(express.json())
  .use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  .use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
      res.send('Service is running!');
      return;
    }
    next();
  })
  .use('/users', userRouter)
  .use('/boards', taskRouter)
  .use('/boards', boardRouter)
  .listen(PORT, () => console.log(`Server started on :${PORT}`));
