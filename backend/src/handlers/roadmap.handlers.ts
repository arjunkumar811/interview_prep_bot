import { Context } from 'telegraf';
import { RoadmapNavigationService } from '../services/roadmapNavigation.service';
import { contentService } from '../services/content.service';
import {
  getRoadmapSelectionKeyboard,
  getLevelSelectionKeyboard,
  getModulesKeyboard,
  getModuleDetailKeyboard,
} from '../keyboards/roadmap.keyboards';

const roadmapService = new RoadmapNavigationService();

export const handleStart = async (ctx: Context) => {
  const roadmaps = roadmapService.getRoadmaps();
  const keyboard = getRoadmapSelectionKeyboard(roadmaps);
  const message = '🚀 Welcome to DevPrep\n\nChoose your learning roadmap.';

  await ctx.reply(message, keyboard);
};

export const handleRoadmapSelection = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as any;
  if (!cbQuery || !cbQuery.data) return;

  const [, roadmapId] = cbQuery.data.split(':');
  
  try {
    const roadmap = roadmapService.getRoadmapById(roadmapId);

    if (!roadmap.available) {
      await ctx.answerCbQuery('Coming Soon', { show_alert: true });
      return;
    }

    const levels = roadmapService.getLevelsByRoadmap(roadmapId);
    const keyboard = getLevelSelectionKeyboard(roadmapId, levels);
    
    const descriptions = levels.map(l => `**${l.name}**\n${l.description}`).join('\n\n');
    const message = `📚 ${roadmap.name} Roadmap\n\nSelect your learning level.\n\n${descriptions}`;

    await ctx.editMessageText(message, { ...keyboard, parse_mode: 'Markdown' });
    await ctx.answerCbQuery();
  } catch (error) {
    await ctx.answerCbQuery('Error loading roadmap levels.', { show_alert: true });
  }
};

export const handleLevelSelection = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as any;
  if (!cbQuery || !cbQuery.data) return;

  const [, roadmapId, levelId] = cbQuery.data.split(':');

  try {
    const roadmap = roadmapService.getRoadmapById(roadmapId);
    const level = roadmapService.getLevelById(roadmapId, levelId);
    const modules = roadmapService.getModulesByLevel(roadmapId, levelId);
    const keyboard = getModulesKeyboard(roadmapId, modules);

    const message = `📚 ${roadmap.name} Roadmap\n\n**${level.name}**\n${level.description}\n\nChoose a module to begin learning.`;

    await ctx.editMessageText(message, { ...keyboard, parse_mode: 'Markdown' });
    await ctx.answerCbQuery();
  } catch (error) {
    await ctx.answerCbQuery('Error loading modules.', { show_alert: true });
  }
};

export const handleModuleSelection = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as any;
  if (!cbQuery || !cbQuery.data) return;

  const [, moduleId] = cbQuery.data.split(':');

  try {
    const moduleInfo = roadmapService.getModuleDetails(moduleId);
    const keyboard = getModuleDetailKeyboard(moduleId, moduleInfo.roadmapId, moduleInfo.levelId);

    const message = `**${moduleInfo.name}**\n\n${moduleInfo.description}\n\nEstimated Topics: ${moduleInfo.estimatedTopics}\nEstimated Learning Time: ${moduleInfo.estimatedTime}`;

    await ctx.editMessageText(message, { ...keyboard, parse_mode: 'Markdown' });
    await ctx.answerCbQuery();
  } catch (error) {
    await ctx.answerCbQuery('Error loading module.', { show_alert: true });
  }
};

export const handleBack = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as any;
  if (!cbQuery || !cbQuery.data) return;

  const parts = cbQuery.data.split(':');
  const target = parts[1];

  try {
    if (target === 'roadmaps') {
      const roadmaps = roadmapService.getRoadmaps();
      const keyboard = getRoadmapSelectionKeyboard(roadmaps);
      const message = '🚀 Welcome to DevPrep\n\nChoose your learning roadmap.';
      
      await ctx.editMessageText(message, keyboard);
      await ctx.answerCbQuery();
    } else if (target === 'roadmap') {
      // Back from Level modules list to Roadmap levels selection
      const roadmapId = parts[2];
      const roadmap = roadmapService.getRoadmapById(roadmapId);
      const levels = roadmapService.getLevelsByRoadmap(roadmapId);
      const keyboard = getLevelSelectionKeyboard(roadmapId, levels);
      
      const descriptions = levels.map(l => `**${l.name}**\n${l.description}`).join('\n\n');
      const message = `📚 ${roadmap.name} Roadmap\n\nSelect your learning level.\n\n${descriptions}`;

      await ctx.editMessageText(message, { ...keyboard, parse_mode: 'Markdown' });
      await ctx.answerCbQuery();
    } else if (target === 'level') {
      // Back from Module detail to Level modules list
      const roadmapId = parts[2];
      const levelId = parts[3];
      const roadmap = roadmapService.getRoadmapById(roadmapId);
      const modules = roadmapService.getModulesByLevel(roadmapId, levelId);
      const keyboard = getModulesKeyboard(roadmapId, modules);

      const message = `📚 ${roadmap.name} Roadmap\n\nChoose a module to begin learning.`;

      await ctx.editMessageText(message, keyboard);
      await ctx.answerCbQuery();
    }
  } catch (error) {
    await ctx.answerCbQuery('Error returning to menu.', { show_alert: true });
  }
};

export const handleLearn = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as any;
  if (!cbQuery || !cbQuery.data) return;

  const [, moduleId] = cbQuery.data.split(':');

  try {
    const chunks = contentService.getLessonChunks(moduleId);
    
    if (chunks.length === 0) {
      await ctx.answerCbQuery('Lesson content not found. Coming soon!', { show_alert: true });
      return;
    }

    await ctx.answerCbQuery('Loading lesson...');

    for (const chunk of chunks) {
      // Send each chunk sequentially as HTML
      await ctx.reply(chunk, { parse_mode: 'HTML' });
      // Small delay to ensure sequential delivery order in Telegram
      await new Promise(resolve => setTimeout(resolve, 300));
    }

  } catch (error) {
    console.error('Failed to load lesson:', error);
    await ctx.reply('Error loading lesson content.');
  }
};

export const handleQuiz = async (ctx: Context) => {
  await ctx.answerCbQuery('Quizzes coming soon!', { show_alert: true });
};
