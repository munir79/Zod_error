const ValidateRequest=(schema)=>(req,res,next)=>{
    try{
        schema.parse({
            body:req.body,
            query:req.query,
            params:req.params
        })
        next();
    }
    catch(err){
        next(err);
    }
}

export default ValidateRequest;