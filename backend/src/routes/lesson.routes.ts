import { Router } from 'express';
import { LessonController } from '../controllers/lesson.controller';

const router = Router();
const controller = new LessonController();

router.get('/', controller.getAll);

export default router;
