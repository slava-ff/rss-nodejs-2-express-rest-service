const logger = require('./helpers/logger.helper');

process
  .on('uncaughtException', error => {
    logger.error(`Uncaught exception detected: ${error.stack}`);
    const { exit } = process;
    exit(1);
  })
  .on('unhandledRejection', error => {
    logger.error(`Unhandled rejection detected: ${error.stack}.`);
    const { exit } = process;
    exit(1);
  });

const { PORT } = require('./common/config');
const app = require('./app');
const { connectToDb } = require('./helpers/db.helper');

connectToDb(() => {
  app.listen(PORT, () => console.log(`Server started on :${PORT}`));
});
