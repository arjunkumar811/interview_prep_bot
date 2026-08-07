import { Markup } from 'telegraf';
import { RoadmapConstant, ModuleConstant } from '../constants/roadmap.constants';

export const getRoadmapSelectionKeyboard = (roadmaps: RoadmapConstant[]) => {
  const buttons = roadmaps.map((r) => [Markup.button.callback(`${r.icon} ${r.name}`, `roadmap:${r.id}`)]);
  return Markup.inlineKeyboard(buttons);
};

export const getModulesKeyboard = (modules: ModuleConstant[]) => {
  // We can place them in a column, 1 per row for clarity
  const buttons = modules.map((m) => [Markup.button.callback(m.name, `module:${m.id}`)]);

  // Add back button
  buttons.push([Markup.button.callback('⬅ Back', 'back:roadmaps')]);

  return Markup.inlineKeyboard(buttons);
};

export const getModuleDetailKeyboard = (moduleId: string, roadmapId: string) => {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('📖 Learn', `placeholder:learn:${moduleId}`),
      Markup.button.callback('📝 Quiz', `placeholder:quiz:${moduleId}`),
    ],
    [Markup.button.callback('⬅ Back', `back:roadmap:${roadmapId}`)],
  ]);
};
