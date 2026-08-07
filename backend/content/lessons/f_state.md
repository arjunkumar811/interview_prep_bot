## 🤔 What is State Management?

In a small app, `useState` is enough. But as an app grows, **many components need access to the same data** — the logged-in user, the shopping cart, theme settings. Passing that data down through many layers of props ("prop drilling") becomes painful.

```
App
 └─ Layout
     └─ Sidebar
         └─ CartWidget  ← needs cart data, but it's stored 4 levels up in App!
```

> **State management is the strategy for storing, sharing, and updating data across many components in an app.**

## Local vs Global State

| Local State | Global State |
|---|---|
| Only one component needs it | Many components need it |
| `useState` inside that component | Shared store (Context, Redux, Zustand) |
| Example: is this dropdown open? | Example: is the user logged in? |

## Prop Drilling — The Problem

```jsx
<App user={user}>
  <Layout user={user}>
    <Sidebar user={user}>
      <Profile user={user} /> {/* finally used here */}
    </Sidebar>
  </Layout>
</App>
```
Every intermediate component has to pass `user` along, even if it never uses it itself.

## React Context — Built-in Solution

```jsx
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout />
    </UserContext.Provider>
  );
}

// Any nested component, no matter how deep:
function Profile() {
  const { user } = useContext(UserContext);
  return <p>{user.name}</p>;
}
```
✅ No prop drilling
❌ Every consumer re-renders when the context value changes — not ideal for very frequently changing state

## Redux — Predictable Global State

```
Component dispatches an Action
        │
        ▼
   Reducer (a pure function) decides how state changes
        │
        ▼
     Store updates
        │
        ▼
Components subscribed to that state re-render
```

```js
// slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
  },
});

// component
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
dispatch(increment());
```
Best for large apps with complex, frequently-updated shared state and a need for predictable debugging (e.g. Redux DevTools time-travel).

## Zustand — A Lightweight Alternative

```js
import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));

// Usage in any component
const { items, addItem } = useCartStore();
```
✅ Much less boilerplate than Redux
✅ No need to wrap your app in a Provider
Great middle ground between Context and Redux for medium-sized apps.

## Server State vs Client State

A common modern distinction:
* **Client State** — UI state, form inputs, modals (Context/Zustand/Redux)
* **Server State** — data that lives on your backend (users, posts) — better handled by tools like **React Query / TanStack Query**, which manage caching, refetching, and loading states automatically instead of manually storing API data in Redux.

## Common Interview Questions

**Q1. What is prop drilling and how do you avoid it?**
Passing props through many intermediate components that don't use them, just to reach a deeply nested child. Avoided using Context, Redux, or another global state solution.

**Q2. When would you choose Context over Redux?**
Context is great for simple, infrequently-changing global data (theme, auth user). Redux/Zustand suit complex state with frequent updates, many actions, or the need for debugging tools.

**Q3. What's the difference between client state and server state?**
Client state is local UI data owned by the frontend; server state is data fetched from an API that needs caching, syncing, and refetching — often better managed with tools like React Query rather than plain Redux/Context.

## 🧠 Mini Quiz

1. What problem does prop drilling create?
2. Name one built-in React tool for sharing state without prop drilling.
3. What's a benefit of Zustand over Redux?
4. What's the difference between "client state" and "server state"?

---