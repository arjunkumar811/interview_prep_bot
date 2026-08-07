import { Context } from 'telegraf';
import { RoadmapNavigationService } from '../services/roadmapNavigation.service';
import {
  getRoadmapSelectionKeyboard,
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
  // We use type assertion since we know it's a callback query with data
  const cbQuery = ctx.callbackQuery as any;
  if (!cbQuery || !cbQuery.data) return;

  const [, roadmapId] = cbQuery.data.split(':');
  
  try {
    const roadmap = roadmapService.getRoadmapById(roadmapId);

    if (!roadmap.available) {
      await ctx.answerCbQuery('Coming Soon', { show_alert: true });
      return;
    }

    const modules = roadmapService.getModulesByRoadmap(roadmapId);
    const keyboard = getModulesKeyboard(modules);
    
    const message = `📚 ${roadmap.name} Roadmap\n\nChoose a module to begin learning.`;

    await ctx.editMessageText(message, keyboard);
    await ctx.answerCbQuery();
  } catch (error) {
    await ctx.answerCbQuery('Error loading roadmap.', { show_alert: true });
  }
};

export const handleModuleSelection = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as any;
  if (!cbQuery || !cbQuery.data) return;

  const [, moduleId] = cbQuery.data.split(':');

  try {
    const moduleInfo = roadmapService.getModuleDetails(moduleId);
    const keyboard = getModuleDetailKeyboard(moduleId, moduleInfo.roadmapId);

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
      const roadmapId = parts[2];
      const roadmap = roadmapService.getRoadmapById(roadmapId);
      const modules = roadmapService.getModulesByRoadmap(roadmapId);
      const keyboard = getModulesKeyboard(modules);
      
      const message = `📚 ${roadmap.name} Roadmap\n\nChoose a module to begin learning.`;

      await ctx.editMessageText(message, keyboard);
      await ctx.answerCbQuery();
    }
  } catch (error) {
    await ctx.answerCbQuery('Error returning to menu.', { show_alert: true });
  }
};

export const handlePlaceholder = async (ctx: Context) => {
  await ctx.answerCbQuery('Coming soon', { show_alert: true });
};
