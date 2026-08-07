## 🤔 What is Kafka?

Apache Kafka is a **distributed event streaming platform** — think of it as a message queue on steroids, built to handle massive volumes of real-time data (millions of events per second).

> **Kafka lets producers publish streams of events to "topics," which consumers can read — and unlike a normal queue, messages aren't deleted after being read.**

## Kafka vs Traditional Message Queue

| Traditional Queue (RabbitMQ) | Kafka |
|---|---|
| Message deleted after being consumed | Message stays for a configurable retention period |
| Best for task distribution | Best for event streaming & replay |
| One consumer typically processes a message | Many consumer groups can independently re-read the same data |

## Core Concepts

```
Producer ──► Topic (e.g. "user_signups")
                │
                ├── Partition 0
                ├── Partition 1
                └── Partition 2
                        │
                        ▼
                Consumer Group A ──► reads all partitions
                Consumer Group B ──► independently reads all partitions again
```

* **Topic** — a named stream of events (e.g. `payments`, `page_views`)
* **Partition** — a topic is split into partitions for parallel processing and ordering guarantees *within* a partition
* **Offset** — a message's position in a partition; consumers track their own offset, so they can "replay" old messages
* **Broker** — a Kafka server that stores partitions
* **Consumer Group** — a set of consumers sharing the work of reading a topic; each partition is read by only one consumer *within* a group

## Real World Example

Uber uses Kafka to stream:
```
Driver location update ──► Kafka Topic: "driver_locations"
                                  │
                    ┌─────────────┼──────────────┐
                    ▼             ▼              ▼
              Maps Service   Pricing Service   Analytics
```
Every service independently reads the same stream of location events, at its own pace, without slowing the others down.

## Why Kafka Scales So Well

* Partitions allow parallel reads/writes across many brokers
* Messages are appended to disk sequentially (very fast, even on spinning disks)
* Consumers pull data at their own pace instead of the broker pushing and overwhelming them

## Kafka vs RabbitMQ — When to Use Which

* **Kafka** — high-throughput event streaming, analytics pipelines, event sourcing, needing to replay history
* **RabbitMQ** — task queues, background jobs, simpler routing needs, lower operational complexity

## 🧠 Mini Quiz

1. What is a Kafka "offset"?
2. Why can multiple consumer groups read the same Kafka topic independently?
3. How is Kafka fundamentally different from a traditional message queue in terms of message retention?

---