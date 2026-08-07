⏳ **Estimated Learning Time:** 10-15 min

## 🤔 What is Capacity Estimation?

Before building a system, engineers estimate: how much traffic, storage, and bandwidth will we actually need? This is a classic **System Design interview** exercise.

## The Building Blocks

### 1. Traffic (Requests Per Second)
```
Daily Active Users (DAU) × Requests per user per day
─────────────────────────────────────────────────────
                86,400 seconds

Example: 10,000,000 DAU × 5 requests/day ÷ 86,400s
        ≈ 578 requests/second (average)

Peak traffic is usually 2–3x average → ~1,700 req/s at peak
```

### 2. Storage
```
Number of records × size per record

Example: 10,000,000 users × 1KB per profile = 10 GB
Add 5 years of growth at 20%/year → plan for ~25 GB
```

### 3. Bandwidth
```
Requests per second × average response size

Example: 1,700 req/s × 5KB average response ≈ 8.5 MB/s
```

### 4. Memory (for caching)
A common rule of thumb: cache the "hot" 20% of data that accounts for 80% of reads (the 80/20 rule).

## Real World Example — Designing a URL Shortener

```
Assume: 100M new URLs/month, read:write ratio = 10:1

Writes/sec  = 100,000,000 / (30 × 86,400) ≈ 38 writes/sec
Reads/sec   = 38 × 10 ≈ 380 reads/sec

Storage (5 years): 100M × 12 × 5 URLs × 500 bytes ≈ 3 TB
```

These napkin-math numbers immediately tell you: this is a small-to-medium system — a single well-indexed database with a Redis cache in front would likely be enough; you probably don't need Kafka or sharding on day one.

## Why It Matters

Capacity estimation stops you from **over-engineering** (adding Kafka/sharding for a system that gets 10 requests a day) or **under-engineering** (a single Postgres instance for a system expecting 1 million requests/second).

## 🧠 Mini Quiz

1. Why do engineers usually plan for 2–3x average traffic rather than just the average?
2. What two things do you multiply to estimate storage needs?
3. Why is capacity estimation useful before choosing your architecture?

---