class NotFoundError extends Error {
  constructor(message, status) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || 'Item not found';
    this.status = status || 404;
  }
}

class AuthError extends Error {
  constructor() {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = 'Unauthorized';
    this.status = 401;
  }
}

class ForbiddenError extends Error {
  constructor() {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = 'Forbidden';
    this.status = 403;
  }
}

module.exports = { NotFoundError, AuthError, ForbiddenError };
