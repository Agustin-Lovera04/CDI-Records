import { Router } from 'express';
import {ÁlbumesController} from '../controller/álbumes-controller.js'
export const router=Router()

router.get('/', ÁlbumesController.getAllÁlbumes )