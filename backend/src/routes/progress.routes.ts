import { Router } from 'express';
import { ProgressController } from '../controllers/progress.controller';

const router = Router();
const controller = new ProgressController();

router.get('/', controller.getAll);

export default router;
