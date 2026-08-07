⏳ **Estimated Learning Time:** 10-15 min

*(Builds on Lesson 15 — Scaling)*

## Recap

A **Load Balancer** distributes incoming traffic across multiple servers so no single server gets overwhelmed.

```
Users
  │
  ▼
Load Balancer
  ├──► Server A
  ├──► Server B
  └──► Server C
```

## Load Balancing Algorithms

### Round Robin
Requests are sent to each server in turn.
```
Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A (repeat)
```

### Least Connections
Send the request to whichever server currently has the fewest active connections.

### IP Hash
The same client (based on IP) is always sent to the same server — useful when a server holds session data in memory.

### Weighted Round Robin
More powerful servers get more requests.
```
Server A (8 CPUs) → gets 2x traffic
Server B (4 CPUs) → gets 1x traffic
```

## Health Checks

A load balancer regularly "pings" each server:

```
Load Balancer ──► "Are you alive?" ──► Server B
Server B ──► "500 Error" ──► Load Balancer
Load Balancer: "Server B is unhealthy, stop sending traffic to it."
```

This is how a crashed server gets automatically removed from rotation.

## Layer 4 vs Layer 7 Load Balancing

| Layer 4 (Transport) | Layer 7 (Application) |
|---|---|
| Routes based on IP/Port | Routes based on URL, headers, cookies |
| Faster | Smarter (e.g. can route `/api` to one service, `/images` to another) |
| Example: AWS Network Load Balancer | Example: Nginx, AWS Application Load Balancer |

## 🧠 Mini Quiz

1. What does a health check allow a load balancer to do?
2. Which algorithm always sends the same client to the same server?
3. What is the main difference between Layer 4 and Layer 7 load balancing?

---