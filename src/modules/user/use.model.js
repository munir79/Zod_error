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
        }
    },
    {
        timestamps:true
    }
);

export const UserModel=mongoose.model("User",userSchema);