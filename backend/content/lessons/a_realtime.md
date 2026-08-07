⏳ **Estimated Learning Time:** 10-15 min

*(Ties together Lessons 11, 20, 34, 35)*

## 🤔 What is Real-time Communication?

Any system feature where data must reach the user **immediately**, not on the next page refresh — chat messages, live notifications, multiplayer games, collaborative docs, live sports scores.

## Choosing the Right Tool

```
Do you need instant, two-way, high-frequency updates?
        │
   ┌────┴────┐
  Yes         No
   │           │
   ▼           ▼
WebSockets   Is it occasional and one-directional
(chat,        (server → client only)?
multiplayer)      │
              ┌────┴────┐
             Yes         No
              │           │
              ▼           ▼
        Server-Sent    Long/Short Polling
        Events (SSE)   (order status checks)
        (live feed,
        notifications)
```

## Server-Sent Events (SSE)

A lighter-weight alternative to WebSockets — a **one-way** stream from server to client over plain HTTP.

```js
// Server
res.setHeader("Content-Type", "text/event-stream");
res.write(`data: ${JSON.stringify({ price: 105 })}\n\n`);
```
```js
// Client
const events = new EventSource("/stream");
events.onmessage = (e) => console.log(JSON.parse(e.data));
```

* ✅ Simpler than WebSockets, auto-reconnects
* ❌ One-way only (server → client)
* Great for: live stock tickers, live notifications, streaming AI responses

## Comparison Table

| Technique | Direction | Best For |
|---|---|---|
| Short Polling | Client asks repeatedly | Infrequent updates |
| Long Polling | Client asks, server holds | Medium-frequency updates |
| SSE | Server → Client only | Live feeds, notifications |
| WebSockets | Both directions, persistent | Chat, games, collaboration |

## 🧠 Mini Quiz

1. What's the key limitation of Server-Sent Events compared to WebSockets?
2. Which real-time technique would you choose for a live notification feed that never needs to send data back to the server?
3. Which technique is best for a multiplayer game requiring constant two-way updates?

---