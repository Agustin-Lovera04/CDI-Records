import { Router } from 'express';
import { CluesController } from '../controller/clues-controller.js';
import { accessControl, passportCall } from '../middlewares/middlewares.js';
import { uploadClues } from '../utils/multer-clues.js';
export const router=Router()

router.get('/', passportCall('jwt'),CluesController.getAllClues)

router.post('/stage2/:id_album&:artistas', passportCall('jwt'),accessControl(['ADMIN', 'ARTISTA', 'MANAGER']), uploadClues.single('clue'), CluesController.addCluesToAlbum)