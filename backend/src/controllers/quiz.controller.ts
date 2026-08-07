import { Request, Response, NextFunction } from 'express';
import { QuizService } from '../services/quiz.service';

export class QuizController {
  private service = new QuizService();

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
