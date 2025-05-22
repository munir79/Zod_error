import { ZodError } from 'zod';
import handleZod from './handleZodError.js';
import handleValidationError from './handleValidationError.js';
import handleCastError from './handleCastError.js';
import handleDuplicateError from './handleDuplicateError.js';
import AppError from './AppErrors.js';
import path from 'path';

const globalErrorHandelar = (err, req, res, next) => {
  // default

  let statusCode = 500;
  let message = ' somethig went wrong';
  let errorMessages = [];

  //  ***********************zod validation error ********************************************
  if (err instanceof ZodError) {
    const simplifierError = handleZod(err);
    statusCode = simplifierError.statusCode;
    message = simplifierError.message;
    errorMessages = simplifierError.errorMessages;
  }

  // ****************************validation error ************************************************


  
  else if (err.name === 'ValidationError') {
    const simplifierError = handleValidationError(err);
    statusCode = simplifierError.statusCode;
    message = simplifierError.message;
    errorMessages = simplifierError.errorMessages;
  }

  // ************************************CastError *****************************************************************
  else if ((err.name = 'CastErrotr')) {
    const simplifierError = handleCastError(err);
    statusCode = simplifierError.statusCode;
    message = simplifierError.message;
    errorMessages = simplifierError.errorMessages;
  }

  // ***********************handleDuplicate error ***********************************
  else if (err.code === 11000) {
    const simplifierError = handleDuplicateError(err);
    statusCode = simplifierError.statusCode;
    message = simplifierError.message;
    errorMessages = simplifierError.errorMessages;
  }

  // ********************************************AppError *******************************
  else if (err instanceof AppError) {
    statusCode = err = statusCode;
    message: err.message;
    errorMessages = [
      {
        path: '',
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err.message;
    errorMessages = [
      {
        path: '',
        message: err.message,
      },
    ];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export default globalErrorHandelar;
