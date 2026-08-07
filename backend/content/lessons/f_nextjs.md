⏳ **Estimated Learning Time:** 10-15 min

## 🤔 What is Next.js?

Plain React (via Create React App / Vite) renders everything in the **browser** — the server sends a nearly empty HTML file, and JavaScript builds the page after loading. This is slower for first load and bad for SEO (search engines see an empty page).

> **Next.js is a React framework that adds server-side rendering, file-based routing, API routes, and many production optimizations on top of React.**

```
Plain React (CSR)                     Next.js (SSR/SSG)
──────────────────                    ──────────────────
Browser downloads empty HTML          Server renders full HTML
        │                                     │
        ▼                                     ▼
JS runs, builds the page              Browser shows content immediately
        │                                     │
        ▼                                     ▼
User finally sees content             JS "hydrates" it to become interactive
```

## Rendering Strategies

| Strategy | When HTML is generated | Best for |
|---|---|---|
| **CSR** (Client-Side Rendering) | In the browser, after JS loads | Highly interactive dashboards |
| **SSR** (Server-Side Rendering) | On the server, per request | Pages needing fresh, personalized data (e.g. user dashboard) |
| **SSG** (Static Site Generation) | At build time, once | Content that rarely changes (blogs, marketing pages) |
| **ISR** (Incremental Static Regeneration) | At build time, then re-generated periodically | Product pages — mostly static, occasionally updated |

## File-Based Routing

```
app/
 ├── page.tsx           → /
 ├── about/
 │    └── page.tsx      → /about
 └── users/
      └── [id]/
           └── page.tsx → /users/:id
```
No manual route configuration needed (unlike React Router) — the folder structure *is* the routing.

## Server Components vs Client Components (App Router)

```tsx
// Server Component (default) — runs only on the server, can access DB directly
async function UsersPage() {
  const users = await db.user.findMany();
  return <UserList users={users} />;
}
```
```tsx
"use client"; // Client Component — needed for interactivity (hooks, onClick, useState)
function LikeButton() {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>❤️</button>;
}
```
* **Server Components** — render on the server, send zero JS to the browser for that component, can directly query databases
* **Client Components** — needed for interactivity (`useState`, `onClick`, browser APIs)

## API Routes

Next.js lets you build backend endpoints right inside the same project:
```ts
// app/api/users/route.ts
export async function GET() {
  const users = await db.user.findMany();
  return Response.json(users);
}
```
This means a small app doesn't even need a separate Express server.

## Data Fetching

```tsx
async function Page() {
  const res = await fetch("https://api.example.com/data", {
    next: { revalidate: 60 }, // ISR: re-fetch at most every 60 seconds
  });
  const data = await res.json();
  return <div>{data.title}</div>;
}
```

## Why Companies Use Next.js

✅ Better SEO (search engines see fully-rendered HTML immediately)
✅ Faster initial page load (First Contentful Paint)
✅ Built-in routing, image optimization, API routes
✅ One framework for both frontend and lightweight backend logic

## Common Interview Questions

**Q1. What's the difference between SSR and SSG?**
SSR renders HTML on the server for every request (fresh data); SSG renders HTML once at build time (fast, but data can go stale until the next build/rebuild).

**Q2. What is hydration?**
The process where React attaches event listeners and makes server-rendered HTML interactive in the browser after the initial page load.

**Q3. Difference between Server Components and Client Components?**
Server Components render only on the server (no JS shipped to the browser, can access backend resources directly); Client Components run in the browser and are required for interactivity/hooks.

**Q4. Why might a company choose Next.js over plain React (CRA/Vite)?**
Better SEO, faster initial loads via SSR/SSG, built-in routing and API routes, and production optimizations out of the box.

## 🧠 Mini Quiz

1. What problem does Server-Side Rendering solve that plain client-side React has?
2. What does the `"use client"` directive do?
3. What's the difference between SSG and ISR?
4. Where do you put a dynamic route like `/users/:id` in the Next.js App Router?

---