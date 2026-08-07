import { 
  ROADMAPS, 
  BACKEND_LEVELS, 
  BACKEND_MODULES, 
  FRONTEND_LEVELS,
  FRONTEND_MODULES,
  RoadmapConstant, 
  LevelConstant, 
  ModuleConstant 
} from '../constants/roadmap.constants';
import { NotFoundError } from '../utils/errors';

export class RoadmapNavigationService {
  public getRoadmaps(): RoadmapConstant[] {
    return ROADMAPS;
  }

  public getRoadmapById(id: string): RoadmapConstant {
    const roadmap = ROADMAPS.find(r => r.id === id);
    if (!roadmap) throw new NotFoundError('Roadmap not found');
    return roadmap;
  }

  public getLevelsByRoadmap(roadmapId: string): LevelConstant[] {
    if (roadmapId === 'backend') {
      return BACKEND_LEVELS;
    }
    if (roadmapId === 'frontend') {
      return FRONTEND_LEVELS;
    }
    return [];
  }

  public getLevelById(roadmapId: string, levelId: string): LevelConstant {
    const levels = this.getLevelsByRoadmap(roadmapId);
    const level = levels.find(l => l.id === levelId);
    if (!level) throw new NotFoundError('Level not found');
    return level;
  }

  public getModulesByLevel(roadmapId: string, levelId: string): ModuleConstant[] {
    if (roadmapId === 'backend') {
      return BACKEND_MODULES.filter(m => m.levelId === levelId);
    }
    if (roadmapId === 'frontend') {
      return FRONTEND_MODULES.filter(m => m.levelId === levelId);
    }
    return [];
  }

  public getModuleDetails(moduleId: string): ModuleConstant {
    const allModules = [...BACKEND_MODULES, ...FRONTEND_MODULES];
    const moduleInfo = allModules.find(m => m.id === moduleId);
    if (!moduleInfo) throw new NotFoundError('Module not found');
    return moduleInfo;
  }
}
