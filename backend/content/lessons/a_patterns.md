⏳ **Estimated Learning Time:** 10-15 min

## 🤔 What are Design Patterns?

Reusable, proven solutions to common software problems — a shared vocabulary engineers use to describe a design without re-explaining it from scratch.

## Backend-Relevant Patterns

### 1. Singleton
Only one instance of something exists — e.g., one shared database connection.
```js
let instance;
function getDBConnection() {
  if (!instance) instance = createConnection();
  return instance;
}
```

### 2. Factory
A function that creates objects without exposing the exact creation logic.
```js
function createUser(type) {
  if (type === "admin") return new AdminUser();
  return new RegularUser();
}
```

### 3. Observer (Pub/Sub)
Objects "subscribe" to events and get notified automatically — this is exactly how Node's `EventEmitter` and Pub/Sub systems work.

### 4. Strategy
Swap out an algorithm at runtime.
```
Payment
  ├── StripeStrategy
  ├── PaypalStrategy
  └── RazorpayStrategy
```

### 5. Middleware / Chain of Responsibility
A request passes through a chain of handlers, each deciding to process it or pass it along — literally how Express middleware works.

```
Request → Logger → Auth Check → Rate Limiter → Route Handler
```

### 6. Repository Pattern
Separates business logic from database logic.
```
Controller ──► Service ──► Repository ──► Database
```
This means you can swap MongoDB for PostgreSQL without touching your business logic.

### 7. Circuit Breaker
Stops calling a failing service repeatedly, to prevent cascading failures (see Resiliency, Lesson 29).

## Real World Example

An e-commerce checkout uses several patterns together:
```
Route (Express Middleware Pattern)
  ↓
Controller
  ↓
PaymentService (Strategy Pattern — chooses Stripe/PayPal)
  ↓
OrderRepository (Repository Pattern — talks to DB)
  ↓
EventEmitter (Observer Pattern — notifies Email/Inventory services)
```

## 🧠 Mini Quiz

1. Which pattern does Express middleware implement?
2. What problem does the Repository pattern solve?
3. Which pattern would you use to support multiple payment providers?

---