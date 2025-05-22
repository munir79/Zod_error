import express from 'express';
import { UserControllers } from './user.controllers.js';
import ValidateRequest from '../../middlewares/validaterequest.js';
import { UserValidationSchema } from './user.validation.js';

const router=express.Router();

router.post('/create-user',ValidateRequest(UserValidationSchema.CretateUserZodSchema), UserControllers.CreateUserControllers);
router.post('/login',UserControllers.logInControllers)
router.get('/',UserControllers.getAllUsersControllers);


export const UserRoutes=router;
