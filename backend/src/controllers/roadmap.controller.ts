import { Request, Response, NextFunction } from 'express';
import { RoadmapService } from '../services/roadmap.service';

export class RoadmapController {
  private service = new RoadmapService();

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
