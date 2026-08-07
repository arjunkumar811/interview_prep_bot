import { Markup } from 'telegraf';
import { RoadmapConstant, LevelConstant, ModuleConstant } from '../constants/roadmap.constants';

// Helper to chunk arrays into rows
const chunkArray = <T>(arr: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};

export const getRoadmapSelectionKeyboard = (roadmaps: RoadmapConstant[]) => {
  const buttons = roadmaps.map((r) => Markup.button.callback(`${r.icon} ${r.name}`, `roadmap:${r.id}`));
  return Markup.inlineKeyboard(chunkArray(buttons, 2));
};

export const getLevelSelectionKeyboard = (roadmapId: string, levels: LevelConstant[]) => {
  // We keep levels stacked because they have long descriptive names (e.g. 10-12+ LPA)
  const buttons = levels.map((l) => [Markup.button.callback(l.name, `level:${roadmapId}:${l.id}`)]);
  
  buttons.push([Markup.button.callback('⬅ Back', 'back:roadmaps')]);

  return Markup.inlineKeyboard(buttons);
};

export const getModulesKeyboard = (roadmapId: string, modules: ModuleConstant[]) => {
  // Topics must be one-by-one (vertical list)
  const rows = modules.map((m) => [Markup.button.callback(m.name, `module:${m.id}`)]);

  // Add back button on its own row at the bottom
  rows.push([Markup.button.callback('⬅ Back', `back:roadmap:${roadmapId}`)]);

  return Markup.inlineKeyboard(rows);
};

export const getModuleDetailKeyboard = (moduleId: string, roadmapId: string, levelId: string) => {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('📖 Learn', `learn:${moduleId}`),
      Markup.button.callback('📝 Quiz', `quiz:${moduleId}`),
    ],
    [Markup.button.callback('⬅ Back', `back:level:${roadmapId}:${levelId}`)],
  ]);
};
