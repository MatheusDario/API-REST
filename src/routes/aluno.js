import { Router } from 'express';
import alunoController from '../controllers/Aluno';

const router = new Router();

router.get('/', alunoController.index);

export default router;
