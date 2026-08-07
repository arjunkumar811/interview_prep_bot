import { Router } from 'express';
import { QuizController } from '../controllers/quiz.controller';

const router = Router();
const controller = new QuizController();

router.get('/', controller.getAll);

export default router;
