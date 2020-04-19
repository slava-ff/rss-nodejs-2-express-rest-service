const mongoose = require('mongoose');

const connectToDb = startServer => {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log("===>>: we're connected!");
    // db.dropDatabase();
    startServer();
  });
};

// let dbTemp = {
//   users: {},
//   tasks: {},
//   boards: {}
// };

// const readDb = async () => {
//   return dbTemp;
// };

// const writeDb = async dbUpdate => {
//   dbTemp = dbUpdated;
// };

module.exports = {
  // readDb,
  // writeDb,
  connectToDb
};
