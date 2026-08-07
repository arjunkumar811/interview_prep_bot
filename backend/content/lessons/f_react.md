⏳ **Estimated Learning Time:** 10-15 min

## 🤔 What is React?

Imagine rebuilding your entire living room every time you move one chair. That's how updating a webpage with raw JavaScript can feel — you often re-manipulate large chunks of the DOM manually.

> **React is a JavaScript library for building user interfaces out of reusable, self-contained "components" — it automatically updates only the parts of the page that actually changed.**

```
UI = f(state)
```
Your interface is just a function of your data — when data changes, React re-renders the affected parts automatically.

## Components

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Welcome name="Arjun" />
```

* Components are reusable, like custom HTML tags
* They receive data via **props** (read-only, passed from parent)

## JSX

JSX lets you write HTML-like syntax inside JavaScript:
```jsx
const element = <h1 className="title">Hello</h1>;
```
This isn't real HTML — it compiles to:
```js
React.createElement("h1", { className: "title" }, "Hello");
```

## State — `useState`

State is data that changes over time and triggers a re-render when updated.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

```
Click button → setCount() called → React re-renders → new count shown
```

## Props vs State

| Props | State |
|---|---|
| Passed from parent → child | Managed inside the component |
| Read-only | Can be changed with `setState`/`useState` |
| Like function arguments | Like local variables |

## `useEffect` — Side Effects

Runs code in response to renders — e.g. fetching data, subscribing to events.

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []); // empty array = run once, on mount

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

```
[]              → run once on mount
[count]         → run whenever `count` changes
(no array)      → run on every render (rarely what you want)
```

## The Virtual DOM

React keeps a lightweight copy of the DOM in memory. When state changes, it:
```
1. Builds a new Virtual DOM tree
2. Compares it (diffs) with the previous tree
3. Updates ONLY the changed parts in the real DOM
```
This is why React is fast — it avoids expensive full-page re-renders.

## Conditional Rendering & Lists

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}

{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}
```
The `key` prop helps React efficiently track which list items changed, were added, or removed.

## Common Hooks

| Hook | Purpose |
|---|---|
| `useState` | Local component state |
| `useEffect` | Side effects (fetching, subscriptions) |
| `useContext` | Access shared/global data without prop drilling |
| `useRef` | Reference a DOM element or persist a value without re-rendering |
| `useMemo` | Memoize an expensive calculation |
| `useCallback` | Memoize a function so it isn't recreated every render |

## Common Interview Questions

**Q1. What is the Virtual DOM and why does it make React fast?**
An in-memory representation of the UI that React diffs against the previous version, updating only the changed parts of the real DOM instead of re-rendering everything.

**Q2. Difference between props and state?**
Props are passed down from a parent and are read-only; state is managed within a component and can change over time.

**Q3. Why does a list need a `key` prop?**
It helps React identify which items changed, were added, or removed, enabling efficient re-rendering.

**Q4. What does the dependency array in `useEffect` control?**
It determines when the effect re-runs — an empty array runs it once on mount; including variables re-runs it whenever those variables change.

## 🧠 Mini Quiz

1. What does `useState` return?
2. When does a `useEffect` with an empty dependency array `[]` run?
3. Why is the `key` prop important in lists?
4. What's the difference between props and state?

---