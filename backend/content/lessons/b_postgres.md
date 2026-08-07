⏳ **Estimated Learning Time:** 10-15 min

# PostgreSQL Revision (Interview Guide)

## 1. What is PostgreSQL?

PostgreSQL (often called Postgres) is an open-source Relational Database Management System (RDBMS).

It stores data in tables consisting of rows and columns.

Example:

Users Table

| id | name  | email             |
| -- | ----- | ----------------- |
| 1  | Arjun | arjun@gmail.com |
| 2  | Rahul | rahul@gmail.com |

Think of it like an Excel sheet, but much more powerful.

---

## 2. Why PostgreSQL?

Advantages

* Open Source
* ACID compliant
* Fast
* Secure
* Supports relationships
* Supports transactions
* JSON support
* Used by companies like Instagram, Discord, Reddit

---

## 3. SQL vs PostgreSQL

**SQL**

A language used to communicate with databases.

Example

```sql
SELECT * FROM users;
```

**PostgreSQL**

A database that understands SQL.

Think of it like

```
SQL = English Language

PostgreSQL = Person who understands English
```

---

## 4. Database Structure

```
Database

   ↓

Tables

   ↓

Rows

   ↓

Columns
```

Example

**Database**

College

**Table**

Students

**Columns**

id, name, email, age

**Rows**

`1 Arjun arjun@gmail.com 20`

---

## 5. Data Types

**Integer**
`age INT`

**String**
`name VARCHAR(100)`

**Text**
`description TEXT`

**Boolean**
`isAdmin BOOLEAN`

**Date**
`createdAt DATE`

**Timestamp**
`createdAt TIMESTAMP`

**Decimal**
`price DECIMAL(10,2)`

---

## 6. Creating a Database

```sql
CREATE DATABASE college;
```

Use database

```sql
\c college
```

---

## 7. Create Table

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);
```

---

## 8. SERIAL

Automatically increments.

1
2
3
4
5

Instead of manually writing IDs.

---

## 9. Primary Key

Uniquely identifies each row.

Cannot repeat.

Example

✅

1
2
3

❌

1
1
2

---

## 10. Insert Data

```sql
INSERT INTO users(name,email,age)
VALUES
('Arjun','arjun@gmail.com',20);
```

---

## 11. Read Data

All users

```sql
SELECT * FROM users;
```

Only name

```sql
SELECT name FROM users;
```

---

## 12. WHERE

Filter rows.

```sql
SELECT *
FROM users
WHERE age > 18;
```

---

## 13. UPDATE

```sql
UPDATE users
SET age = 21
WHERE id = 1;
```

---

## 14. DELETE

```sql
DELETE FROM users
WHERE id = 1;
```

---

## 15. ORDER BY

Ascending

```sql
SELECT *
FROM users
ORDER BY age;
```

Descending

```sql
SELECT *
FROM users
ORDER BY age DESC;
```

---

## 16. LIMIT

```sql
SELECT *
FROM users
LIMIT 5;
```

Returns only 5 rows.

---

## 17. Constraints

**NOT NULL**
`name VARCHAR(100) NOT NULL`
Cannot be empty.

**UNIQUE**
`email VARCHAR(100) UNIQUE`
No duplicate emails.

**DEFAULT**
`isAdmin BOOLEAN DEFAULT FALSE`

**CHECK**
`age INT CHECK(age > 18)`

**PRIMARY KEY**
Unique identifier.

**FOREIGN KEY**
Connects two tables.

---

## 18. Relationships

Suppose

Users

| id | name  |
| -- | ----- |
| 1  | Arjun |

Orders

| id | user_id |
| -- | ------- |
| 5  | 1       |

Here

`Orders.user_id`

references

`Users.id`

This is a **Foreign Key**.

---

## 19. One-to-One

```
User

↓

Profile
```

One user

One profile

---

## 20. One-to-Many

```
User

↓

Posts
```

One user

Many posts

---

## 21. Many-to-Many

```
Students

↓

Courses
```

One student
Many courses

One course
Many students

Need a junction table.

`student_courses`

---

## 22. JOIN

**INNER JOIN**

Returns matching rows.

```sql
SELECT users.name, orders.id
FROM users
JOIN orders
ON users.id = orders.user_id;
```

**LEFT JOIN**

Returns all users. Even if no orders exist.

**RIGHT JOIN**

Returns all orders. Even if user doesn't exist.

**FULL JOIN**

Returns everything.

---

## 23. Aggregate Functions

Count

```sql
SELECT COUNT(*) FROM users;
```

Average

```sql
SELECT AVG(age) FROM users;
```

Maximum

```sql
SELECT MAX(age) FROM users;
```

Minimum

```sql
SELECT MIN(age) FROM users;
```

Sum

```sql
SELECT SUM(age) FROM users;
```

---

## 24. GROUP BY

Find users in each city.

```sql
SELECT city,
COUNT(*)
FROM users
GROUP BY city;
```

---

## 25. HAVING

Filter grouped data.

```sql
SELECT city,
COUNT(*)
FROM users
GROUP BY city
HAVING COUNT(*) > 5;
```

---

## 26. Index

**Without Index**

100000 rows

↓

Checks every row
Slow.

**With Index**

Uses shortcut

↓

Fast lookup

Create

```sql
CREATE INDEX idx_email
ON users(email);
```

---

## 27. Transactions

A transaction is a group of queries that either all succeed or all fail.

Example: Bank Transfer

Arjun → Rahul

Subtract ₹1000

Add ₹1000

If one step fails, rollback everything.

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;
```

