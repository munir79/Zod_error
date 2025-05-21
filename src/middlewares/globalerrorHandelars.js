import { ZodError } from "zod";
import handleZod from "./handleZodError.js";
import handleValidationError from "./handleValidationError.js";



const globalErrorHandelar=(err,re,res,next)=>{
    // default 

    let statusCode=5000;
    let message=" somethig went wrong";
    let errorMessages=[];


    // zod validation error 
    if(err instanceof ZodError) {
        const simplifierError=handleZod(err);
        statusCode=simplifierError.statusCode;
        message:simplifierError.message;
        errorMessages:simplifierError.errorMessages;
    }
    else if(err.name==='ValidationError'){
        const simplifierError=handleValidationError(err);
        statusCode=simplifierError.statusCode;
        message=simplifierError.message;
        errorMessages=simplifierError.errorMessage;
    }
    else if(err instanceof Error){
        message=err.message;
        errorMessages=[
            {
                path:'',
                message:err.message
            },
        ];
    }

    res.status(statusCode).json({
        success:false,
        message,
        stack:process.env.NODE_ENV==='development' ? err.stack :undefined,
    })
}

export default globalErrorHandelar;