⏳ **Estimated Learning Time:** 10-15 min

*(Builds on Lesson 9 — Redis)*

## Recap
Redis is an **in-memory data store**, mostly used as a cache, storing data as key-value pairs in RAM.

## Redis Data Structures

Redis isn't just `SET`/`GET` — it supports rich structures:

| Structure | Example Use Case |
|---|---|
| String | Cache a rendered page, store a counter |
| List | A queue of tasks, recent activity feed |
| Hash | Store a user object: `{name, age, email}` |
| Set | Unique tags on a blog post |
| Sorted Set (ZSET) | Leaderboards — ranked by score |
| Stream | Event log for real-time apps |

Example — Leaderboard using a Sorted Set:
```
ZADD leaderboard 100 "Arjun"
ZADD leaderboard 250 "Rahul"
ZADD leaderboard 180 "Sara"

ZREVRANGE leaderboard 0 2 WITHSCORES
```
Result: Rahul (250), Sara (180), Arjun (100) — instantly sorted.

## Expiry (TTL)

Redis keys can automatically expire — perfect for caching or OTPs.

```
SET otp:9876543210 "4521"
EXPIRE otp:9876543210 300
```
After 300 seconds (5 minutes), the OTP disappears automatically.

## Cache Invalidation Strategies

```
Cache-Aside          Write-Through           Write-Behind
─────────────       ────────────────        ────────────────
App checks cache     App writes to cache     App writes to cache
Miss → hits DB       AND db at the same      only. DB updated
Saves to cache        time (in sync)          later (async)
```

* **Cache-Aside** — most common; app manages cache manually
* **Write-Through** — cache and DB always stay in sync, slightly slower writes
* **Write-Behind** — fastest writes, risk of data loss if cache crashes before DB write

## Persistence (Redis isn't only RAM)

Even though Redis lives in memory, it can save to disk so a restart doesn't lose everything:

* **RDB (snapshotting)** — saves the whole dataset at intervals
* **AOF (Append Only File)** — logs every write operation, replays on restart

## Redis Beyond Caching

* **Distributed Locks** — prevent two servers from doing the same job at once
* **Rate Limiting** — counting requests per user per time window
* **Session Store** — storing login sessions shared across multiple servers
* **Pub/Sub** — lightweight real-time messaging

## Common Interview Questions

**Q1. Why is Redis fast?**
Because it stores data in RAM instead of on disk, and its data structures are optimized for O(1) or O(log n) operations.

**Q2. What happens to Redis data if the server restarts?**
By default, in-memory data is lost unless persistence (RDB or AOF) is enabled.

**Q3. What is a Sorted Set used for?**
Storing data ranked by a score — commonly leaderboards or priority queues.

**Q4. How would you implement rate limiting with Redis?**
Use a key per user with an expiring counter, e.g. `INCR user:123:requests` with an `EXPIRE` of 60 seconds; reject if the count exceeds the limit.

## 🧠 Mini Quiz

1. Which Redis data structure is best for a leaderboard?
2. What does `EXPIRE` do to a key?
3. Name the two Redis persistence methods.

---