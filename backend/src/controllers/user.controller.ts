import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  private service = new UserService();

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
