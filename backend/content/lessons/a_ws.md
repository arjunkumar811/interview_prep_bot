⏳ **Estimated Learning Time:** 10-15 min

*(Builds on Lesson 11 — WebSockets)*

## The Handshake

A WebSocket connection starts as a normal HTTP request, then **upgrades**:

```
Client: GET /chat HTTP/1.1
        Upgrade: websocket
        Connection: Upgrade

Server: HTTP/1.1 101 Switching Protocols
        Upgrade: websocket
```

After this handshake, the same TCP connection stays open and both sides can send messages freely — no more HTTP headers per message.

## Rooms & Namespaces (Socket.io)

```js
// Server
io.on("connection", (socket) => {
  socket.join("room:123");

  io.to("room:123").emit("message", "Hello room!");
});
```

* **Namespace** — a separate communication channel (e.g. `/chat`, `/notifications`)
* **Room** — a sub-group within a namespace (e.g. one chat group)

```
Namespace: /chat
   ├── Room: general
   ├── Room: engineering
   └── Room: random
```

## Scaling WebSockets

A single server can only hold so many open connections. If you horizontally scale (Lesson 32), a message from a user on Server A needs to reach a user on Server B.

```
User A (connected to Server 1) sends message
        │
        ▼
Server 1 publishes to Redis Pub/Sub
        │
        ▼
Server 2 (subscribed) receives it
        │
        ▼
Delivers to User B (connected to Server 2)
```

This is why Redis Adapter is commonly paired with Socket.io in production.

## Heartbeats / Ping-Pong

Servers periodically ping clients to detect dead connections (e.g. a laptop that went to sleep) so they can be cleaned up.

## 🧠 Mini Quiz

1. What HTTP status code signals a successful WebSocket upgrade?
2. Why is Redis Pub/Sub often used when scaling WebSocket servers horizontally?
3. What is a "room" used for in Socket.io?

---