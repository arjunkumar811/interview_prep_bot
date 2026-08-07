# Express.js Revision

## What is Express.js?

Imagine you own a restaurant.

Customers don't walk into the kitchen.

Instead they talk to the waiter.

```
Customer
    ↓
 Waiter
    ↓
 Kitchen
    ↓
 Waiter
    ↓
Customer
```

The waiter

* takes requests
* gives them to the kitchen
* brings back the response

Express is exactly that waiter.

It receives HTTP requests from clients and sends back responses.

---

## Without Express

If we only use Node.js:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello");
});

server.listen(3000);
```

Everything has to be written manually.

You have to

* check URL
* check request method
* send response
* parse body
* etc.

Lots of work.

---

## With Express

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3000);
```

Much shorter.

Express handles most of the boring work.

---

# Why was Express created?

Node gives us

* HTTP server

That's all.

Express adds

* Routing
* Middleware
* Request parsing
* Response helpers
* Error handling
* Static files
* Easy APIs

---

# Installation

```bash
mkdir myapp

cd myapp

npm init -y

npm install express
```

Project

```
myapp

node_modules/

package.json

server.js
```

---

# Creating Express App

```js
const express = require("express");

const app = express();
```

Think of

```
app

↓

Entire website
```

Everything happens through `app`.

---

# Starting Server

```js
app.listen(3000, () => {
    console.log("Server Started");
});
```

Output

```
Server Started
```

Visit

```
localhost:3000
```

---

# What is a Route?

Suppose

```
Amazon

/

Homepage

/products

Products

/login

Login

/cart

Cart

/profile

Profile
```

Each URL is called a **route**.

Express lets us define them.

```js
app.get("/", (req, res)=>{
    res.send("Home");
});

app.get("/about",(req,res)=>{
    res.send("About");
});
```

---

# HTTP Methods

Imagine a notebook.

You can

Read

Write

Update

Delete

HTTP does the same.

| Method | Meaning |
| ------ | ------- |
| GET    | Read    |
| POST   | Create  |
| PUT    | Replace |
| PATCH  | Update  |
| DELETE | Delete  |

This is called **CRUD**.

---

# GET Request

Client asks for data.

```
Browser

↓

GET /users

↓

Server

↓

Users List
```

```js
app.get("/users",(req,res)=>{
    res.send("All Users");
});
```

---

# POST Request

Used to create data.

```
POST /users

↓

Create User
```

```js
app.post("/users",(req,res)=>{
    res.send("User Created");
});
```

---

# PUT

Replace entire object.

```js
app.put("/users/:id",(req,res)=>{
    res.send("Updated Entire User");
});
```

---

# PATCH

Update only part.

```js
app.patch("/users/:id",(req,res)=>{
    res.send("Updated Age");
});
```

---

# DELETE

```js
app.delete("/users/:id",(req,res)=>{
    res.send("Deleted");
});
```

---

# Request Object (`req`)

Whenever a client sends a request, Express creates a request object.

```
Client

↓

Express

↓

req
```

Contains

* URL
* Method
* Headers
* Body
* Query
* Params

Example

```js
app.get("/", (req,res)=>{
    console.log(req.method);
});
```

Output

```
GET
```

---

# Response Object (`res`)

Used to send data back.

```js
res.send("Hello");
```

or

```js
res.json({
    name:"Arjun"
});
```

or

```js
res.status(404).send("Not Found");
```

---

# Route Parameters

Suppose

```
/users/1

/users/2

/users/10
```

Instead of writing many routes

```js
app.get("/users/:id",(req,res)=>{
    console.log(req.params.id);
});
```

Visit

```
/users/25
```

Output

```
25
```

---

# Query Parameters

```
/search?name=Arjun
```

```js
app.get("/search",(req,res)=>{
    console.log(req.query.name);
});
```

Output

```
Arjun
```

---

# JSON Response

```js
app.get("/user",(req,res)=>{
    res.json({
        name:"Arjun",
        age:20
    });
});
```

Browser

```json
{
  "name":"Arjun",
  "age":20
}
```

---

# Sending Status Code

```js
res.status(200).send("Success");
```

```js
res.status(404).send("Not Found");
```

```js
res.status(500).send("Server Error");
```

---

# Middleware (The Heart of Express)

Imagine airport security.

```
Passenger

↓

Security Check

↓

Board Plane
```

Every passenger goes through security before entering.

Middleware is the security check.

```
Request

↓

Middleware

↓

Route

↓

Response
```

Example

```js
app.use((req,res,next)=>{
    console.log("Request Received");
    next();
});
```

`next()` tells Express:

> "I'm done. Continue to the next middleware or route."

If you don't call `next()` (and don't send a response), the request will hang forever.

---

# Parsing JSON

Client sends

```json
{
   "name":"Arjun"
}
```

Without middleware

```js
req.body
```

is

```
undefined
```

Enable JSON parsing:

```js
app.use(express.json());
```

Now

```js
app.post("/",(req,res)=>{
    console.log(req.body);
});
```

Output

```js
{
 name:"Arjun"
}
```

---

# Static Files

Suppose

```
public/

logo.png

style.css
```

```js
app.use(express.static("public"));
```

Now

```
localhost:3000/logo.png
```

works directly.

---

# Real-world Express Flow

```
Browser

↓

GET /products

↓

Express

↓

Middleware

↓

Authentication

↓

Controller

↓

Database

↓

Controller

↓

Response

↓

Browser
```

This is the flow you'll use in real backend projects.

---

# Folder Structure (Simple)

```
project/

server.js

routes/

controllers/

models/

middlewares/

public/

package.json
```

As projects grow, each responsibility gets its own folder.

---

# Common Interview Questions

### 1. What is Express.js?

A minimal and flexible web framework for Node.js that simplifies building web servers and APIs.

---

### 2. Why use Express over Node's `http` module?

Because it provides routing, middleware, request parsing, error handling, and many utilities, reducing boilerplate code.

---

### 3. What is middleware?

A function that runs between receiving a request and sending a response. It can inspect, modify, end the request, or pass control using `next()`.

---

### 4. Difference between `req.params` and `req.query`?

* `req.params` → values from the URL path (e.g., `/users/:id`)
* `req.query` → values after `?` in the URL (e.g., `/search?name=Arjun`)

---

### 5. Difference between `res.send()` and `res.json()`?

* `res.send()` can send strings, HTML, buffers, or objects.
* `res.json()` is specifically for sending JSON and automatically sets the `Content-Type` to `application/json`.

---

## Quick Revision Cheatsheet

```js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/users", (req, res) => {
  res.json(req.body);
});

app.get("/users/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/search", (req, res) => {
  res.send(req.query.name);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---
