import { Markup } from 'telegraf';
import { RoadmapConstant, LevelConstant, ModuleConstant } from '../constants/roadmap.constants';

export const getRoadmapSelectionKeyboard = (roadmaps: RoadmapConstant[]) => {
  const buttons = roadmaps.map((r) => [Markup.button.callback(`${r.icon} ${r.name}`, `roadmap:${r.id}`)]);
  return Markup.inlineKeyboard(buttons);
};

export const getLevelSelectionKeyboard = (roadmapId: string, levels: LevelConstant[]) => {
  const buttons = levels.map((l) => [Markup.button.callback(l.name, `level:${roadmapId}:${l.id}`)]);
  
  // Add back button to return to roadmaps
  buttons.push([Markup.button.callback('⬅ Back', 'back:roadmaps')]);

  return Markup.inlineKeyboard(buttons);
};

export const getModulesKeyboard = (roadmapId: string, modules: ModuleConstant[]) => {
  const buttons = modules.map((m) => [Markup.button.callback(m.name, `module:${m.id}`)]);

  // Add back button to return to level selection
  buttons.push([Markup.button.callback('⬅ Back', `back:roadmap:${roadmapId}`)]);

  return Markup.inlineKeyboard(buttons);
};

export const getModuleDetailKeyboard = (moduleId: string, roadmapId: string, levelId: string) => {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('📖 Learn', `placeholder:learn:${moduleId}`),
      Markup.button.callback('📝 Quiz', `placeholder:quiz:${moduleId}`),
    ],
    // Back button returns to the specific level's module list
    [Markup.button.callback('⬅ Back', `back:level:${roadmapId}:${levelId}`)],
  ]);
};
