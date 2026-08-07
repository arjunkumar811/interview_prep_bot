## 🤔 What is Resiliency?

> **Resiliency is a system's ability to keep working — or fail gracefully — when part of it breaks.**

In a large system, *something* is always failing (a server, a network link, a disk). Resilient systems expect this and are designed not to collapse entirely.

## Circuit Breaker Pattern

Imagine calling a friend who never picks up. After 5 failed calls, you stop trying for a while instead of calling nonstop.

```
CLOSED (normal) ──► too many failures ──► OPEN (stop calling, fail fast)
                                              │
                                     after a timeout
                                              ▼
                                    HALF-OPEN (try one test call)
                                         │           │
                                     success       failure
                                         ▼             ▼
                                      CLOSED         OPEN
```

This prevents one failing service from dragging down every service that depends on it (a **cascading failure**).

## Retries with Backoff

```
Attempt 1 fails → wait 1s → retry
Attempt 2 fails → wait 2s → retry
Attempt 3 fails → wait 4s → retry
```
This is **exponential backoff** — it avoids hammering an already-struggling service.

## Timeouts

Never wait forever for a response.
```js
fetch(url, { signal: AbortSignal.timeout(5000) })
```

## Bulkheads

Isolate resources so one failure doesn't sink the whole ship — like a ship's watertight compartments.
```
Thread Pool A → Payment Service calls
Thread Pool B → Notification Service calls
```
If Notification Service hangs, Payment Service calls are unaffected because they use a separate pool.

## Graceful Degradation

If a "recommended products" service fails, still show the product page — just without recommendations, instead of crashing the whole page.

## 🧠 Mini Quiz

1. What problem does a Circuit Breaker solve?
2. What is exponential backoff?
3. What is graceful degradation?

---