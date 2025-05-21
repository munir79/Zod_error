import { object } from "zod/v4"

const handleDuplicateError=(err)=>{
    const field=object.keys(err.keyValue)[0];
    const value=err.keyValue[field];

    return{
        statusCode:400,
        message:"duplicate Error ",
        errorMessages:[
            {
                path:field,
                message:`${field} "${value} already exists"`
            }
        ]
    }
}

export default handleDuplicateError;