import { Router } from 'express';
import { CluesController } from '../controller/clues-controller.js';
export const router=Router()

router.get('/', CluesController.getAllClues)