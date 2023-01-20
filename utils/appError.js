/**
 * @brief Class to handle all application errors
 */
export default class AppError extends Error {
    /**
     * @brief Default constructor for errors
     * @param {String} message 
     * @param {Number} statusCode 
     */
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
