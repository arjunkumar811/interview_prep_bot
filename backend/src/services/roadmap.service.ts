import { RoadmapRepository } from '../repositories/roadmap.repository';

export class RoadmapService {
  private repository = new RoadmapRepository();

  // Example placeholder
  public async getAll() {
    return this.repository.findAll();
  }
}
