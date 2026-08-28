import { Context } from 'telegraf';
import { RoadmapNavigationService } from '../services/roadmapNavigation.service';
import { contentService } from '../services/content.service';
import { quizService } from '../services/quiz.service';
import {
  getRoadmapSelectionKeyboard,
  getLevelSelectionKeyboard,
  getModulesKeyboard,
  getModuleDetailKeyboard,
  getLessonCompletionKeyboard,
  getErrorKeyboard,
  getQuizCompletionKeyboard,
} from '../keyboards/roadmap.keyboards';

const roadmapService = new RoadmapNavigationService();
import prisma from '../prisma/client';

export const sendModuleDetail = async (ctx: Context, moduleId: string, isCallback: boolean = false) => {
  try {
    const moduleInfo = roadmapService.getModuleDetails(moduleId);
    const keyboard = getModuleDetailKeyboard(moduleId, moduleInfo.roadmapId, moduleInfo.levelId);
    
    const message = `**${moduleInfo.name}**\n\n${moduleInfo.description}\n\nEstimated Topics: ${moduleInfo.estimatedTopics}\nEstimated Learning Time: ${moduleInfo.estimatedTime}`;

    if (isCallback && ctx.callbackQuery) {
      await ctx.editMessageText(message, { ...keyboard, parse_mode: 'Markdown' });
      await ctx.answerCbQuery();
    } else {
      await ctx.reply(message, { ...keyboard, parse_mode: 'Markdown' });
    }

    const telegramId = ctx.from?.id?.toString();
    if (telegramId) {
      await prisma.user.upsert({
        where: { telegramId },
        update: { lastModuleId: moduleId },
        create: { 
          telegramId, 
          lastModuleId: moduleId,
          username: ctx.from?.username,
          firstName: ctx.from?.first_name,
          lastName: ctx.from?.last_name
        }
      });
    }
  } catch (error) {
    console.error('Error loading module:', error);
    await ctx.reply('Error loading module.', getErrorKeyboard());
  }
};

export const handleStart = async (ctx: Context) => {
  const telegramId = ctx.from?.id?.toString();
  if (telegramId) {
    try {
      // Always reset progress on /start to begin from the main menu
      await prisma.user.updateMany({
        where: { telegramId },
        data: { lastModuleId: null }
      });
    } catch (e) {
      console.error('DB Error in handleStart', e);
    }
  }

  const roadmaps = roadmapService.getRoadmaps();
  const keyboard = getRoadmapSelectionKeyboard(roadmaps);
  const message = '🚀 Welcome to DevPrep\n\nChoose your learning roadmap.\n\n💡 _Tip: You can type "restart" at any time to return to this menu._';

  await ctx.reply(message, keyboard);
};

export const handleRestart = async (ctx: Context) => {
  const telegramId = ctx.from?.id?.toString();
  if (telegramId) {
    try {
      await prisma.user.updateMany({
        where: { telegramId },
        data: { lastModuleId: null }
      });
    } catch(e) {
      console.error('DB Error on restart', e);
    }
  }

  const roadmaps = roadmapService.getRoadmaps();
  const keyboard = getRoadmapSelectionKeyboard(roadmaps);
  const message = '🚀 Welcome to DevPrep\n\nChoose your learning roadmap.\n\n💡 _Tip: You can type "restart" at any time to return to this menu._';

  if (ctx.callbackQuery) {
    try {
      await ctx.editMessageText(message, keyboard);
      await ctx.answerCbQuery();
    } catch (e) {
      console.error('Error answering cb query on restart:', e);
    }
  } else {
    await ctx.reply(message, keyboard);
  }
};

export const handleRoadmapSelection = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as { data?: string };
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
  } catch {
    await ctx.reply('Error loading roadmap levels.', getErrorKeyboard());
  }
};

export const handleLevelSelection = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as { data?: string };
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
  } catch {
    await ctx.reply('Error loading modules.', getErrorKeyboard());
  }
};

