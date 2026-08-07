import dotenv from 'dotenv';

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL as string,
  BOT_TOKEN: process.env.BOT_TOKEN as string,
};

if (!env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}

if (!env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN is not defined in the environment variables');
}
