import express from 'express'
import cors from 'cors';
import { UserRoutes } from './modules/user/user.route.js';
import globalErrorHandelar from './middlewares/globalerrorHandelars.js';

const app=express();

// middlewares
app.use(cors());
app.use(express.json());


//route 
app.use('/api/v1/users/',UserRoutes);
//test routes 
app.use(globalErrorHandelar);

app.get('/',(req,res)=>{
    res.send(" Api is  running ........");
})

export default app;