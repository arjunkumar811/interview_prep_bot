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
  const rows = chunkArray(buttons, 2);
  rows.push([Markup.button.callback('🔄 Restart', 'restart')]);
  return Markup.inlineKeyboard(rows);
};

export const getLevelSelectionKeyboard = (roadmapId: string, levels: LevelConstant[]) => {
  // We keep levels stacked because they have long descriptive names (e.g. 10-12+ LPA)
  const buttons = levels.map((l) => [Markup.button.callback(l.name, `level:${roadmapId}:${l.id}`)]);
  
  buttons.push([Markup.button.callback('⬅ Back', 'back:roadmaps'), Markup.button.callback('🔄 Restart', 'restart')]);

  return Markup.inlineKeyboard(buttons);
};

export const getModulesKeyboard = (roadmapId: string, modules: ModuleConstant[]) => {
  // Topics must be one-by-one (vertical list)
  const rows = modules.map((m) => [Markup.button.callback(m.name, `module:${m.id}`)]);

  // Add back button on its own row at the bottom
  rows.push([Markup.button.callback('⬅ Back', `back:roadmap:${roadmapId}`), Markup.button.callback('🔄 Restart', 'restart')]);

  return Markup.inlineKeyboard(rows);
};

export const getModuleDetailKeyboard = (moduleId: string, roadmapId: string, levelId: string) => {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('📖 Learn', `learn:${moduleId}`),
      Markup.button.callback('📝 Quiz', `quiz:${moduleId}`),
    ],
    [Markup.button.callback('⬅ Back', `back:level:${roadmapId}:${levelId}`), Markup.button.callback('🔄 Restart', 'restart')],
  ]);
};

export const getLessonCompletionKeyboard = (moduleId: string, roadmapId: string, levelId: string, nextModule?: ModuleConstant) => {
  const rows = [];
  if (nextModule) {
    // Send user to the next module's details page to decide to Learn or Quiz
    rows.push([Markup.button.callback(`▶️ Next: ${nextModule.name}`, `module:${nextModule.id}`)]);
  }
  rows.push([Markup.button.callback('📝 Take Quiz', `quiz:${moduleId}`)]);
  rows.push([Markup.button.callback('⬅ Back to Modules', `back:level:${roadmapId}:${levelId}`), Markup.button.callback('🔄 Restart', 'restart')]);
  return Markup.inlineKeyboard(rows);
};

export const getErrorKeyboard = () => {
  return Markup.inlineKeyboard([[Markup.button.callback('🔄 Restart', 'restart')]]);
};
