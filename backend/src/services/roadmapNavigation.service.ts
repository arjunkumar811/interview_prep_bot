import { ROADMAPS, BACKEND_LEVELS, BACKEND_MODULES, RoadmapConstant, LevelConstant, ModuleConstant } from '../constants/roadmap.constants';
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
    return [];
  }

  public getLevelById(roadmapId: string, levelId: string): LevelConstant {
    if (roadmapId === 'backend') {
      const level = BACKEND_LEVELS.find(l => l.id === levelId);
      if (!level) throw new NotFoundError('Level not found');
      return level;
    }
    throw new NotFoundError('Level not found for roadmap');
  }

  public getModulesByLevel(roadmapId: string, levelId: string): ModuleConstant[] {
    if (roadmapId === 'backend') {
      return BACKEND_MODULES.filter(m => m.levelId === levelId);
    }
    return [];
  }

  public getModuleDetails(moduleId: string): ModuleConstant {
    const moduleInfo = BACKEND_MODULES.find(m => m.id === moduleId);
    if (!moduleInfo) throw new NotFoundError('Module not found');
    return moduleInfo;
  }
}
