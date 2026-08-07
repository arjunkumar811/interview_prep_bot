import { UserRepository } from '../repositories/user.repository';

export class UserService {
  private repository = new UserRepository();

  // Example placeholder
  public async getAll() {
    return this.repository.findAll();
  }
}
