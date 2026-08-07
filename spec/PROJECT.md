# DevPrep - Project Specification

## Overview

DevPrep is a production-ready Telegram-based learning platform designed for software engineers.

The platform provides structured learning roadmaps, interactive lessons, quizzes, interview preparation, and progress tracking entirely inside Telegram.

The goal is to create a scalable learning platform that can later expand into a Web application and Mobile application without changing the backend architecture.

This repository contains only the backend and Telegram bot implementation.

---

# Core Objectives

- Build a modular and scalable backend.
- Follow Clean Architecture and SOLID principles.
- Separate business logic from Telegram-specific logic.
- Design the system for long-term maintainability.
- Support thousands of lessons and quizzes.
- Support future premium features without architectural changes.

---

# Tech Stack

## Runtime

- Node.js (Latest LTS)

## Language

- TypeScript

## Package Manager

- pnpm

## Framework

- Express.js

## Telegram Bot Framework

- Telegraf

## Database

- PostgreSQL

## ORM

- Prisma

## Validation

- Zod

## Environment Management

- dotenv

## Logging

- Pino


## Linting

- ESLint

## Git Hooks

- Husky
- lint-staged

## API Testing

- Bruno or Postman


# Development Principles

The project must follow the following principles.

- Clean Architecture
- SOLID Principles
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple)
- Separation of Concerns
- Modular Design
- Production Ready Code
- Strong Type Safety

---

# High-Level Architecture

Telegram User

↓

Telegram Bot

↓

Telegraf

↓

Controllers

↓

Services

↓

Repositories

↓

Prisma ORM

↓

PostgreSQL

Business logic must never depend directly on Telegram.

Telegram should only be a delivery interface.

---

# Project Scope

Version 1 focuses on learning.

Supported Roadmaps

- Backend
- Frontend
- Database
- DevOps
- System Design
- AI Engineering
- Data Structures & Algorithms

Each roadmap contains

Roadmap

↓

Modules

↓

Topics

↓

Lessons

↓

Quiz

↓

Progress

---

# Backend Responsibilities

The backend is responsible for

- User Management
- Roadmap Management
- Lesson Management
- Quiz Management
- Progress Tracking
- Bookmark Management
- Search
- Statistics

The backend should expose reusable services that can later be consumed by

- Telegram Bot
- React Web App
- Mobile App
- Admin Dashboard

without changing the business logic.

---

# Code Standards

The codebase must follow these standards.

- Use TypeScript everywhere.
- Avoid using any.
- Keep functions small and focused.
- Prefer composition over inheritance.
- Use dependency injection where appropriate.
- Avoid duplicated logic.
- Every module must have a single responsibility.
- Never mix business logic inside Telegram handlers.
- Never access Prisma directly from handlers.
- Keep controllers lightweight.
- Place all business logic inside services.
- Repositories are responsible only for database access.

---

# Error Handling

- Centralized error handling.
- Consistent API responses.
- Meaningful error messages.
- Proper logging.
- Never expose internal errors to users.

---

# Security

- Validate all incoming data using Zod.
- Never trust client input.
- Store secrets using environment variables.
- Never commit secrets to Git.
- Follow least-privilege principles.

---

# Performance Goals

The application should

- Handle thousands of concurrent Telegram users.
- Minimize unnecessary database queries.
- Be optimized for future caching.
- Be horizontally scalable.
- Support future Redis integration.

---

# Success Criteria

The project will be considered successful if

- The architecture remains clean and maintainable.
- New features can be added without major refactoring.
- Business logic is reusable across multiple clients.
- The system is production-ready.
- The codebase is easy for new developers to understand and contribute to.