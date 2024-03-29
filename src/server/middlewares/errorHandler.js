import statusCode from '../constants/statusCode.js';

const errorHandler = (error, request, response, next) => {
  const status = error.statusCode || statusCode.INTERNAL_SERVER_ERROR;
  response.status(status).json({
    message: error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack : {},
  });
};

export default errorHandler;
