## 🤔 Why Performance Matters

Every 100ms of added load time measurably reduces conversions and engagement — performance is a feature, not an afterthought.

## Core Web Vitals

Google's key metrics for real-world user experience:

```
LCP (Largest Contentful Paint)   → how fast the main content loads   (target: <2.5s)
INP (Interaction to Next Paint)  → how responsive the page feels     (target: <200ms)
CLS (Cumulative Layout Shift)    → how much content jumps around     (target: <0.1)
```

## Code Splitting & Lazy Loading

Instead of shipping one giant JS bundle, split it into chunks loaded only when needed.

```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  );
}
```
```
Before: main.js = 2MB (everything, loaded upfront)
After:  main.js = 200KB + dashboard.js = 1.8MB (loaded only when visiting /dashboard)
```

## Image Optimization

* Use modern formats (WebP/AVIF) — smaller than JPEG/PNG at the same quality
* Lazy-load offscreen images: `<img loading="lazy" />`
* Serve responsive sizes via `srcset`, or use `next/image` in Next.js which handles this automatically

## Memoization Recap (from Advanced React)

`React.memo`, `useMemo`, `useCallback` — but the golden rule is: **measure before optimizing**. Premature memoization adds complexity without benefit if the component wasn't actually re-rendering expensively.

## Virtualization (Windowing)

Rendering a list of 10,000 items creates 10,000 DOM nodes — slow and memory-heavy. Virtualization renders only the visible rows.

```jsx
import { FixedSizeList } from "react-window";

<FixedSizeList height={500} itemCount={10000} itemSize={35}>
  {({ index, style }) => <div style={style}>Row {index}</div>}
</FixedSizeList>
```
```
Without virtualization: 10,000 DOM nodes rendered
With virtualization:    ~15 DOM nodes rendered (only what's visible on screen)
```

## Bundle Analysis

```bash
npx vite-bundle-visualizer
```
Reveals which dependencies are bloating your bundle — often you'll find an entire library imported for one small function, fixable with tree-shaking or a lighter alternative.

## Debouncing Expensive Renders

Same debounce/throttle concepts from Advanced JavaScript, applied to UI updates like search-as-you-type filtering large lists.

## Caching Strategies

```
Browser Cache      → static assets (JS, CSS, images) cached via HTTP headers
Service Worker      → offline-capable caching (see PWA lesson)
CDN Cache            → static files served from edge locations near the user
React Query Cache    → API responses cached client-side, avoiding refetches
```

## Preloading & Prefetching

```html
<link rel="preload" href="hero.jpg" as="image" />
<link rel="prefetch" href="/dashboard.js" />
```
* `preload` — fetch a resource needed for the *current* page ASAP
* `prefetch` — fetch a resource likely needed for the *next* navigation, during idle time

## Common Interview Questions

**Q1. What are the three Core Web Vitals and what do they measure?**
LCP (loading speed), INP (interactivity/responsiveness), and CLS (visual stability).

**Q2. What is code splitting and why does it help performance?**
Breaking a large JS bundle into smaller chunks loaded on demand, so users only download the code needed for the page they're viewing, reducing initial load time.

**Q3. What is list virtualization and when would you use it?**
Rendering only the visible portion of a long list instead of every item, to avoid creating thousands of unnecessary DOM nodes — used for large tables, feeds, or dropdowns.

**Q4. What's the risk of over-using `useMemo`/`React.memo` everywhere?**
Added complexity and even worse performance in some cases — memoization itself has a cost (comparing dependencies), so it should be applied where profiling shows an actual bottleneck, not by default everywhere.

## 🧠 Mini Quiz

1. Name the three Core Web Vitals.
2. What problem does code splitting solve?
3. What is list virtualization, and what problem does it prevent?
4. What's the difference between `preload` and `prefetch`?

---