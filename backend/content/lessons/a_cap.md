## 🤔 What is the CAP Theorem?

One of the most famous ideas in distributed systems. It states that a distributed database can only guarantee **2 out of 3** of the following at the same time:

```
        Consistency
           /\
          /  \
         /    \
        /      \
Availability──Partition Tolerance
```

* **C — Consistency**: Every read receives the most recent write (all nodes see the same data at the same time)
* **A — Availability**: Every request gets a response (even if it's not the absolute latest data)
* **P — Partition Tolerance**: The system keeps working even if network communication between nodes breaks down

## Why Only 2 of 3?

Because **network partitions will happen** (a cable gets cut, a data center loses connectivity) — Partition Tolerance isn't really optional in a real distributed system. So in practice, the real choice is between **Consistency** and **Availability** *during a partition*.

```
Network partition happens between Node A and Node B
        │
        ▼
   Do you...
        │
   ┌────┴─────┐
   ▼          ▼
Refuse to    Respond anyway
respond      (might be stale)
(pick C)     (pick A)
```

## Real World Example

**CP System (e.g. traditional banking / PostgreSQL with strong consistency settings):**
If the database can't guarantee the balance is accurate, it would rather **reject the transaction** than risk showing the wrong balance.

**AP System (e.g. DNS, many NoSQL databases like Cassandra/DynamoDB in default mode):**
DNS would rather give you a *slightly outdated* IP address than fail to resolve the domain at all. Availability wins.

## CAP in Practice

| System | Typically Prioritizes |
|---|---|
| PostgreSQL / MySQL (single node) | Consistency |
| MongoDB (default) | Consistency (configurable) |
| Cassandra | Availability |
| DynamoDB | Availability (tunable) |
| Redis | Availability (with eventual consistency in cluster mode) |

## 🧠 Mini Quiz

1. What do the letters C, A, and P stand for in CAP Theorem?
2. Why is Partition Tolerance considered non-negotiable in real distributed systems?
3. Give an example of a system that favors Availability over Consistency.

---