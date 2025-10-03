import { Router } from 'express';
import { CluesController } from '../controller/clues-controller.js';
import { accessControl, passportCall } from '../middlewares/middlewares.js';
export const router=Router()

router.get('/', passportCall('jwt'),CluesController.getAllClues)

router.post('/stage2/:id_album&:artistas', passportCall('jwt'),accessControl(['ADMIN', 'ARTISTA', 'MANAGER']),CluesController.addCluesToAlbum)