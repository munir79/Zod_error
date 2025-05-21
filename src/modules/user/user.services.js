import { UserModel } from "./use.model.js"

const CreateUser=async(userData)=>{
    const result= await UserModel.create(userData);
    return result
}



const GetAllUsers=async()=>{
    const result =await UserModel.find();
    return result;
}

 export const UserService={
 CreateUser,
 GetAllUsers
}