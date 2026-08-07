⏳ **Estimated Learning Time:** 10-15 min

*(Builds on Lesson 5 & 6 — Replication basics)*

## 🤔 Recap

**Replication** copies the same data across multiple database servers for backup, availability, and read scaling.

```
        Primary (Read + Write)
        │
   ┌────┼────┐
   ▼    ▼    ▼
Replica Replica Replica
(Read Only)
```

## Why Replicate?

✅ **High Availability** — if the primary crashes, a replica can be promoted
✅ **Read Scaling** — spread millions of read queries across replicas
✅ **Backups** — a replica can be backed up without slowing the primary
✅ **Geographic Distribution** — replicas closer to users reduce latency

## Replication Strategies

### Synchronous Replication
The primary waits for the replica to confirm the write before responding to the client.
* ✅ Zero data loss risk
* ❌ Slower writes (waits on the network)

### Asynchronous Replication
The primary responds immediately; replicas catch up afterward.
* ✅ Fast writes
* ❌ Small risk of data loss if the primary crashes before replicating

## Replication Lag

```
Primary writes: balance = 500
        │
        │  (network delay)
        ▼
Replica still shows: balance = 400
```
If a user reads from a replica right after writing to the primary, they might see stale data — a classic **eventual consistency** problem.

## Leader Election / Failover

```
Primary crashes
        │
        ▼
Replicas vote / a coordinator promotes one Replica → new Primary
```

## 🧠 Mini Quiz

1. What is "replication lag"?
2. What's the trade-off of synchronous vs asynchronous replication?
3. What happens during failover when a primary database crashes?

---