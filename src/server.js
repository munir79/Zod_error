import mongoose from "mongoose";
import app from "./app.js";
import dotenv from 'dotenv'

dotenv.config()

const port=process.env.PORT || 5000;
console.log("my port", process.env.PORT)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb Connected");
    app.listen(port,()=>{
        console.log((`server is running on port ${port}`))
    })
})
.catch((err)=>{
    console.log("failed to connected Mongodb ",err)
});