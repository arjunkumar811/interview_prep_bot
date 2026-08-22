import { Context } from 'telegraf';
import { RoadmapNavigationService } from '../services/roadmapNavigation.service';
import { contentService } from '../services/content.service';
import {
  getRoadmapSelectionKeyboard,
  getLevelSelectionKeyboard,
  getModulesKeyboard,
  getModuleDetailKeyboard,
  getLessonCompletionKeyboard,
  getErrorKeyboard,
} from '../keyboards/roadmap.keyboards';

const roadmapService = new RoadmapNavigationService();

export const handleStart = async (ctx: Context) => {
  const roadmaps = roadmapService.getRoadmaps();
  const keyboard = getRoadmapSelectionKeyboard(roadmaps);
  const message = '🚀 Welcome to DevPrep\n\nChoose your learning roadmap.\n\n💡 _Tip: You can type "restart" at any time to return to this menu._';

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
    await ctx.reply('Error loading roadmap levels.', getErrorKeyboard());
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
    await ctx.reply('Error loading modules.', getErrorKeyboard());
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
    await ctx.reply('Error loading module.', getErrorKeyboard());
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
  } catch (error) {
    await ctx.reply('Error returning to menu.', getErrorKeyboard());
  }
};

export const handleLearn = async (ctx: Context) => {
  const cbQuery = ctx.callbackQuery as any;
  if (!cbQuery || !cbQuery.data) return;

  const [, moduleId] = cbQuery.data.split(':');

  try {
    const chunks = contentService.getLessonChunks(moduleId);

    if (chunks.length === 0) {
      await ctx.reply('Lesson content not found. Coming soon!', getErrorKeyboard());
      return;
    }

    await ctx.answerCbQuery('Loading lesson...');

    for (const chunk of chunks) {
      // Stream each chunk to simulate ChatGPT typing effect
      await streamHtmlMessage(ctx, chunk);
      // Small delay before starting the next chunk (if any)
      await new Promise(resolve => setTimeout(resolve, 1000));
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
  await ctx.reply('Quizzes coming soon!', getErrorKeyboard());
};

async function streamHtmlMessage(ctx: any, html: string) {
  const tokens = [];
  const regex = /(<[^>]+>)|([^<]+)/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    tokens.push(match[0]);
  }

  let currentText = '';
  const openTags: string[] = [];
  let messageId: number | null = null;

  let lastEditTime = 0;
  let pendingUpdate = false;

  const sendOrUpdate = async (isFinal = false) => {
    let validHtml = currentText;
    for (let i = openTags.length - 1; i >= 0; i--) {
      validHtml += `</${openTags[i]}>`;
    }

    const now = Date.now();
    if (!isFinal && now - lastEditTime < 800) {
      pendingUpdate = true;
      return;
    }

    try {
      if (!messageId) {
        const msg = await ctx.reply(validHtml + (isFinal ? '' : ' ✍️'), { parse_mode: 'HTML' });
        messageId = msg.message_id;
      } else {
        await ctx.telegram.editMessageText(
          ctx.chat.id,
          messageId,
          undefined,
          validHtml + (isFinal ? '' : ' ✍️'),
          { parse_mode: 'HTML' }
        );
      }
      lastEditTime = Date.now();
      pendingUpdate = false;
    } catch (e: any) {
      if (e.description && e.description.includes('is not modified')) {
        // ignore
      } else {
        console.error('Error updating message:', e);
      }
    }
  };

  for (const token of tokens) {
    if (token.startsWith('<')) {
      currentText += token;
      if (token.startsWith('</')) {
        const matchToken = token.match(/<\/([a-zA-Z0-9]+)>/);
        if (matchToken) {
          const tagName = matchToken[1];
          const idx = openTags.lastIndexOf(tagName);
          if (idx !== -1) openTags.splice(idx, 1);
        }
      } else {
        const matchToken = token.match(/<([a-zA-Z0-9]+)/);
        if (matchToken) {
          openTags.push(matchToken[1]);
        }
      }
    } else {
      for (let i = 0; i < token.length; i++) {
        currentText += token[i];
        await sendOrUpdate(false);
        // 10ms per character gives a smooth, continuous typewriter effect
        await new Promise(r => setTimeout(r, 10)); 
      }
    }
  }

  if (pendingUpdate && messageId) {
    await sendOrUpdate(true);
  } else if (!messageId) {
    await sendOrUpdate(true);
  }
}
