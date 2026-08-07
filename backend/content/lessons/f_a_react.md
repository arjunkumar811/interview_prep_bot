## 🤔 Beyond `useState` and `useEffect`

At a senior level, React interviews focus on **performance, rendering behavior, and advanced patterns** — not just hook syntax.

## `useMemo` and `useCallback`

Both exist to avoid unnecessary recalculation/recreation on every render.

```jsx
// useMemo — memoize an expensive VALUE
const sortedList = useMemo(() => expensiveSort(items), [items]);

// useCallback — memoize a FUNCTION reference
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```
Why it matters: without `useCallback`, a new function is created every render, which can cause child components wrapped in `React.memo` to re-render unnecessarily anyway.

## `React.memo`

Prevents a component from re-rendering if its props haven't changed.
```jsx
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return <div>{data}</div>;
});
```
⚠️ Only helps if props are actually stable (primitives, or memoized objects/functions) — otherwise a new object/function reference each render defeats the memoization.

## `useRef` Beyond DOM Access

```jsx
function Timer() {
  const countRef = useRef(0); // persists across renders WITHOUT causing a re-render

  function increment() {
    countRef.current += 1;
    console.log(countRef.current); // updates immediately, but UI won't re-render
  }
}
```
Key difference from `useState`: updating a ref does **not** trigger a re-render — useful for values you need to track but don't need reflected in the UI (timers, previous values, DOM nodes).

## Custom Hooks

Extract reusable stateful logic out of components.

```jsx
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// Usage
function SearchBox() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  // fires the API call only once debouncedQuery stops changing
}
```

## `useReducer` for Complex State

When state logic involves multiple sub-values or complex transitions, `useReducer` is clearer than several `useState` calls.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: "increment" });
```

## Render Props & Higher-Order Components (Legacy but still asked)

```jsx
// Higher-Order Component — wraps a component to add behavior
function withLoading(Component) {
  return function WrappedComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
}
```
Modern React largely replaces these patterns with **custom hooks**, but they're still common in interview questions and older codebases.

## Error Boundaries

Catch JavaScript errors in child components and show a fallback UI instead of crashing the whole app.

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}
```
Note: Error Boundaries must still be class components — there's no hook equivalent yet.

## Concurrent React — `useTransition` & `useDeferredValue`

```jsx
function SearchResults({ query }) {
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState([]);

  function handleChange(value) {
    startTransition(() => {
      setResults(expensiveFilter(value)); // marked as "low priority"
    });
  }
}
```
`startTransition` tells React "this update can be interrupted" — keeping the UI responsive (e.g. keystrokes still feel instant) while a slower update happens in the background.

## Reconciliation & Keys (Deep Dive)

React compares elements by **type and key** during diffing, not by index by default when keys are provided.

```jsx
// ❌ Using array index as key can cause bugs when list order changes
{items.map((item, i) => <Item key={i} {...item} />)}

// ✅ Use a stable, unique identifier
{items.map((item) => <Item key={item.id} {...item} />)}
```
Using index as key can cause React to reuse the wrong DOM node/state when items are reordered, inserted, or removed.

## Common Interview Questions

**Q1. When would you use `useMemo` vs `useCallback`?**
`useMemo` memoizes a computed *value*; `useCallback` memoizes a *function reference* — both to avoid unnecessary recalculation/re-renders of children.

**Q2. Why is using an array index as a `key` sometimes problematic?**
If the list order changes (items inserted, removed, reordered), React can misattribute state/DOM nodes to the wrong items, causing UI bugs.

**Q3. What's the difference between `useState` and `useRef` for storing a value?**
Updating state triggers a re-render; updating a ref does not — refs are for values you need to persist without affecting the render output.

**Q4. What problem does `useTransition` solve?**
It lets you mark certain state updates as non-urgent, so React can keep high-priority updates (like typing) responsive while slower updates happen in the background.

## 🧠 Mini Quiz

1. Does updating a `useRef` value cause a re-render?
2. What does `React.memo` do?
3. Why should you avoid using array index as a `key` in dynamic lists?
4. What must Error Boundaries be built as (function or class components)?

---