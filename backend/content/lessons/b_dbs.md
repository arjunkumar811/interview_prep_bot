⏳ **Estimated Learning Time:** 10-15 min

# 📚 Database Revision (Complete)

## What is a Database?

A **database** is software that stores, organizes, and retrieves data efficiently.

Instead of storing everything in files,

```
users.txt
orders.txt
products.txt
```

we store data in a database.

Example:

Instagram stores

* Users
* Posts
* Comments
* Likes
* Messages

inside a database.

---

# Why do we need a Database?

Without a database,

* data is difficult to manage
* searching is slow
* concurrent access is difficult
* no security
* no relationships

A database solves all these problems.

---

# Real World Example

Imagine Amazon.

It has

```
Users
Products
Orders
Payments
Reviews
```

When you order an iPhone,

Amazon stores

```
User ID
↓

Order
↓

Payment
↓

Shipping Address
↓

Tracking
```

Everything is stored inside a database.

---

# Types of Databases

There are two major categories.

```
Database
│
├── SQL
│
└── NoSQL
```

---

# SQL Database (Relational)

Stores data in **tables**.

Example

Users Table

| ID | Name  | Email                             |
| -- | ----- | --------------------------------- |
| 1  | Arjun | a@gmail.com |
| 2  | Rahul | r@gmail.com |

Orders Table

| OrderID | UserID | Product |
| ------- | ------ | ------- |
| 101     | 1      | Laptop  |
| 102     | 2      | Phone   |

Notice

```
UserID = 1
```

connects both tables.

This relationship is why SQL databases are called **Relational Databases**.

---

Popular SQL Databases

* PostgreSQL
* MySQL
* SQLite
* Oracle
* SQL Server

---

# NoSQL Database

Instead of tables,

NoSQL stores **documents**, **key-value pairs**, **graphs**, or **columns**.

MongoDB stores JSON-like documents.

Example

```json
{
  "name": "Arjun",
  "email": "a@gmail.com",
  "age": 20,
  "skills": ["Node", "React"]
}
```

Every document can have different fields.

Example

```json
{
  "name":"Rahul"
}
```

This flexibility is a major advantage.

---

Popular NoSQL Databases

* MongoDB
* Redis
* Cassandra
* DynamoDB
* CouchDB

---

# SQL vs NoSQL

| SQL             | NoSQL                   |
| --------------- | ----------------------- |
| Tables          | Documents               |
| Fixed Schema    | Flexible Schema         |
| Relationships   | Embedded Documents      |
| JOIN Supported  | Usually No JOIN         |
| ACID            | BASE (often)            |
| Complex Queries | Fast Horizontal Scaling |

---

# Schema

A **schema** defines the structure of the data.

Example SQL

```
Users

id
name
email
password
```

Every row must follow this structure.

---

MongoDB

Document 1

```json
{
 "name":"Arjun",
 "age":20
}
```

Document 2

```json
{
 "name":"Rahul",
 "city":"Bangalore"
}
```

Both are valid.

---

# Primary Key

A unique identifier for every record.

Example

```
Users

ID
1
2
3
4
```

No duplicate IDs.

---

Think of it like

```
Aadhaar Number
Passport Number
Roll Number
```

Every person has a unique one.

---

# Foreign Key

Used to connect two tables.

Users

```
ID
1
2
```

Orders

```
OrderID

UserID
1
1
2
```

UserID references Users.ID.

This creates relationships.

---

# CRUD Operations

Every database supports CRUD.

```
C → Create
R → Read
U → Update
D → Delete
```

Example

Create

```
Add User
```

Read

```
Get User
```

Update

```
Change Email
```

Delete

```
Delete User
```

---

# Indexing

Imagine a 1000-page book.

Without an index,

You search page by page.

With an index,

You jump directly.

Databases use indexes similarly.

Without Index

```
Scan

1
2
3
4
5
...
100000
```

With Index

```
↓

Jump

↓

Record Found
```

Search becomes much faster.

---

# Normalization

Purpose:

Reduce duplicate data.

Bad Design

```
Order

User Name
Phone
Address

repeated
repeated
repeated
```

Better Design

Users Table

Orders Table

Linked using UserID.

Benefits

* less storage
* no duplicate data
* easier updates
* improved consistency

---

# Denormalization

Sometimes we intentionally duplicate data.

Why?

To improve read performance.

Example

Instagram feed.

Instead of joining many tables repeatedly,

some data is duplicated so feeds load faster.

