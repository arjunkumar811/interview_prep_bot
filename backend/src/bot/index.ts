import { Telegraf } from 'telegraf';
import { env } from '../config/env';
import {
  handleStart,
  handleRoadmapSelection,
  handleLevelSelection,
  handleModuleSelection,
  handleBack,
  handlePlaceholder,
} from '../handlers/roadmap.handlers';

export const bot = new Telegraf(env.BOT_TOKEN);

bot.start(handleStart);

bot.action(/^roadmap:.+/, handleRoadmapSelection);
bot.action(/^level:.+/, handleLevelSelection);
bot.action(/^module:.+/, handleModuleSelection);
bot.action(/^back:.+/, handleBack);
bot.action(/^placeholder:.+/, handlePlaceholder);

export const startBot = async () => {
  try {
    await bot.launch();
    console.log('Telegram bot started successfully');
  } catch (error) {
    console.error('Failed to start Telegram bot', error);
    process.exit(1);
  }
};
