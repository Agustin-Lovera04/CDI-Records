import { Router } from 'express';
import {AlbumesController} from '../controller/albumes-controller.js'
export const router=Router()

router.get('/', AlbumesController.getAllAlbumes )

router.post('/', AlbumesController.createAlbum)