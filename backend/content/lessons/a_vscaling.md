⏳ **Estimated Learning Time:** 10-15 min

*(Builds on Lesson 15 — Scaling)*

## Recap

**Vertical Scaling (Scale Up)** = making a single server more powerful (more CPU, RAM, faster disk).

```
Before                  After
──────                  ─────
2 CPU, 4GB RAM   ──►   16 CPU, 64GB RAM
(same single server)
```

## Pros and Cons

✅ No code changes needed
✅ No distributed-systems complexity (no data consistency issues across servers)
✅ Simple to manage

❌ Physical/cost limit — you can't buy an infinitely powerful machine
❌ Single Point of Failure — if that one server goes down, everything goes down
❌ Usually requires downtime to resize

## When to Use Vertical Scaling

* Early-stage startups/MVPs with limited traffic
* Databases that are hard to shard (some relational workloads scale up before out)
* When simplicity is more valuable than infinite scalability

## Vertical vs Horizontal — Quick Comparison

| Vertical Scaling | Horizontal Scaling |
|---|---|
| Upgrade one machine | Add more machines |
| Limited ceiling | Practically unlimited |
| Simple | Complex (needs load balancer, stateless design) |
| Single point of failure | Fault tolerant (one server dying doesn't kill the app) |

## 🧠 Mini Quiz

1. What is the main risk of relying only on vertical scaling?
2. Name one scenario where vertical scaling is the more practical choice.
3. What is the fundamental ceiling vertical scaling always runs into?

---