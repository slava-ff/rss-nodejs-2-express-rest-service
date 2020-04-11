class NotFoundError extends Error {
  constructor(message, status) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message || 'Item not found';

    this.status = status || 404;
  }
}

module.exports = NotFoundError;
