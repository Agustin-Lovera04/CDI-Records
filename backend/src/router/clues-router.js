import { Router } from 'express';
import { CluesController } from '../controller/clues-controller.js';
import { passportCall } from '../middlewares/middlewares.js';
export const router=Router()

router.get('/', passportCall('jwt'),CluesController.getAllClues)

router.post('/:id_album&:artistas', CluesController.addCluesToAlbum)