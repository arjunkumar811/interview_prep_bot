# Frontend Roadmap Specification

## Objective

Implement the Frontend learning roadmap for DevPrep.

This document defines only the Frontend roadmap.

Do not implement Backend, Database, DevOps, or any future roadmap.

Only implement the Frontend navigation and learning flow.

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

When the user selects

🔵 Frontend

display the Frontend roadmap.

---

# Frontend Roadmap

The roadmap is divided into two learning levels.

## 🟢 Beginner (10–12+ LPA)

Designed for entry-level frontend jobs, internships, and junior React developer roles.

Modules

1. HTML
2. CSS
3. JavaScript (ES6+)
4. TypeScript
5. Git & GitHub
6. React
7. React Router
8. Tailwind CSS
9. State Management
   - Context API
   - Zustand
   - Redux Toolkit
10. API Integration
    - Fetch API
    - Axios
11. Forms & Validation
    - React Hook Form
    - Zod
12. Authentication
    - JWT
    - OAuth
13. Testing
    - Vitest
    - Playwright
14. Next.js
15. Deployment
    - Vercel
    - Netlify

---

## 🔴 Advanced (15–30+ LPA)

Designed for experienced frontend engineers preparing for senior frontend interviews and production-scale applications.

Modules

1. Advanced JavaScript
   - Closures
   - Prototypes
   - Event Loop
   - Memory Management
   - Performance

2. Advanced TypeScript
   - Generics
   - Utility Types
   - Advanced Types
   - Type Inference
   - Declaration Files

3. Advanced React
   - Custom Hooks
   - React Internals
   - Rendering Lifecycle
   - Concurrent Features
   - Suspense
   - Error Boundaries
   - Memoization
   - Code Splitting

4. Advanced State Management
   - Context API
   - Zustand
   - Redux Toolkit
   - React Query (TanStack Query)

5. Performance Optimization
   - Lazy Loading
   - Memoization
   - Virtualization
   - Bundle Optimization
   - Tree Shaking

6. Advanced Next.js
   - App Router
   - Server Components
   - Client Components
   - SSR
   - SSG
   - ISR
   - Route Handlers
   - Middleware

7. Frontend Security
   - XSS
   - CSRF
   - Content Security Policy
   - Secure Authentication
   - Token Storage

8. System Design for Frontend
   - Folder Structure
   - Scalable Architecture
   - Component Design
   - Design Systems

9. Micro Frontends

10. Accessibility (a11y)

11. Internationalization (i18n)

12. Progressive Web Apps (PWA)

13. Advanced Animations
    - Framer Motion
    - GSAP

14. Advanced Testing
    - Unit Testing
    - Integration Testing
    - End-to-End Testing
    - Component Testing

15. CI/CD for Frontend

16. Monitoring & Analytics
    - Sentry
    - Vercel Analytics
    - Performance Monitoring

17. Production Deployment
    - Docker
    - CDN
    - Cloudflare
    - Reverse Proxy
    - Scaling

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

Frontend

↓

Select Level

↓

Select Module

↓

Learn / Quiz

↓

Back

The Back button should always return to the previous menu.

Navigation should be simple, intuitive, and consistent with the Backend roadmap.

---

# Architecture Requirements

Do not hardcode menus inside handlers.

Create a dedicated Frontend Roadmap service.

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

🎨 Frontend Roadmap

Select your learning level.

🟢 Beginner (10–12+ LPA)

🔴 Advanced (15–30+ LPA)

After selecting a level, display the corresponding modules.

---

# Future Compatibility

The implementation should be generic.

Future roadmaps such as

- Backend
- Database
- DevOps
- AI Engineering
- System Design
- DSA

should be addable without changing existing frontend code.

Avoid writing roadmap-specific logic inside handlers.

---

# Out of Scope

Do not implement

- Lessons
- Quizzes
- Progress Tracking
- Bookmarks
- Authentication Logic
- Payments
- Admin Panel
- Notifications

Only implement the roadmap navigation.