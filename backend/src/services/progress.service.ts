import { ProgressRepository } from '../repositories/progress.repository';

export class ProgressService {
  private repository = new ProgressRepository();

  // Example placeholder
  public async getAll() {
    return this.repository.findAll();
  }
}
