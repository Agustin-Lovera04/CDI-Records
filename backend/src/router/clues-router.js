import { Router } from 'express';
import { CluesController } from '../controller/clues-controller.js';
export const router=Router()

router.get('/', CluesController.getAllClues)

router.post('/:id_album&:artistas', CluesController.addCluesToAlbum)