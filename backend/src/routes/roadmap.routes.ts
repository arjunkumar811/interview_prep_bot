import { Router } from 'express';
import { RoadmapController } from '../controllers/roadmap.controller';

const router = Router();
const controller = new RoadmapController();

router.get('/', controller.getAll);

export default router;
