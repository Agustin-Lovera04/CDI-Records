import { Router } from 'express';
import {AlbumesController} from '../controller/albumes-controller.js'
import { accessControl, passportCall } from '../middlewares/middlewares.js';
import { upload } from '../utils/multer.js';
export const router=Router()

router.get('/', passportCall('jwt'), accessControl(['ADMIN', 'ARTISTA', 'MANAGER']),AlbumesController.getAllAlbumes )

router.post('/', passportCall('jwt'), upload.single('caratula'), accessControl(['ADMIN', 'ARTISTA', 'MANAGER']),AlbumesController.createAlbum)

router.put('/stage3/:id_album', passportCall('jwt'), accessControl(["ARTISTA","ADMIN", "MANAGER"]),  AlbumesController.updateStageTo2)

router.put('/stage4/:id_album', passportCall('jwt'), accessControl(["ARTISTA","ADMIN", "MANAGER"]),  AlbumesController.sendAlbumToRevision)