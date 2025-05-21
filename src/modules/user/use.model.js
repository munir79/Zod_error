import mongoose from 'mongoose';
const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Name is required"]
        },
        email:{
            type:String,
            required:[true, "email is required "]
        },
        password:{
            type:String,
            enum:['user','admin'],
            default:'user'
        }

    },
    {
        timestamps:true
    }
);

export const UserModel=mongoose.model("User",userSchema);