# Backend Roadmap Specification

## Objective

Implement the Backend learning roadmap for DevPrep.

This document defines only the Backend roadmap.

Do not implement Frontend, Database, DevOps, or any future roadmap.

Only implement the Backend navigation and flow.

---

# User Flow

When a user starts the bot using

/start

the bot should display

🚀 Welcome to DevPrep

Choose a roadmap

🟢 Backend
🔵 Frontend
🟣 Database

Only Backend should be functional in Version 1.

Frontend and Database should display

"Coming Soon"

---

# Backend Roadmap

When the user selects

Backend

display the Backend modules using Telegram Inline Keyboard.

Modules

1. Node.js
2. Express.js
3. REST APIs
4. Authentication
5. Databases
6. MongoDB
7. PostgreSQL
8. Prisma ORM
9. Redis
10. Message Queues
11. WebSockets
12. File Storage
13. Docker
14. CI/CD
15. Scaling
16. Deployment

Modules should be displayed in the above order.

Each module should have its own callback action.

---

# Current Behaviour

When a user selects any module

Display

Module Name

Description

Estimated Topics

Estimated Learning Time

Buttons

📖 Learn

📝 Quiz

⬅ Back

The Learn and Quiz buttons are placeholders for now.

Do not implement lessons or quizzes yet.

---

# Navigation Rules

/start

↓

Roadmaps

↓

Backend

↓

Module

↓

Learn / Quiz

↓

Back

The Back button should always return to the previous menu.

Navigation should feel smooth and intuitive.

---

# Architecture Requirements

Do not hardcode menus inside handlers.

Create a dedicated Backend Roadmap service.

Separate

- Handlers
- Services
- Keyboards
- Constants

Follow the project architecture defined in PROJECT.md.

---

# Telegram UI

Use Telegram Inline Keyboards.

Do not use Reply Keyboards.

Messages should be clean and professional.

Example

🚀 Welcome to DevPrep

Choose your learning roadmap.

or

📚 Backend Roadmap

Choose a module to begin learning.

---

# Future Compatibility

The implementation should be generic.

Future roadmaps such as

Frontend

Database

DevOps

AI Engineering

should be addable without changing existing backend code.

Design the navigation so new roadmaps can be registered easily.

Avoid writing roadmap-specific logic inside handlers.

---

# Out of Scope

Do not implement

Lessons

Quizzes

Progress

Bookmarks

Database Content

Authentication

Payments

Admin Panel

Notifications

Only implement the roadmap navigation.