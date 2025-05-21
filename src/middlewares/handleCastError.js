const handleCastError=(err)=>{
    return {
        statusCode:400,
        message:"Invalid Id",
        errorMessages:[
            {
                path:err.path,
                message:"invalid objectId"
            }
        ]
    }
}

export default handleCastError;