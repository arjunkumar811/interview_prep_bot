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

display the Backend roadmap using Telegram Inline Keyboard.

The roadmap is divided into two learning levels.

## 🟢 Beginner (0 → 1)

These topics are designed for developers who are new to backend development.

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
17. Zod
18. Monorepos & Turborepo

---

## 🔴 Advanced (1 → 100)

These modules are designed for developers preparing for senior backend engineering interviews and production-scale systems.

Modules

1. Advanced Backend Communication
2. Message Queues & Pub/Sub
3. Proxies & Reverse Proxies
4. Load Balancers
5. Redis Deep Dive
6. Kafka Deep Dive
7. Common Design Patterns in JavaScript
8. Advanced Database Concepts
   - Indexing
   - Normalization
   - Query Optimization
9. Rate Limiting
10. Captchas & DDoS Protection
11. Sharding
12. Replication
13. Resiliency & Fault Tolerance
14. Horizontal Scaling
15. Vertical Scaling
16. Polling
17. WebSockets Deep Dive
18. gRPC
19. Capacity Estimation
20. CAP Theorem
21. Testing Node.js Applications
22. Real-time Communication
23. WebRTC Fundamentals

---

# Current Behaviour

When a user selects any module

Display

- Module Name
- Description
- Estimated Topics
- Estimated Learning Time

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

Select Level

↓

Select Module

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

Select your learning level.

🟢 Beginner (0 → 1) 

🔴 Advanced (1 → 100)

After selecting a level, display the corresponding modules.

---

# Future Compatibility

The implementation should be generic.

Future roadmaps such as

- Frontend
- Database
- DevOps
- AI Engineering
- System Design
- DSA

should be addable without changing existing backend code.

Design the navigation so new roadmaps can be registered easily.

Avoid writing roadmap-specific logic inside handlers.

---

# Out of Scope

Do not implement

- Lessons
- Quizzes
- Progress Tracking
- Bookmarks
- Database Content
- Authentication Logic
- Payments
- Admin Panel
- Notifications

Only implement the roadmap navigation.