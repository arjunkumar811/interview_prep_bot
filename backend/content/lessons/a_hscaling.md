⏳ **Estimated Learning Time:** 10-15 min

*(Builds on Lesson 15 — Scaling)*

## Recap

**Horizontal Scaling (Scale Out)** = adding more servers.

```
Before                     After
──────                     ─────
1 Server                   Load Balancer
                              ├── Server A
                              ├── Server B
                              └── Server C
```

## Requirements for Horizontal Scaling to Work

### 1. Statelessness
Servers shouldn't store session data locally — if User A's session lives only on Server A, but their next request lands on Server B, they'll be logged out.

```
❌ Bad: session stored in Server A's memory
✅ Good: session stored in Redis (shared by all servers)
```

### 2. Load Balancer
Needed to distribute traffic (see Lesson 22).

### 3. Shared Storage
Uploaded files should live in cloud storage (e.g. S3), not on a single server's disk (see Lesson 12 — File Storage).

### 4. Database Scaling
Adding app servers doesn't help if the database becomes the bottleneck — pair it with replication/sharding.

## Auto-Scaling

Servers are added/removed automatically based on traffic.
```
CPU usage > 80% for 5 minutes
        │
        ▼
Auto-scaler launches 2 more servers
        │
        ▼
Traffic drops
        │
        ▼
Auto-scaler removes extra servers
```

## 🧠 Mini Quiz

1. Why must servers be stateless for horizontal scaling to work well?
2. What triggers auto-scaling?
3. Where should uploaded files be stored in a horizontally scaled system?

---