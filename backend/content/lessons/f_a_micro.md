## 🤔 What is a Micro Frontend?

*(The frontend equivalent of microservices — ties into your backend Design Patterns notes)*

Just like a backend can be split into independent microservices, a large frontend can be split into independently built, deployed, and owned pieces, composed together into one app.

```
Monolithic Frontend                  Micro Frontend
────────────────────                 ────────────────
One giant React app                  Header Team  → deploys independently
Owned by one team                    Checkout Team → deploys independently
One deploy pipeline                  Search Team   → deploys independently
                                           │
                                           ▼
                                   Composed into ONE page at runtime
```

## Why Use Micro Frontends?

✅ Independent teams deploy independently — no waiting on a shared release train
✅ Different parts can use different tech/versions if truly necessary
✅ Smaller, more focused codebases per team

❌ Increased complexity (shared design system, versioning, communication)
❌ Potential for duplicated dependencies (bigger overall bundle if not managed carefully)
❌ Harder to maintain a consistent UX

## Composition Approaches

### Build-Time Integration
Each micro frontend is published as an npm package and imported at build time.
```
Least flexible, but simplest — all pieces still deploy together
```

### Run-Time Integration via iframes
```html
<iframe src="https://checkout.myapp.com"></iframe>
```
✅ Total isolation (styles/JS can't clash)
❌ Poor UX (separate scroll contexts, hard cross-communication, SEO issues)

### Module Federation (Webpack 5) — The Modern Standard
Different apps expose and consume modules from each other **at runtime**, over the network, without a shared build.

```js
// Host app config
new ModuleFederationPlugin({
  remotes: {
    checkout: "checkout@https://checkout.myapp.com/remoteEntry.js",
  },
});

// Usage
const CheckoutApp = React.lazy(() => import("checkout/App"));
```

## Communication Between Micro Frontends

```
Custom Events         → window.dispatchEvent(new CustomEvent("cart:updated", {...}))
Shared State Library   → a small shared store both apps subscribe to
URL / Query Params     → simplest, most decoupled communication
```

## Real World Example

Large e-commerce platforms often split: **Header/Nav team**, **Product Listing team**, **Checkout team**, **Account/Profile team** — each with its own repo, deploy pipeline, and release schedule, composed into one seamless site for the end user.

## 🧠 Mini Quiz

1. What backend architectural concept do micro frontends mirror?
2. Name one downside of using iframes to compose micro frontends.
3. What modern tool allows apps to share code at runtime without a shared build?
4. Why might a large company choose micro frontends despite the added complexity?

---