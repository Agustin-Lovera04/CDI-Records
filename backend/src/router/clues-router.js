import { Router } from 'express';
import { CluesController } from '../controller/clues-controller';
export const router=Router()

router.get('/', CluesController.getAllClues)