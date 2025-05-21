import { UserModel } from "./use.model.js"

const CreateUser=async(payLoad)=>{

    const isExists=await UserModel.findOne({email:payLoad.email});
    if(isExists){
        throw new Error (" Emaill already registred ")
    }
    const result= await UserModel.create(payLoad);
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