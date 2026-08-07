*(Builds on Lesson 5 — Database, and Lesson 7 — PostgreSQL)*

## Isolation Levels

Isolation controls how much one transaction can "see" of another transaction's in-progress changes.

| Level | Problem it Prevents |
|---|---|
| Read Uncommitted | None — allows dirty reads |
| Read Committed | Dirty reads |
| Repeatable Read | Dirty reads + non-repeatable reads |
| Serializable | Everything — transactions behave as if run one at a time |

```
Dirty Read: Transaction A reads data Transaction B hasn't committed yet.
Non-Repeatable Read: Transaction A reads the same row twice, gets different values.
Phantom Read: Transaction A re-runs a query and new rows appear.
```

## Locking

* **Optimistic Locking** — assume conflicts are rare; check a version number before saving, reject if it changed.
* **Pessimistic Locking** — lock the row immediately so no one else can touch it until you're done.

```
Optimistic                     Pessimistic
───────────                    ───────────
Read row (version=1)           Read row → LOCK row
Update if version still 1      Update
Reject if version changed      Unlock
```

## Connection Pooling

Opening a new database connection for every request is slow. A **connection pool** keeps a set of ready-to-use connections.

```
App
 │
 ▼
Connection Pool (10 pre-opened connections)
 │
 ▼
Database
```

## N+1 Query Problem

A classic performance bug:
```
Get 100 posts        (1 query)
For each post,
   get its author     (100 more queries!)
= 101 queries total
```
Fix: Use a `JOIN` or `include`/`populate` to fetch it all in one query.

## Database Migrations

Version-controlled, incremental changes to your schema (like Git, but for your database structure) — e.g. Prisma's `migrate dev`.

## 🧠 Mini Quiz

1. What is a "dirty read"?
2. What's the difference between optimistic and pessimistic locking?
3. What causes the N+1 query problem, and how do you fix it?

---