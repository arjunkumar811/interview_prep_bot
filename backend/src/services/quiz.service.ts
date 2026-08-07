import { QuizRepository } from '../repositories/quiz.repository';

export class QuizService {
  private repository = new QuizRepository();

  // Example placeholder
  public async getAll() {
    return this.repository.findAll();
  }
}
