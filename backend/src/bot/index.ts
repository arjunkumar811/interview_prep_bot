import { Telegraf } from 'telegraf';
import { env } from '../config/env';

export const bot = new Telegraf(env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome to DevPrep!');
});

bot.help((ctx) => {
  ctx.reply('Send me a message and I will echo it back.');
});

export const startBot = async () => {
  try {
    await bot.launch();
    console.log('Telegram bot started successfully');
  } catch (error) {
    console.error('Failed to start Telegram bot', error);
    process.exit(1);
  }
};
