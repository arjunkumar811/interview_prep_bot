## 🤔 What is it?

So far you've learned that a client talks to a server using HTTP. But real systems are made of **many servers talking to each other** — an Orders service talks to a Payments service, which talks to an Inventory service, which talks to a Notification service.

> **Backend communication is the set of patterns used for services to exchange data with each other and with clients.**

```
Client
  │
  ▼
API Gateway
  │
  ├──► Orders Service
  │        │
  │        ▼
  │     Payments Service
  │
  └──► Notification Service
```

## Two Big Categories

### 1. Synchronous (Request → Wait → Response)
```
Service A ──request──► Service B
Service A ◄──response── Service B
```
* Examples: REST, gRPC
* Simple to reason about
* If Service B is slow/down, Service A is blocked (or errors)

### 2. Asynchronous (Fire and forget / Event-based)
```
Service A ──message──► Queue ──► Service B (whenever it's ready)
```
* Examples: Message Queues, Pub/Sub, Webhooks
* Services don't wait for each other
* Harder to debug, but far more resilient and scalable

## Real World Example

Amazon checkout:

```
User clicks "Place Order"
        │
        ▼
Order Service (Synchronous — must respond fast)
        │
        ├──► Payment Service (Synchronous — needs confirmation NOW)
        │
        └──► Queue: "order_placed" (Asynchronous)
                 │
                 ├──► Email Service   (sends confirmation later)
                 ├──► Inventory Service (updates stock later)
                 └──► Analytics Service (logs event later)
```

The user only waits for payment confirmation — everything else happens in the background.

## Choosing Sync vs Async

| Use Synchronous when | Use Asynchronous when |
|---|---|
| You need an immediate answer (e.g. "is payment approved?") | The task can happen later (e.g. sending an email) |
| The caller can't proceed without the result | Many services need to react to one event |
| Simplicity matters more than resilience | You need to survive service downtime/spikes |

## 🧠 Mini Quiz

1. What is the main difference between synchronous and asynchronous communication?
2. Give one real-world example where synchronous communication is required.
3. Why might a checkout flow use both synchronous and asynchronous communication?

---