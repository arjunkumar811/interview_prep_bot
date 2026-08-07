## 🤔 What is Polling?

Before you learned about WebSockets (Lesson 11), you saw the "old way" — repeatedly asking the server "anything new?" This is called **Polling**.

## Short Polling

```
Client: "Any updates?" → Server: "No."   (wait 3s)
Client: "Any updates?" → Server: "No."   (wait 3s)
Client: "Any updates?" → Server: "Yes! Here's the data."
```

* ✅ Very simple to implement
* ❌ Wastes bandwidth and server resources
* ❌ Data is only as fresh as your polling interval

## Long Polling

The client asks, but the server **holds the request open** until it actually has new data (or a timeout is hit), then responds — and the client immediately re-asks.

```
Client: "Any updates?" 
Server: (waits...) 
Server: "Yes! Here's the data." (after 20 seconds, when data becomes available)
Client: immediately asks again
```

* ✅ Fewer wasted requests than short polling, feels closer to real-time
* ❌ Still not truly persistent like a WebSocket; ties up server resources holding connections open

## Polling vs WebSockets

| Short Polling | Long Polling | WebSockets |
|---|---|---|
| Constant requests | Fewer requests, held open | One persistent connection |
| Simple | Medium complexity | More setup, but most efficient |
| Good for infrequent updates (e.g. checking order status every 30s) | Good middle ground | Best for true real-time (chat, live games) |

## Real World Example

Checking if a food delivery order status changed every 10 seconds is a great use of **short polling** — you don't need millisecond precision, and it's simple to build.

## 🧠 Mini Quiz

1. What's the main downside of short polling?
2. How does long polling reduce wasted requests compared to short polling?
3. When would short polling be an acceptable choice over WebSockets?

---