export const handleModuleSelection = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as { data?: string };
  if (!cbQuery || !cbQuery.data) return;

  const [, moduleId] = cbQuery.data.split(':');
  await sendModuleDetail(ctx, moduleId, true);
};

export const handleBack = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as { data?: string };
  if (!cbQuery || !cbQuery.data) return;

  const parts = cbQuery.data.split(':');
  const target = parts[1];

  try {
    if (target === 'roadmaps') {
      const roadmaps = roadmapService.getRoadmaps();
      const keyboard = getRoadmapSelectionKeyboard(roadmaps);
      const message = '🚀 Welcome to DevPrep\n\nChoose your learning roadmap.\n\n💡 _Tip: You can type "restart" at any time to return to this menu._';

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
  } catch {
    await ctx.reply('Error returning to menu.', getErrorKeyboard());
  }
};

export const handleLearn = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as { data?: string };
  if (!cbQuery || !cbQuery.data) return;

  const [, moduleId] = cbQuery.data.split(':');

  try {
    const chunks = await contentService.getLessonChunks(moduleId);

    if (chunks.length === 0) {
      await ctx.reply('Lesson content not found. Coming soon!', getErrorKeyboard());
      return;
    }

    await ctx.answerCbQuery('Loading lesson...');

    for (const chunk of chunks) {
      await ctx.reply(chunk, { parse_mode: 'HTML' });
      // Small delay before starting the next chunk (if any)
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Show completion menu with next module
    const moduleInfo = roadmapService.getModuleDetails(moduleId);
    const siblings = roadmapService.getModulesByLevel(moduleInfo.roadmapId, moduleInfo.levelId);
    const currentIndex = siblings.findIndex(m => m.id === moduleId);
    const nextModule = currentIndex >= 0 && currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : undefined;

    const endKeyboard = getLessonCompletionKeyboard(moduleId, moduleInfo.roadmapId, moduleInfo.levelId, nextModule);
    await ctx.reply('🎉 <b>Lesson Complete!</b> What would you like to do next?', { ...endKeyboard, parse_mode: 'HTML' });

  } catch (error) {
    console.error('Failed to load lesson:', error);
    await ctx.reply('Error loading lesson content.', getErrorKeyboard());
  }
};

export const handleQuiz = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as { data?: string };
  if (!cbQuery || !cbQuery.data) return;

  const [, moduleId] = cbQuery.data.split(':');

  try {
    const questions = await quizService.getQuizByModuleId(moduleId);

    if (questions.length === 0) {
      await ctx.reply('Quiz coming soon for this topic!', getErrorKeyboard());
      return;
    }

    await ctx.answerCbQuery('Starting Quiz...');
    await ctx.reply(`🧠 Starting Quiz... Good luck!`);

    for (const q of questions) {
      const safeOptions = q.options.map((opt: string) => 
        opt.length > 100 ? opt.substring(0, 97) + '...' : opt
      );
      const safeExplanation = q.explanation && q.explanation.length > 200 
        ? q.explanation.substring(0, 197) + '...' 
        : q.explanation;

      await ctx.replyWithQuiz(q.question, safeOptions, {
        correct_option_id: q.correctOptionId,
        explanation: safeExplanation,
        is_anonymous: false
      });
      // Delay to ensure sequential delivery
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Send the completion keyboard
    const moduleInfo = roadmapService.getModuleDetails(moduleId);
    const siblings = roadmapService.getModulesByLevel(moduleInfo.roadmapId, moduleInfo.levelId);
    const currentIndex = siblings.findIndex(m => m.id === moduleId);
    const nextModule = currentIndex >= 0 && currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : undefined;
    
    const endKeyboard = getQuizCompletionKeyboard(moduleId, moduleInfo.roadmapId, moduleInfo.levelId, nextModule);
    
    // Slight delay so the complete message appears after polls
    await new Promise(resolve => setTimeout(resolve, 200));
    await ctx.reply('✅ Quiz Finished! What would you like to do next?', endKeyboard);

  } catch (error) {
    console.error('Failed to load quiz:', error);
    await ctx.reply('Error loading the quiz.', getErrorKeyboard());
  }
};

