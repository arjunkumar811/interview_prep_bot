import { Telegraf } from 'telegraf';
import { env } from '../config/env';
import {
  handleStart,
  handleRoadmapSelection,
  handleLevelSelection,
  handleModuleSelection,
  handleBack,
  handleLearn,
  handleQuiz,
} from '../handlers/roadmap.handlers';

export const bot = new Telegraf(env.BOT_TOKEN);

bot.start(handleStart);

bot.action(/^roadmap:.+/, handleRoadmapSelection);
bot.action(/^level:.+/, handleLevelSelection);
bot.action(/^module:.+/, handleModuleSelection);
bot.action(/^back:.+/, handleBack);
bot.action(/^learn:.+/, handleLearn);
bot.action(/^quiz:.+/, handleQuiz);
bot.action('restart', handleStart);

bot.hears(/restart/i, handleStart);
bot.command('restart', handleStart);

export const startBot = async () => {
  try {
    await bot.telegram.setMyCommands([
      { command: 'restart', description: 'Restart from the beginning' },
    ]);
    await bot.launch();
    console.log('Telegram bot started successfully');

    // Enable graceful stop to prevent 409 Conflict errors on reload
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  } catch (error) {
    console.error('Failed to start Telegram bot', error);
    process.exit(1);
  }
};
