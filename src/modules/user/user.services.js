import { JwtVerify } from "../../utils/jwt.js";
import { UserModel } from "./use.model.js"

const CreateUser=async(payLoad)=>{

    const isExists=await UserModel.findOne({email:payLoad.email});
    if(isExists){
        throw new Error (" Emaill already registred ")
    }
    const result= await UserModel.create(payLoad);
    return result
}



// const LoginUser


const LoginUser=async(email,password)=>{
    const user=await UserModel.findOne({email}).select("+passwoed");
    if(!user){
        throw new Error("User Not found");
    }

    if(user.password !==password){
        throw new Error("Incorrect Password  ");
    }


    const token =JwtVerify.cretaeToken({userId:user._id, role:user.role},process.env.JWT_SECRET,process.env.JWT_EXPIRES_IN);
    return {token};

}







const GetAllUsers=async()=>{
    const result =await UserModel.find();
    return result;
}

 export const UserService={
    LoginUser,
 CreateUser,
 GetAllUsers,
 
}