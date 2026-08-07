import { Request, Response, NextFunction } from 'express';
import { BookmarkService } from '../services/bookmark.service';

export class BookmarkController {
  private service = new BookmarkService();

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
