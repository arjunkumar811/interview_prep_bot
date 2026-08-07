⏳ **Estimated Learning Time:** 10-15 min

## 🤔 What is API Integration?

This is how your React frontend actually talks to a backend (like the Express APIs from your backend notes) — sending requests and displaying the response.

```
React App
   │
   ▼
fetch() / axios
   │
   ▼
Backend API (Express)
   │
   ▼
Database
```

## Fetching Data with `fetch`

```jsx
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

Always handle **three states**: loading, error, and success — a common interview expectation.

## Axios (a popular alternative to `fetch`)

```js
import axios from "axios";

const res = await axios.get("/api/users");
console.log(res.data); // axios auto-parses JSON

await axios.post("/api/users", { name: "Arjun" });
```
Axios advantages over `fetch`: automatic JSON parsing, easier error handling (`fetch` doesn't reject on 404/500 by default), built-in request/response interceptors, and easier request cancellation.

## Sending Data (POST/PUT/DELETE)

```js
await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Arjun", email: "a@gmail.com" }),
});
```

## Attaching Auth Tokens

```js
await fetch("/api/profile", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

## React Query / TanStack Query

Manually managing loading/error/caching for every API call gets repetitive. React Query handles it automatically.

```jsx
import { useQuery } from "@tanstack/react-query";

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return <ul>{data.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}
```
Benefits: automatic caching, background refetching, deduplication of duplicate requests, and built-in loading/error states.

## Handling Race Conditions

If a user types quickly in a search box, older slow requests might resolve *after* newer ones, showing stale results. Solutions: `AbortController` to cancel in-flight requests, or letting a library like React Query handle it automatically.

```js
useEffect(() => {
  const controller = new AbortController();
  fetch(`/api/search?q=${query}`, { signal: controller.signal });
  return () => controller.abort(); // cancel on cleanup
}, [query]);
```

## Common Interview Questions

**Q1. What three UI states should you always handle when fetching data?**
Loading, error, and success (data available).

**Q2. Difference between `fetch` and `axios`?**
`fetch` is a native browser API with more manual work (e.g. parsing JSON, handling non-2xx errors); `axios` is a library with automatic JSON parsing, better error handling, and interceptors.

**Q3. What problem does React Query solve compared to manual `useEffect` + `useState` fetching?**
It automatically handles caching, refetching, deduplication, and loading/error state — removing a lot of repetitive boilerplate.

**Q4. What is a race condition in API calls, and how can you prevent it?**
When a slower, outdated request resolves after a newer one, showing stale data. Prevented using `AbortController` or a data-fetching library that handles request cancellation.

## 🧠 Mini Quiz

1. What three states should a data-fetching component typically manage?
2. Name one advantage `axios` has over plain `fetch`.
3. What does `AbortController` help prevent?
4. What does React Query automatically handle that manual `fetch` + `useState` does not?

---