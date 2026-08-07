⏳ **Estimated Learning Time:** 10-15 min

*(Ties into your backend System Design notes — Capacity Estimation, CAP Theorem, Load Balancers)*

## 🤔 What is Frontend System Design?

At senior levels, interviews ask you to design an entire frontend architecture — not just a component. Think: "Design the frontend for Instagram's feed" or "Design a real-time collaborative document editor."

## The Framework for Answering These Questions

```
1. Clarify requirements  → functional & non-functional
2. High-level architecture → components, data flow
3. Data fetching strategy → REST/GraphQL, caching, pagination
4. State management       → what's global vs local
5. Performance considerations → lazy loading, virtualization
6. Edge cases              → offline, errors, race conditions
```

## Example: Designing a News Feed (like Instagram/Twitter)

```
Requirements:
- Infinite scroll
- Real-time new-post notifications
- Works on slow networks
- Handles likes/comments optimistically
```

```
User scrolls
     │
     ▼
Intersection Observer detects "near bottom"
     │
     ▼
Fetch next page (cursor-based pagination)
     │
     ▼
Virtualized list renders only visible posts
     │
     ▼
New posts arrive via WebSocket → shown as a
"X new posts" banner (not auto-inserted, to avoid
disorienting the user mid-scroll)
```

## Pagination Strategies

```
Offset-based:  GET /posts?page=2&limit=20
   → Simple, but can skip/duplicate items if data changes between requests

Cursor-based:  GET /posts?after=post_123&limit=20
   → More stable for real-time feeds, scales better on large datasets
```

## Optimistic Updates

Update the UI immediately, assuming the request will succeed — roll back only if it fails. Makes the app *feel* instant.

```jsx
function likePost(postId) {
  setPosts(prev => prev.map(p =>
    p.id === postId ? { ...p, liked: true, likes: p.likes + 1 } : p
  )); // update UI immediately

  api.likePost(postId).catch(() => {
    // rollback if the request actually failed
    setPosts(prev => prev.map(p =>
      p.id === postId ? { ...p, liked: false, likes: p.likes - 1 } : p
    ));
  });
}
```

## Designing for Offline & Poor Networks

* Show cached content immediately, refresh in the background (stale-while-revalidate)
* Queue actions taken offline, sync when connectivity returns
* Show clear loading/error/retry states

## Component Architecture at Scale

```
Design System (buttons, inputs, shared primitives)
        │
        ▼
Feature Components (PostCard, CommentList)
        │
        ▼
Pages / Routes (Feed, Profile)
```
Each layer should only depend on layers below it — a Design System component should never import a feature-specific component.

## 🧠 Mini Quiz

1. What's the advantage of cursor-based pagination over offset-based pagination for a real-time feed?
2. What is an "optimistic update" and why is it used?
3. Why show a "X new posts" banner instead of auto-inserting new posts into a feed?
4. Why should a design system component avoid importing feature-specific components?

---