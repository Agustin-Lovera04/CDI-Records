import { Router } from 'express';
import {AlbumesController} from '../controller/albumes-controller.js'
import { passportCall } from '../middlewares/middlewares.js';
import { upload } from '../utils/multer.js';
export const router=Router()

router.get('/', passportCall('jwt'),AlbumesController.getAllAlbumes )

router.post('/', passportCall('jwt'), upload.single('caratula'), AlbumesController.createAlbum)