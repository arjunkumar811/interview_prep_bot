import { LessonRepository } from '../repositories/lesson.repository';

export class LessonService {
  private repository = new LessonRepository();

  // Example placeholder
  public async getAll() {
    return this.repository.findAll();
  }
}
