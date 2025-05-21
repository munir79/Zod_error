import express from 'express';
import { UserControllers } from './user.controllers.js';

const router=express.Router();

router.post('/create-user',UserControllers.CreateUserControllers);


export const UserRoutes=router;
