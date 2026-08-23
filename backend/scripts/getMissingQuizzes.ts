import fs from 'fs';
import path from 'path';
import { BACKEND_MODULES, FRONTEND_MODULES } from '../src/constants/roadmap.constants';

const allModules = [...BACKEND_MODULES, ...FRONTEND_MODULES];
const missing = allModules
  .filter(m => !fs.existsSync(path.join(__dirname, '../content/quizzes', `${m.id}.json`)))
  .map(m => m.id);

fs.writeFileSync(path.join(__dirname, 'missing_quizzes.json'), JSON.stringify(missing, null, 2));
console.log('Missing quizzes saved to missing_quizzes.json. Total:', missing.length);
