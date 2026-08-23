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

  public getQuizByModuleId(moduleId: string): QuizQuestion[] {
    const filePath = path.join(this.quizDir, `${moduleId}.json`);
    
    if (!fs.existsSync(filePath)) {
      return [];
    }

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content) as QuizQuestion[];
    } catch (error) {
      console.error(`Error parsing quiz for module ${moduleId}:`, error);
      return [];
    }
  }
}

export const quizService = new QuizService();
