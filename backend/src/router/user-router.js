import { Router } from 'express';
import { UserController } from '../controller/user-controller.js';
import { passportCall } from '../middlewares/middlewares.js';
export const router=Router()

router.get('/', UserController.getAllUsers)

router.post('/register', passportCall('register'), UserController.registerUser)