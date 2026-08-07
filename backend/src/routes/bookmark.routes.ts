import { Router } from 'express';
import { BookmarkController } from '../controllers/bookmark.controller';

const router = Router();
const controller = new BookmarkController();

router.get('/', controller.getAll);

export default router;
