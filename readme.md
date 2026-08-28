<div align="center">
  <h1>🚀 Interview Prep Bot</h1>
  <p>Your ultimate companion for cracking software engineering interviews!</p>
  
  [![Telegram Bot](https://img.shields.io/badge/Chat_on-Telegram-blue?style=for-the-badge&logo=telegram)](https://t.me/interviewprepp_bot)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]()
  [![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)]()
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)]()
</div>

---

## 🎯 Try it out right now!
Click the link below to start talking to the bot on Telegram and level up your skills today:

👉 **[Start Preparing with @interviewprepp_bot](https://t.me/interviewprepp_bot)** 👈

---

## ✨ Features
- **Interactive Quizzes**: Test your knowledge on Frontend, Backend, Systems Design, and more.
- **Detailed Lessons**: Get bite-sized explanations tailored for quick consumption.
- **Progress Tracking**: Picks up right where you left off.
- **Optimized for Scale**: In-memory caching and non-blocking I/O ensures instant response times.

---

## 🛠️ Built With
- **Node.js & TypeScript**
- **Telegraf** (Telegram Bot API)
- **Prisma ORM**
- **PostgreSQL**

---

## 🚀 Deployment Guide

This bot is fully equipped to run in production on your favorite cloud provider. 

### 1. Environment Variables
Create a `.env` file on your production server:
```env
TELEGRAM_BOT_TOKEN="your_production_bot_token"
DATABASE_URL="postgresql://user:password@host:port/dbname"
```

### 2. Build & Deploy
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `pnpm install`
3. Build the TypeScript code: `npm run build`
4. Sync the database: `npx prisma db push`
5. Start the bot: `npm run start`

### Hosting on Render / Railway
If you are deploying to a PaaS like Render, configure your service like this:
- **Root Directory**: `backend`
- **Build Command**: `pnpm install && npm run build && npx prisma db push --accept-data-loss`
- **Start Command**: `npm run start`