Trade-off:

* Faster reads
* More storage
* Harder updates

---

# Transactions

A transaction is a group of operations that either:

* all succeed, or
* all fail.

Example

Bank Transfer

```
Arjun

₹500

↓

Rahul

₹500
```

Steps

```
Deduct ₹500

↓

Add ₹500
```

If deduction succeeds but addition fails,

money is lost.

Transactions prevent this.

---

# ACID Properties

Every SQL interview asks this.

---

## A — Atomicity

All or nothing.

```
Deduct ₹500

Add ₹500
```

If one fails,

everything rolls back.

---

## C — Consistency

Database remains valid.

Example

Balance can never become negative if rules forbid it.

---

## I — Isolation

Two transactions should not interfere with each other.

Example

Two people buying the last product.

The database ensures only one purchase succeeds.

---

## D — Durability

Once committed,

data survives crashes or power failures.

---

Easy Memory Trick

```
A

All or Nothing

C

Correct State

I

Independent

D

Permanent
```

---

# JOIN (SQL)

Suppose

Users

| ID | Name  |
| -- | ----- |
| 1  | Arjun |

Orders

| OrderID | UserID |
| ------- | ------ |
| 101     | 1      |

JOIN combines related data.

Result

| Name  | Order |
| ----- | ----- |
| Arjun | 101   |

---

# Scaling

## Vertical Scaling

```
Old Server

↓

More RAM
More CPU
```

Upgrade one machine.

---

## Horizontal Scaling

```
Server 1

Server 2

Server 3
```

Add more servers.

NoSQL databases are often designed for easier horizontal scaling.

---

# Replication

Copy data to multiple servers.

```
Primary

↓

Replica 1

↓

Replica 2
```

Benefits

* High availability
* Read scaling
* Backup

---

# Sharding

Split data across multiple servers.

Example

```
Server 1

A-M

Server 2

N-Z
```

Now each server stores only part of the data.

Useful for very large datasets.

---

# Caching vs Database

Cache

* Extremely fast
* Temporary
* Stored in memory (RAM)

Database

* Permanent
* Slightly slower
* Stored on disk

Example

```
User Request

↓

Redis Cache

↓

Found?

↓

Yes → Return

↓

No

↓

Database

↓

Save to Cache

↓

Return
```

---

# Interview Questions

### 1. SQL vs NoSQL?

* SQL uses tables with fixed schemas and supports relationships and joins.
* NoSQL uses flexible documents or other data models, making it easier to scale horizontally.

---

### 2. What is a Primary Key?

A unique identifier for each record in a table.

---

### 3. What is a Foreign Key?

A column that references the primary key of another table to create relationships.

---

### 4. What is an Index?

A data structure that speeds up data retrieval, at the cost of additional storage and slower writes.

---

### 5. What are ACID properties?

* **Atomicity:** All operations succeed or none do.
* **Consistency:** Data remains valid.
* **Isolation:** Concurrent transactions don't interfere.
* **Durability:** Committed data is permanent.

---

### 6. What is Normalization?

Organizing data into related tables to reduce redundancy and improve consistency.

---

### 7. When would you choose SQL vs NoSQL?

* Choose **SQL** when you need strong consistency, complex relationships, and transactions (e.g., banking, e-commerce orders).
* Choose **NoSQL** when you need flexible schemas, rapid development, and horizontal scalability (e.g., chat apps, content management, analytics).

---

# Quick 2-Minute Revision

```
Database
│
├── SQL (Tables, Relations)
│
└── NoSQL (Documents)

CRUD
→ Create
→ Read
→ Update
→ Delete

Primary Key
→ Unique ID

Foreign Key
→ Connects Tables

Schema
→ Data Structure

Index
→ Faster Search

Transaction
→ All or Nothing

ACID
→ Atomicity
→ Consistency
→ Isolation
→ Durability

Normalization
→ Reduce Duplication

Denormalization
→ Faster Reads

Replication
→ Copies Data

Sharding
→ Splits Data

Cache
→ Fast Temporary Storage
```

## 🎯 Practice Questions (Answer without looking)

1. What is the difference between a database and a DBMS?
2. Why are indexes fast, and what is their trade-off?
3. When would you use normalization vs denormalization?
4. Explain a transaction using a bank transfer example.
5. What problem does a foreign key solve?
6. When would you choose PostgreSQL over MongoDB?
7. What is the difference between replication and sharding?
8. Why is Redis used alongside a database instead of replacing it?
