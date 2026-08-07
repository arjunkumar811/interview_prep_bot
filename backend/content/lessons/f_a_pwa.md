## 🤔 What is a PWA?

A Progressive Web App is a website built to **feel and behave like a native app** — installable, works offline, and can send push notifications — while still being just a website under the hood.

```
Regular Website          PWA
────────────────         ─────
Needs internet always    Works offline (cached)
No install                Installable to home screen
No push notifications     Supports push notifications
Opens in a browser tab    Can open in its own window, like a native app
```

## The Two Core Pieces

### 1. Web App Manifest
A JSON file describing your app's identity for installation.

```json
{
  "name": "My App",
  "short_name": "MyApp",
  "start_url": "/",
  "display": "standalone",
  "icons": [{ "src": "/icon.png", "sizes": "512x512", "type": "image/png" }],
  "theme_color": "#000000"
}
```
```html
<link rel="manifest" href="/manifest.json" />
```

### 2. Service Worker
A background script that intercepts network requests, enabling offline support and caching.

```js
// service-worker.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => cache.addAll(["/", "/index.html", "/styles.css"]))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
```

```
Request comes in
        │
        ▼
Service Worker intercepts it
        │
   ┌────┴────┐
Cached?      Not cached?
   │              │
   ▼              ▼
Serve from     Fetch from
cache          network
(offline OK)
```

## Caching Strategies

```
Cache First      → check cache, fall back to network (great for static assets)
Network First    → try network, fall back to cache (great for frequently-changing data)
Stale-While-Revalidate → serve cached version instantly, refresh cache in background
```

## Push Notifications

```js
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    // subscribe to push notifications via the browser's Push API
  }
});
```

## Registering the Service Worker

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
```

## Common Interview Questions

**Q1. What are the two core technologies that make a PWA possible?**
The Web App Manifest (describes installability) and the Service Worker (enables offline support, caching, and push notifications).

**Q2. How does a Service Worker enable offline functionality?**
It intercepts network requests and can serve cached responses when the network is unavailable, based on a caching strategy.

**Q3. What's the difference between "Cache First" and "Network First" caching strategies?**
Cache First checks the cache before the network (good for static assets that rarely change); Network First tries the network first and falls back to cache (good for data that changes frequently).

## 🧠 Mini Quiz

1. What file describes a PWA's icons, name, and install behavior?
2. What background script enables offline support in a PWA?
3. Which caching strategy is better for content that changes often: Cache First or Network First?
4. What browser API lets a PWA send push notifications?

---