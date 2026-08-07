import { ROADMAPS, BACKEND_MODULES, RoadmapConstant, ModuleConstant } from '../constants/roadmap.constants';
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

  public getModulesByRoadmap(roadmapId: string): ModuleConstant[] {
    if (roadmapId === 'backend') {
      return BACKEND_MODULES;
    }
    return [];
  }

  public getModuleDetails(moduleId: string): ModuleConstant {
    const moduleInfo = BACKEND_MODULES.find(m => m.id === moduleId);
    if (!moduleInfo) throw new NotFoundError('Module not found');
    return moduleInfo;
  }
}
