const confirmServiceIsRunning = (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
};

module.exports = confirmServiceIsRunning;
