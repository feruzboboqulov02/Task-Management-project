// utils/error.handler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack || err.message);

  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  const errors = err.errors || [];

  res.status(statusCode).json({
    success: false,
    message,
    errors
  });
};

export default errorHandler;
