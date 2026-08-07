import { Request, Response, NextFunction } from 'express';
import { LessonService } from '../services/lesson.service';

export class LessonController {
  private service = new LessonService();

  // Example placeholder
  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const data = await this.service.getAll();
      res.status(200).json({ status: 'success', data: [] });
    } catch (error) {
      next(error);
    }
  };
}