Rollback

```sql
ROLLBACK;
```

---

## 28. ACID Properties

**A — Atomicity**
Everything happens or nothing happens.

**C — Consistency**
Database always stays valid.

**I — Isolation**
Multiple transactions don't interfere with each other.

**D — Durability**
Once committed, data is permanently saved.

---

## 29. Normalization

Removes duplicate data.

Bad

```
User

Laptop1
Laptop2
Laptop3
```

Good

Users
`1 Arjun`

Orders
`Laptop1`
`Laptop2`
`Laptop3`

Connected using foreign keys.

---

## 30. PostgreSQL vs MongoDB

| PostgreSQL | MongoDB |
| --- | --- |
| Relational | NoSQL |
| Tables | Collections |
| Rows | Documents |
| Fixed Schema | Flexible Schema |
| SQL | BSON/JSON |
| Strong relationships | Embedded/Referenced documents |
| Best for banking, ERP | Best for social media, chat, CMS |

---

## 31. PostgreSQL with Prisma

Schema

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

Generate client

```bash
npx prisma generate
```

Run migration

```bash
npx prisma migrate dev
```

Create user

```typescript
await prisma.user.create({
  data: {
    name: "Arjun",
    email: "arjun@gmail.com"
  }
});
```

---

## 32. Common Interview Questions

### Q1. What is PostgreSQL?

An open-source relational database that stores data in tables and uses SQL for querying.

---

### Q2. Difference between SQL and PostgreSQL?

SQL is the language; PostgreSQL is the database system that executes SQL queries.

---

### Q3. What is a Primary Key?

A column that uniquely identifies each row. It cannot contain duplicate or NULL values.

---

### Q4. What is a Foreign Key?

A column that references the primary key of another table, creating relationships between tables.

---

### Q5. Difference between DELETE, TRUNCATE, and DROP?

| DELETE | TRUNCATE | DROP |
| --- | --- | --- |
| Removes selected rows | Removes all rows | Removes the entire table |
| Can use WHERE | No WHERE | Deletes structure and data |
| Table remains | Table remains | Table no longer exists |

---

### Q6. What is a JOIN?

A JOIN combines rows from two or more tables based on a related column.

---

### Q7. What is an Index?

A data structure that speeds up searches, at the cost of additional storage and slightly slower writes.

---

### Q8. What are Transactions?

A sequence of operations treated as a single unit of work, ensuring all succeed or all fail.

---

### Q9. What are ACID properties?

Atomicity, Consistency, Isolation, and Durability—properties that guarantee reliable transactions.

---

### Q10. Why use PostgreSQL?

Because it is reliable, ACID-compliant, supports complex queries and relationships, has excellent indexing, and scales well for production applications.

---

# 🚀 5-Minute Interview Cheat Sheet

* PostgreSQL = Open-source relational database.
* SQL = Language used to query databases.
* Data is stored in tables → rows → columns.
* Primary Key uniquely identifies a row.
* Foreign Key creates relationships between tables.
* Basic CRUD: INSERT, SELECT, UPDATE, DELETE.
* Filter with WHERE, sort with ORDER BY, limit with LIMIT.
* Use constraints like NOT NULL, UNIQUE, DEFAULT, CHECK.
* Relationship types: One-to-One, One-to-Many, Many-to-Many.
* Use JOIN to retrieve related data across tables.
* Aggregate with COUNT, SUM, AVG, MIN, MAX; group using GROUP BY and filter groups with HAVING.
* Indexes improve read performance.
* Transactions and ACID ensure data integrity.
* PostgreSQL is commonly used with ORMs like Prisma in modern Node.js applications.

---

# 🎯 Practice Questions

1. What is the difference between a Primary Key and a Foreign Key?
2. Explain the difference between DELETE, TRUNCATE, and DROP.
3. When would you use an INNER JOIN vs a LEFT JOIN?
4. Why are indexes useful, and what trade-off do they introduce?
5. Explain ACID properties with a bank transfer example.
6. Design the database schema for a simple blog (Users, Posts, Comments).
7. What is normalization, and why is it important?
8. How does PostgreSQL differ from MongoDB, and when would you choose each?
9. Write a query to find the top 5 oldest users.
10. How would you model a many-to-many relationship between students and courses?
