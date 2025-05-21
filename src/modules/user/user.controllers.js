import { UserService } from "./user.services.js";

const CreateUserControllers=async(req,res)=>{
    try{
   const userData=req.body;
//    const result=await UserService.CreateUser(userData);.
const result=await UserService.CreateUser(userData);
   res.status(201).json({
    success:true,
    message:"User crteated Successfully",
    data:result
    
   })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to create User",
            error:err.message,
        })

    }
}



const getAllUsersControllers=async(req,res)=>{
    try{
//    const result=await UserService.CreateUser(userData);.
const result=await UserService.GetAllUsers();
   res.status(201).json({
    success:true,
    message:"Get All Users Successfully ",
    data:result
    
   })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to fetch User",
            error:err.message,
        })

    }

    }


export const UserControllers={
    CreateUserControllers,
    getAllUsersControllers
}