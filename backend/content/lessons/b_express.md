## What is Express.js?

Imagine you are building a house (a web server).

Using raw Node.js is like building the house from scratch.
You have to chop the wood, mix the cement, and forge the nails yourself.

```typescript
// Raw Node.js
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }
});
```
It takes too much time just to do simple things.

## The Express Way

Express.js is like buying a pre-fabricated house.
The walls, doors, and roof are already built. You just place your furniture inside.

```typescript
// Express.js
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

Express is a fast, unopinionated, minimalist web framework for Node.js. It makes routing and handling requests extremely easy.

## How Routing Works

A Router is a traffic cop.

When a request arrives, the router checks two things:
1. HTTP Method (GET, POST, PUT, DELETE)
2. Path (`/users`, `/products`)

Request: GET /users
│
▼
Router checks rules...
│
├── GET /products ❌ Ignored
├── POST /users   ❌ Ignored
└── GET /users    ✅ Matches!
      │
      ▼
 Sends Response: [User1, User2]

## Understanding Middleware

Middleware is the most important concept in Express.

Imagine a secure office building.

Visitor (Request)
│
▼
Security Check (Middleware 1: Is user logged in?)
│
▼
Metal Detector (Middleware 2: Is data safe?)
│
▼
Office Room (Final Route: Saves data to DB)
│
▼
Response sent back to Visitor

Middleware are functions that run **between** the request and the final route.

## Code Example

```typescript
import express from 'express';
const app = express();

// Middleware: Runs for EVERY request
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // Move to the next function
});

// Route
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.listen(3000, () => console.log('Server running!'));
```

## Common Mistakes

❌ **Forgetting `next()` in Middleware**
```typescript
app.use((req, res, next) => {
  console.log("Checking user...");
  // Forgot next()!
});
```
If you forget `next()`, the request hangs forever. The user just sees a loading spinner!

❌ **Wrong Error Handling placement**
Error handling middleware must always be placed at the very end of your file, after all other `app.use()` and routes.

## Interview Questions

**Q1. What is Express.js?**
**Answer:** It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

**Q2. What is Middleware?**
**Answer:** Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` middleware function in the application's request-response cycle. They can execute code, modify requests, end responses, or call `next()`.

**Q3. How do you handle 404 errors in Express?**
**Answer:** By adding a catch-all middleware at the very end of your routes that sends a 404 response.

## Key Takeaways

• Express makes building Node.js servers faster and cleaner.
• Routing directs HTTP traffic based on URL and Method.
• Middleware runs in the middle of a request to modify it or block it.
• Always remember to call `next()` in your middleware!
