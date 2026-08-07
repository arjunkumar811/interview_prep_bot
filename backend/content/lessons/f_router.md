⏳ **Estimated Learning Time:** 10-15 min

## 🤔 What is React Router?

By default, a React app is a **Single Page Application (SPA)** — there's only one HTML page. React Router lets you simulate multiple "pages" (URLs) without a full page reload.

```
Without Router: every link click → full page reload → slow
With Router:    URL changes → React swaps components → instant, no reload
```

## Basic Setup

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Navigation

```jsx
import { Link, useNavigate } from "react-router-dom";

// Declarative navigation
<Link to="/about">About</Link>

// Programmatic navigation (e.g. after form submit)
const navigate = useNavigate();
function handleLogin() {
  // ...login logic
  navigate("/dashboard");
}
```

Why `<Link>` instead of `<a href>`? A regular `<a>` tag causes a full page reload; `<Link>` intercepts the click and updates the page instantly using JavaScript.

## Route Parameters

```
/users/5
```
```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <p>Viewing user {id}</p>;
}
```

## Query Parameters

```
/search?query=react
```
```jsx
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query"); // "react"
}
```

## Nested Routes & Layouts

```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="settings" element={<Settings />} />
  <Route path="profile" element={<Profile />} />
</Route>
```
```jsx
// DashboardLayout.jsx
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet /> {/* renders the matching nested route here */}
    </div>
  );
}
```

## Protected Routes

```jsx
function ProtectedRoute({ children }) {
  const isLoggedIn = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

## Common Interview Questions

**Q1. Why use `<Link>` instead of `<a href>`?**
`<Link>` prevents a full page reload, updating only the necessary components — preserving the SPA experience and app state.

**Q2. How do you read a dynamic route parameter like `/users/:id`?**
Using the `useParams()` hook.

**Q3. What does `<Outlet />` do?**
Renders the matching child/nested route's component inside a parent layout.

**Q4. How would you implement a protected route?**
Wrap the route's element in a component that checks authentication status and redirects to a login page (e.g. via `<Navigate>`) if the user isn't authenticated.

## 🧠 Mini Quiz

1. What problem does React Router solve in a Single Page Application?
2. Which hook do you use to read `/users/:id`'s `id` value?
3. What does `useSearchParams` read from the URL?
4. How is `<Link to="/about">` different from `<a href="/about">`?

---