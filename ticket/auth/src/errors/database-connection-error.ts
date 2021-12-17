export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = 'Error connecting to database';
  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErros() {
    return [{ message: this.reason }];
  }
}
