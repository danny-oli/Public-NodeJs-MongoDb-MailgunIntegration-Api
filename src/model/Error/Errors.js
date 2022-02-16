class AuthenticationFailedException extends Error {
  constructor(message) {
    super();
    this.error_message = message;
    this.auth = false;
    this.code = 403;
    this.status = "UNAUTHORIZED";
    this.error = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

class BadRequestException extends Error {
  constructor(message) {
    super();
    this.error_message = message;
    this.code = 400;
    this.status = "BAD_REQUEST";
    this.error = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

class ConflictException extends Error {
  constructor(message) {
    super();
    this.error_message = message;
    this.code = 409;
    this.status = "CONFLICT";
    this.error = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundException extends Error {
  constructor(message) {
    super();
    this.error_message = message;
    this.name = this.constructor.name;
    this.code = 404;
    this.status = "NOT_FOUND";
    this.error = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

class UnauthorizedException extends Error {
  constructor(message) {
    super();
    this.error_message = message;
    this.code = 403;
    this.status = "UNAUTHORIZED";
    this.error = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
  AuthenticationFailedException,
  ConflictException,
};
