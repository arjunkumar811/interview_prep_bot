1.Add all content  ✅
2.add all quize
3.do all this for databse

---

# Interview Prep Bot - Deployment Guide

This guide explains how to deploy the Telegram Bot to a production environment (like a VPS, Render, Railway, or Heroku).

## Prerequisites

Before deploying, ensure you have the following:
- **Node.js**: v18 or higher.
- **Database**: A PostgreSQL database (hosted locally or via services like Supabase/Neon).
- **Telegram Bot Token**: Acquired from [@BotFather](https://t.me/botfather).

## 1. Environment Variables

On your production server, create a `.env` file (or set these as environment variables in your hosting provider's dashboard):

```env
TELEGRAM_BOT_TOKEN="your_production_bot_token"
DATABASE_URL="postgresql://user:password@host:port/dbname"
```

## 2. Build the Application

The bot is written in TypeScript and needs to be compiled to JavaScript before running in production.

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
   *This will generate a `dist/` folder containing the compiled JavaScript.*

## 3. Database Migration

Before starting the bot, ensure the database schema is up to date:

```bash
# Inside the backend/ directory
npx prisma migrate deploy
```
*(If you haven't created formal migrations yet, you can use `npx prisma db push` to force the schema sync, though `migrate deploy` is recommended for production).*

## 4. Starting the Bot

Once built and the database is migrated, you can start the bot using:

```bash
npm run start
```
*(This command runs `node dist/server.js` as defined in `package.json`).*

## Recommended: Using Process Managers (PM2)
If you are deploying on a raw VPS (Ubuntu, Debian, etc.), it is highly recommended to use **PM2** to keep the bot alive in the background and restart it on crashes.

```bash
# Install PM2 globally
npm install -g pm2

# Start the bot
pm2 start dist/server.js --name "interview-bot"

# Save the PM2 process list to restart on server reboot
pm2 save
pm2 startup
```

## Deploying on PaaS (Render / Railway)

If deploying to a Platform as a Service (like Render or Railway):
1. **Build Command**: `cd backend && pnpm install && npm run build`
2. **Start Command**: `cd backend && npm run start`
3. Don't forget to add your `.env` variables into the platform's environment settings!
