import { Router } from 'express';
import {AlbumesController} from '../controller/albumes-controller.js'
import { passportCall } from '../middlewares/middlewares.js';
export const router=Router()

router.get('/', AlbumesController.getAllAlbumes )

router.post('/', passportCall('jwt'), AlbumesController.createAlbum)