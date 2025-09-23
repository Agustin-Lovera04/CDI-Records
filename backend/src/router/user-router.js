import { Router } from 'express';
import { UserController } from '../controller/user-controller.js';
export const router=Router()

router.get('/', UserController.getAllUsers)