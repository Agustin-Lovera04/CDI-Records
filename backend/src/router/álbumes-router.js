import { Router } from 'express';
import {ÁlbumesController} from '../controller/álbumes-controller'
export const router=Router()

router.get('/', ÁlbumesController.getAllÁlbumes )