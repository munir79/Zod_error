const handleValidationError=(err)=>{
    const errors=Object.values(err.errors).map((el)=>{
        return {
            path:el.path,
            message:el.message
        }
    })
    return {
        statusCode:400,
        message:" validation error mongoose ",
        errorMessage:errors,
    }
}

export default handleValidationError;