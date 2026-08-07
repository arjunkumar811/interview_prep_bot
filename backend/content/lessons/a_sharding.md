⏳ **Estimated Learning Time:** 10-15 min

*(Builds on Lesson 5 & 6 — Database sharding basics)*

## 🤔 Recap

**Sharding** splits one huge dataset across multiple servers ("shards"), so no single server holds everything.

```
Users A–F  → Shard 1
Users G–M  → Shard 2
Users N–Z  → Shard 3
```

## Sharding Strategies

### Range-Based Sharding
Data is split by value ranges (e.g. alphabetically, or by date).
* ✅ Simple, easy to query ranges
* ❌ Uneven distribution if data isn't uniform (e.g. many users' names start with "A")

### Hash-Based Sharding
A hash function decides the shard.
```
shard = hash(userId) % totalShards
```
* ✅ Even distribution
* ❌ Hard to query ranges; re-sharding is painful (hash changes when shard count changes)

### Geographic Sharding
Data is split by region — European users on EU servers, US users on US servers.
* ✅ Lower latency, meets data-residency laws (e.g. GDPR)
* ❌ Cross-region queries are complex

## The Hard Part: Cross-Shard Queries

```
"Find all orders over $1000 across all users"
        │
        ▼
Must query Shard 1 AND Shard 2 AND Shard 3, then merge results
```
This is why sharding trades query simplicity for scalability.

## A Shard Key Matters

Choosing a bad shard key (e.g. one where 90% of data ends up on one shard) creates a **hot shard** — defeats the whole purpose.

## 🧠 Mini Quiz

1. What problem does sharding solve?
2. What is a "hot shard"?
3. Why are cross-shard queries harder than normal queries?

---