*(Builds on Lesson 10 — Message Queues)*

## Queue vs Pub/Sub — What's the difference?

A **Queue** is like a single order rail: each ticket (message) is picked up by **one** worker, then removed.

**Pub/Sub (Publish/Subscribe)** is like a radio station: the publisher broadcasts a message, and **every** subscriber tuned in receives a copy.

```
QUEUE (one consumer per message)
Producer ──► [msg1][msg2][msg3] ──► Worker picks msg1 (removed after)

PUB/SUB (every subscriber gets a copy)
Publisher ──► Topic ──┬──► Subscriber A (gets copy)
                       ├──► Subscriber B (gets copy)
                       └──► Subscriber C (gets copy)
```

## Real World Example

**Queue:** A ride-sharing app assigning drivers to trip requests — only ONE driver should accept a given trip.

**Pub/Sub:** A stock price update — when Apple's price changes, EVERY app watching Apple (mobile app, web dashboard, alert system) needs to know at once.

## Key Concepts

* **Topic** — a named channel messages are published to (Pub/Sub)
* **Exchange** — in RabbitMQ, routes messages to the correct queue(s)
* **Consumer Group** — in Kafka, a group of consumers that share the work of reading a topic
* **At-least-once delivery** — a message might be delivered more than once; consumers must be idempotent
* **Dead Letter Queue (DLQ)** — where messages go after repeatedly failing to process, so they aren't lost or retried forever

```
Message fails 5 times
        │
        ▼
   Dead Letter Queue
        │
        ▼
  Manual investigation
```

## 🧠 Mini Quiz

1. In a Queue, how many consumers process a single message?
2. In Pub/Sub, how many subscribers can receive a single published message?
3. What is a Dead Letter Queue used for?

---