const handleZod=(err)=>{
    const errors=err.errors.map((issue)=>{
        return{
            path:issue.path[0],
            message:issue.message,
        }
    });

    return {
        statusCode:400,
        message:"Validation error",
        errorMessages:errors,
    }
}

export  default  handleZod;