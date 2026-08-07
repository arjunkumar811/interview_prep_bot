⏳ **Estimated Learning Time:** 10-15 min

## 🤔 What is Rate Limiting?

Imagine a nightclub that only lets 50 people in per hour, no matter how many show up. That's rate limiting — controlling how many requests a client can make in a given time window.

> **Rate Limiting restricts the number of requests a client can send to a server within a specific time period, to protect the server from overload or abuse.**

## Real World Example

A login API without rate limiting:
```
Attacker sends 1,000,000 password guesses per second
        │
        ▼
Server crashes OR password gets brute-forced
```

With rate limiting:
```
Attacker sends request #6 within 1 minute
        │
        ▼
429 Too Many Requests
```

## Common Algorithms

### Fixed Window
```
12:00:00 – 12:00:59  → max 100 requests allowed
12:01:00 – 12:01:59  → counter resets, 100 more allowed
```
Simple, but allows a burst right at the window boundary.

### Sliding Window
Looks at the last 60 seconds *continuously*, not in fixed blocks — smoother, more accurate.

### Token Bucket
```
Bucket holds 10 tokens
Each request costs 1 token
Bucket refills at 1 token/second
```
Allows short bursts while enforcing a steady average rate — used by AWS, Stripe.

### Leaky Bucket
Requests are processed at a constant, fixed rate no matter how fast they arrive — like water leaking out of a bucket at a steady pace.

## Implementation with Redis

```js
const key = `rate:${userId}`;
const count = await redis.incr(key);
if (count === 1) await redis.expire(key, 60);
if (count > 100) return res.status(429).send("Too Many Requests");
```

## 🧠 Mini Quiz

1. What HTTP status code is typically returned when a rate limit is exceeded?
2. Which algorithm allows short bursts of traffic while keeping a steady average rate?
3. Why might Redis be a good fit for implementing rate limiting?

---