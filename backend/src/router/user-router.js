import { Router } from 'express';
import { UserController } from '../controller/user-controller';
export const router=Router()

router.get('/', UserController.getAllUsers)