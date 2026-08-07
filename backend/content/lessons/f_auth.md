⏳ **Estimated Learning Time:** 10-15 min

## 🤔 Authentication on the Frontend

*(Builds directly on Lesson 4 — Authentication from your backend notes)*

The backend issues a JWT after login — the frontend's job is to store it safely, attach it to future requests, and protect certain pages/routes.

```
Login Form
   │
   ▼
POST /login (email + password)
   │
   ▼
Backend verifies → returns JWT
   │
   ▼
Frontend stores the token
   │
   ▼
Every future request includes:
Authorization: Bearer <token>
```

## Where to Store the Token?

| Storage | Pros | Cons |
|---|---|---|
| `localStorage` | Simple, persists across tabs/refresh | Vulnerable to XSS attacks (accessible via JS) |
| `httpOnly` Cookie | Not accessible to JavaScript — safer against XSS | Requires backend to set it; needs CSRF protection |
| In-memory (React state) | Safest against XSS | Lost on page refresh |

Most production apps favor an `httpOnly` cookie for the main token, sometimes paired with a short-lived token kept in memory.

## Auth Context Pattern

```jsx
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setUser(data.user);
    localStorage.setItem("token", data.token);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

## Protected Routes (ties into Lesson 7 — React Router)

```jsx
function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}
```

## Attaching Tokens Automatically (Axios Interceptor)

```js
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

## Access Token & Refresh Token Flow

```
Access Token  → short-lived (e.g. 15 min), used for every request
Refresh Token → long-lived, used ONLY to request a new access token
```
```
Access token expires
        │
        ▼
Frontend silently calls /refresh with the refresh token
        │
        ▼
Backend issues a new access token
        │
        ▼
Original request retried automatically
```
This avoids forcing the user to log in again every 15 minutes while still limiting how long a stolen access token stays valid.

## Common Interview Questions

**Q1. Where should you store a JWT on the frontend, and what are the trade-offs?**
`localStorage` is simple but vulnerable to XSS; `httpOnly` cookies are safer against XSS but need CSRF protection and backend cookie support.

**Q2. How do you protect a route so only logged-in users can access it?**
Check authentication state (e.g. via Context) and redirect unauthenticated users using something like React Router's `<Navigate>`.

**Q3. What's the purpose of a refresh token?**
To silently obtain a new short-lived access token without forcing the user to log in again, while limiting the exposure window of a stolen access token.

## 🧠 Mini Quiz

1. What's a security risk of storing a JWT in `localStorage`?
2. What does an `httpOnly` cookie protect against?
3. What's the difference between an access token and a refresh token?
4. What HTTP header typically carries the JWT on outgoing requests?

---