import { Request, Response, NextFunction } from 'express';
import { ProgressService } from '../services/progress.service';

export class ProgressController {
  private service = new ProgressService();

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
