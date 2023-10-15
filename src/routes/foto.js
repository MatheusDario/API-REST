import { Router } from 'express';
import multer from 'multer';
import fotoController from '../controllers/Foto';
import multerConfig from '../config/multer';

const router = new Router();

const upload = multer(multerConfig);

router.post('/', upload.single('foto'), fotoController.store);

export default router;
