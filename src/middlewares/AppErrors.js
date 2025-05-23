class AppError extends Error {
    constructor(statusCode,message){
        super(message);
        this.statusCode=statusCode;
        this.message=message;
        this.isOperational=true;
        Error.captureStackTrace(this, this.constructor);
    }
}

export  default AppError  ;