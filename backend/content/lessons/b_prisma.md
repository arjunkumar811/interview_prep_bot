⏳ **Estimated Learning Time:** 10-15 min

---

# Prisma ORM Revision

## 1. What is Prisma?

**Prisma** is a **next-generation ORM (Object Relational Mapper)** for Node.js and TypeScript.

It lets you interact with SQL databases using JavaScript/TypeScript instead of writing raw SQL.

Instead of

```sql
SELECT * FROM users;
```

You write

```ts
const users = await prisma.user.findMany();
```

---

## 2. Why Prisma?

Without Prisma

```
Node.js
   ↓
Raw SQL
   ↓
Database
```

Example

```ts
await pool.query("SELECT * FROM users");
```

Problems

* SQL injection risk
* Hard to maintain
* No autocomplete
* Manual joins

---

With Prisma

```
Node.js
   ↓
Prisma Client
   ↓
Database
```

Benefits

* Type-safe
* Auto-completion
* Easy migrations
* Cleaner code
* Prevents many SQL mistakes

---

## 3. Supported Databases

* PostgreSQL ✅
* MySQL
* SQLite
* SQL Server
* CockroachDB
* MongoDB (special support)

---

## 4. Installation

```bash
npm install prisma
npm install @prisma/client
```

Initialize Prisma

```bash
npx prisma init
```

Creates

```
prisma/
    schema.prisma

.env
```

---

## 5. Prisma Folder Structure

```
project/

prisma/
   schema.prisma
   migrations/

node_modules/

.env
```

---

## 6. DATABASE_URL

```
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

Prisma reads this automatically.

---

# schema.prisma

This is the heart of Prisma.

Example

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

---

## 7. Model

A model represents a table.

```prisma
model User {
  id    Int @id @default(autoincrement())
  name  String
  email String @unique
}
```

Database

| id | name | email |
| -- | ---- | ----- |

---

## 8. Data Types

```prisma
String
Int
Boolean
Float
DateTime
Json
Bytes
Decimal
```

Example

```prisma
age Int
```

---

## 9. Attributes

### Primary Key

```prisma
@id
```

---

Auto Increment

```prisma
@default(autoincrement())
```

---

Unique

```prisma
@unique
```

---

Default Value

```prisma
@default(true)
```

---

Updated Automatically

```prisma
@updatedAt
```

---

Created Automatically

```prisma
@default(now())
```

---

## Example

```prisma
model User {

 id Int @id @default(autoincrement())

 email String @unique

 createdAt DateTime @default(now())

 updatedAt DateTime @updatedAt

}
```

---

# 10. Migration

Generate migration

```bash
npx prisma migrate dev --name init
```

This

* Creates tables
* Generates Prisma Client
* Updates database

---

## 11. Generate Client

```bash
npx prisma generate
```

Run this after changing the schema if migrations aren't generating the client automatically.

---

## 12. Prisma Client

Import

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
```

Usually create **one shared instance** and reuse it throughout the app.

---

# CRUD Operations

---

## Create

```ts
await prisma.user.create({
  data: {
    name: "Arjun",
    email: "arjun@gmail.com",
  },
});
```

---

## Find All

```ts
const users = await prisma.user.findMany();
```

---

## Find One

```ts
const user = await prisma.user.findUnique({
  where: {
    id: 1,
  },
});
```

---

Find First

```ts
await prisma.user.findFirst({
  where: {
    age: {
      gt: 18,
    },
  },
});
```

---

## Update

```ts
await prisma.user.update({
  where: {
    id: 1,
  },
  data: {
    name: "Rahul",
  },
});
```

---

## Delete

```ts
await prisma.user.delete({
  where: {
    id: 1,
  },
});
```

---

# Filtering

```ts
await prisma.user.findMany({
  where: {
    age: 20,
  },
});
```

---

Greater Than

```ts
age: {
  gt: 18,
}
```

---

Less Than

```ts
lt
```

---

Greater or Equal

```ts
gte
```

---

Less or Equal

```ts
lte
```

---

Contains

```ts
name: {
  contains: "ar"
}
```

---

Starts With

```ts
startsWith
```

---

Ends With

```ts
endsWith
```

---

# Sorting

```ts
orderBy: {
   age: "desc"
}
```

or

```ts
orderBy: {
   name: "asc"
}
```

---

# Pagination

Skip

```ts
skip: 20
```

Take

```ts
take: 10
```

Example

```ts
await prisma.user.findMany({
  skip: 20,
  take: 10,
});
```

---

# Select

Only return required fields.

```ts
await prisma.user.findMany({
  select: {
    name: true,
    email: true,
  },
});
```

---

# Include

Used for relations.

```ts
include: {
   posts: true
}
```

---

# Relations

One User

Many Posts

```prisma
model User {

 id Int @id @default(autoincrement())

 name String

 posts Post[]

}

model Post{

 id Int @id @default(autoincrement())

 title String

 author User @relation(fields:[authorId], references:[id])

 authorId Int

}
```

---

Query

```ts
await prisma.user.findMany({
  include: {
    posts: true,
  },
});
```

---

# Transactions

Execute multiple operations atomically.

```ts
await prisma.$transaction([
  prisma.user.create(...),
  prisma.post.create(...),
]);
```

---

# Raw SQL

Sometimes needed.

```ts
await prisma.$queryRaw`SELECT * FROM User`;
```

---

# Seed Data

Example

```ts
await prisma.user.create({
  data: {
    name: "Admin",
    email: "admin@gmail.com",
  },
});
```

---

# Prisma vs Mongoose

| Prisma                    | Mongoose                |
| ------------------------- | ----------------------- |
| SQL                       | MongoDB                 |
| Schema in `schema.prisma` | Schema in JS/TS         |
| Type-safe                 | Less type-safe          |
| Uses migrations           | No migrations           |
| Strong TypeScript support | Good TypeScript support |

---

# Common Interview Questions

### Q1. What is Prisma?

A type-safe ORM for Node.js and TypeScript that simplifies database access and supports SQL databases (and MongoDB).

---

### Q2. Difference between Prisma and ORM?

Prisma **is an ORM**. It maps database tables to objects and generates a type-safe client.

---

### Q3. What is Prisma Client?

A generated JavaScript/TypeScript library used to perform database operations.

---

### Q4. What is `schema.prisma`?

The configuration file where you define:

* Database connection (`datasource`)
* Client generation (`generator`)
* Models (tables)

---

### Q5. What does `prisma migrate dev` do?

* Creates migration files
* Applies schema changes to the database
* Regenerates the Prisma Client

---

### Q6. Difference between `findUnique()` and `findFirst()`?

| `findUnique()`                             | `findFirst()`                     |
| ------------------------------------------ | --------------------------------- |
| Requires a unique field (`@id`, `@unique`) | Can search using any filter       |
| Returns at most one matching unique record | Returns the first matching record |

---

### Q7. Difference between `select` and `include`?

* **`select`**: Choose specific fields to return.
* **`include`**: Include related records (relations).

---

### Q8. Why use Prisma?

* Type safety
* Autocomplete
* Cleaner code
* Easy migrations
* Reduced SQL errors
* Excellent TypeScript support

---

## 🚀 Rapid-Fire Quiz (Answer without looking)

1. What command initializes Prisma?
2. Which file defines your database models?
3. What does `@id` do?
4. Difference between `findUnique()` and `findFirst()`?
5. What is the difference between `select` and `include`?
6. Which command creates and applies migrations?
7. What does `@updatedAt` do?
8. How do you fetch all users?
9. What is `$transaction()` used for?
10. Why is Prisma considered type-safe?