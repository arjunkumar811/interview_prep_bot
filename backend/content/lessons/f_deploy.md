## 🤔 Deploying a Frontend App

*(Builds on Lesson 16 — Deployment from your backend notes)*

Frontend deployment has one key advantage over backend deployment: for a plain React app, the output is just **static files** (HTML, CSS, JS) — no server process needs to keep running.

```
npm run build
     │
     ▼
dist/ (or .next/ for Next.js)
     │
     ▼
Upload static files to a CDN / hosting platform
```

## Where to Deploy

### Static Hosting (for CSR React apps — Vite/CRA)
* **Vercel**
* **Netlify**
* **GitHub Pages**
* **Cloudflare Pages**

These serve your `dist/` folder from a global CDN — extremely fast, and usually free for small projects.

### Platforms for Next.js (SSR needs a running server)
* **Vercel** (built by the creators of Next.js — zero-config deployment)
* Any Node.js host (Render, Railway, AWS) since SSR pages need server-side JavaScript execution on each request

## The Build Process

```bash
npm run build     # bundles, minifies, optimizes your code
```
```
src/ (readable source code)
     │
     ▼
Bundler (Vite/Webpack)
     │
     ├── Minifies JS/CSS (smaller file size)
     ├── Tree-shakes unused code
     ├── Splits code into chunks (faster initial load)
     └── Optimizes images
     │
     ▼
dist/ (production-ready static files)
```

## Environment Variables

```
.env
VITE_API_URL=https://api.myapp.com
```
```js
const apiUrl = import.meta.env.VITE_API_URL; // Vite
const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Next.js
```
⚠️ Important: anything prefixed for the client (`VITE_`, `NEXT_PUBLIC_`) is bundled into the JavaScript and **visible to anyone** who views your site's source — never put secrets (API keys, passwords) in frontend environment variables.

## CI/CD for Frontend (builds on Lesson 14 — CI/CD)

```
Push to GitHub
     │
     ▼
GitHub Actions / Vercel auto-detects push
     │
     ▼
Runs tests → npm run build
     │
     ▼
Deploys automatically to production
     │
     ▼
Preview URL generated for every Pull Request
```
Preview deployments (a unique URL per PR) let teammates review a change visually before merging — a huge advantage of platforms like Vercel/Netlify.

## CDN & Caching

```
User in India requests your site
        │
        ▼
Nearest CDN edge server (e.g. in Mumbai) serves cached static files
        │
        ▼
Page loads in milliseconds — no round trip to your origin server
```

## Common Interview Questions

**Q1. Why can a plain React (CSR) app be hosted on simple static hosting, but a Next.js SSR app usually can't?**
A CSR app compiles down to static HTML/CSS/JS files with no server logic needed; an SSR app needs a running Node.js server to render pages per-request.

**Q2. Why should you never put secret API keys in frontend environment variables?**
Any environment variable exposed to client-side code (e.g. `VITE_`/`NEXT_PUBLIC_` prefixed) gets bundled into the JavaScript sent to the browser, making it publicly visible in the page source.

**Q3. What is a CDN and why does it help frontend performance?**
A Content Delivery Network caches your static files across servers worldwide, so users are served from a nearby location instead of a single distant origin server — reducing latency.

**Q4. What is a "preview deployment"?**
A temporary, unique URL automatically generated for a pull request/branch, letting teammates review the actual running app before merging into production.

## 🧠 Mini Quiz

1. What does `npm run build` produce for a typical React app?
2. Why can't a Next.js SSR app be deployed to plain static hosting the same way a CRA/Vite app can?
3. What's the danger of putting a secret API key in a `VITE_`-prefixed environment variable?
4. What is the benefit of a CDN?

---
# 🚀 Advanced Frontend Engineering — Revision Guide

*Continuing from HTML, CSS, JavaScript, TypeScript, Git, React, React Router, Tailwind, State Management, API Integration, Forms, Auth, Testing, Next.js, and Deployment — this guide goes deeper into senior/staff-level frontend topics.*

---