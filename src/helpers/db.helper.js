const mongoose = require('mongoose');

const connectToDb = startServer => {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database is connected');
    startServer();
  });
};

module.exports = {
  connectToDb
};
