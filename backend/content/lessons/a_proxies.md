## 🤔 What is a Proxy?

A **proxy** sits between a client and the internet, making requests *on behalf of* the client.

```
Your Laptop ──► Proxy ──► Internet
```

Think of it like asking a friend to buy something for you at a store where you're banned — the store only sees your friend, not you.

## What is a Reverse Proxy?

A **reverse proxy** sits in front of servers, making requests on behalf of the *server*. The client doesn't know (or need to know) which actual server handled the request.

```
Client ──► Reverse Proxy ──► Server A
                          ──► Server B
                          ──► Server C
```

| Proxy (Forward) | Reverse Proxy |
|---|---|
| Hides the **client** from the server | Hides the **server** from the client |
| Used for privacy, bypassing restrictions | Used for load balancing, security, caching |
| Example: VPN | Example: Nginx, Cloudflare |

## Real World Example

Nginx sitting in front of your Node.js app:

```
Internet
   │
   ▼
Nginx (Reverse Proxy)
   │
   ├──► handles SSL/HTTPS
   ├──► serves cached static files
   ├──► compresses responses
   └──► forwards dynamic requests to Node.js on port 3000
```

Users only ever talk to Nginx on port 443 — they never see your internal Node.js port.

## Why Use a Reverse Proxy?

✅ Hides internal server structure (security)
✅ Terminates SSL/HTTPS in one place
✅ Load balances between multiple backend servers
✅ Can cache and compress responses
✅ Can block malicious traffic before it reaches your app

## 🧠 Mini Quiz

1. What is the key difference between a proxy and a reverse proxy?
2. Which one hides the identity of the client from the server?
3. Name one popular reverse proxy tool.

---