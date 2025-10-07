import { Router } from 'express';
import {AlbumesController} from '../controller/albumes-controller.js'
import { accessControl, passportCall } from '../middlewares/middlewares.js';
import { upload } from '../utils/multer.js';
export const router=Router()

router.get('/', passportCall('jwt'), accessControl(['ADMIN', 'ARTISTA', 'MANAGER']),AlbumesController.getAllAlbumes )

router.post('/crear/', passportCall('jwt'), upload.single('caratula'), accessControl(['ADMIN', 'ARTISTA', 'MANAGER']),AlbumesController.createAlbum)

router.put('/crear/stage3/:id_album', passportCall('jwt'), accessControl(["ARTISTA","ADMIN", "MANAGER"]),  AlbumesController.updateStageTo2)

router.put('/crear/stage4/:id_album', passportCall('jwt'), accessControl(["ARTISTA","ADMIN", "MANAGER"]),  AlbumesController.sendAlbumToRevision)