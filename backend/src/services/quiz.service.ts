import fs from 'fs';
import path from 'path';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctOptionId: number;
  explanation: string;
}

export class QuizService {
  private quizDir = path.resolve(__dirname, '../../content/quizzes');
  private cache: Map<string, QuizQuestion[]> = new Map();

  public async getQuizByModuleId(moduleId: string): Promise<QuizQuestion[]> {
    if (this.cache.has(moduleId)) {
      return this.cache.get(moduleId)!;
    }

    const filePath = path.join(this.quizDir, `${moduleId}.json`);
    
    if (!fs.existsSync(filePath)) {
      return [];
    }

    try {
      const content = await fs.promises.readFile(filePath, 'utf8');
      const questions = JSON.parse(content) as QuizQuestion[];
      this.cache.set(moduleId, questions);
      return questions;
    } catch (error) {
      console.error(`Error parsing quiz for module ${moduleId}:`, error);
      return [];
    }
  }
}

export const quizService = new QuizService();
