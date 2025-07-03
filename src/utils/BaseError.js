// utils/BaseError.js
export default class BaseError extends Error {
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message, errors = []) {
    return new BaseError(400, message, errors);
  }

  static Unauthorized(message = "Unauthorized") {
    return new BaseError(401, message);
  }

  static NotFound(message = "Not Found") {
    return new BaseError(404, message);
  }

  static Internal(message = "Internal Server Error") {
    return new BaseError(500, message);
  }
}
