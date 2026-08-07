# REST APIs

## What is an API?

API = **Application Programming Interface**

Think of an API as a **waiter in a restaurant**.

```
Customer
    |
    | Order
    v
 Waiter (API)
    |
    | Talks to kitchen
    v
 Kitchen (Server + Database)

```

The customer never enters the kitchen.

Similarly,

```
Frontend
   |
HTTP Request
   |
Backend API
   |
Database
```

The frontend never talks directly to the database.

---

# What is REST?

REST stands for

> **Representational State Transfer**

It is **not a language**
It is **not a framework**

It is a **set of architectural rules** for designing APIs.

Example

```
GET /users
```

means

> Give me users.

Instead of

```
/getUsersDataNow
```

REST keeps URLs simple.

---

# Why REST?

Without REST

```
/getAllUsers
/createNewUser
/removeUser
/updateExistingUser
```

Everyone creates APIs differently.

REST standardizes everything.

---

# REST Principles

There are **6 principles**.

---

## 1. Client-Server Architecture

Frontend and backend are separate.

```
React
   |
   |
Express
   |
MongoDB
```

Frontend doesn't know how MongoDB works.

Backend doesn't care whether frontend is React, Flutter, or iOS.

---

## 2. Stateless

Every request should contain everything needed.

Bad

```
Request 1:
Login

Request 2:
Get Profile

Server:
Hmm...
Who are you?
```

Good

```
Authorization: Bearer JWT_TOKEN
```

Every request carries authentication.

The server never remembers previous requests.

Example

```
GET /profile

Headers

Authorization:
Bearer xxxxx
```

---

## 3. Cacheable

If data rarely changes,

Server can say

```
Cache-Control:
max-age=3600
```

Browser stores it.

Next request

```
Uses cache

No database call
```

Faster.

---

## 4. Uniform Interface

Resources should have consistent URLs.

Good

```
GET /users
POST /users
GET /users/5
PUT /users/5
DELETE /users/5
```

Bad

```
/createUser
/fetchUsers
/removeUser
/updateUserNow
```

---

## 5. Layered System

```
Client

↓

API Gateway

↓

Backend

↓

Database
```

The client doesn't know how many layers exist.

---

## 6. Code on Demand (Optional)

Sometimes the server sends executable code (like JavaScript) to the client.

Rarely used in modern REST APIs.

---

# Resource

REST is based on **resources**.

Examples

```
User
Product
Order
Comment
Blog
```

Each has a URL.

```
/users
/products
/orders
```

---

# HTTP Methods

These are the most important interview questions.

---

## GET

Read data.

```
GET /users
```

Returns

```
[
 {id:1},
 {id:2}
]
```

---

## POST

Create data.

```
POST /users
```

Body

```json
{
"name":"Arjun"
}
```

Creates a new user.

---

## PUT

Replace the whole resource.

Suppose

```
User

{
name:"Arjun",
age:20
}
```

Request

```
PUT /users/1

{
name:"Rahul"
}
```

Now

```
{
name:"Rahul"
}
```

`age` is gone because the entire resource was replaced.

---

## PATCH

Update only selected fields.

```
PATCH /users/1

{
age:21
}
```

Now

```
{
name:"Arjun",
age:21
}
```

Only `age` changed.

---

## DELETE

Remove resource.

```
DELETE /users/1
```

---

# CRUD Mapping

| CRUD   | HTTP Method |
| ------ | ----------- |
| Create | POST        |
| Read   | GET         |
| Update | PUT / PATCH |
| Delete | DELETE      |

---

# HTTP Status Codes

## 200 OK

Everything succeeded.

---

## 201 Created

Resource created.

Example

```
POST /users
```

Returns

```
201 Created
```

---

## 204 No Content

Success but nothing returned.

Common for DELETE.

---

## 400 Bad Request

Client sent invalid data.

```
Missing email
```

---

## 401 Unauthorized

User is not authenticated.

No JWT.

---

## 403 Forbidden

Logged in,

but no permission.

Example

```
Student

tries

DELETE /admin/users
```

---

## 404 Not Found

```
GET /users/9999
```

No user exists.

---

## 409 Conflict

Duplicate data.

```
Email already exists
```

---

## 500 Internal Server Error

Backend crashed.

---

# Request Structure

```
POST /users HTTP/1.1

Headers

Authorization:
Bearer TOKEN

Content-Type:
application/json

Body

{
"name":"Arjun"
}
```

---

# Response Structure

```
Status: 201

Headers

Content-Type:
application/json

Body

{
"id":1,
"name":"Arjun"
}
```

---

# URL Parameters

```
GET /users/5
```

Express

```javascript
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
});
```

Output

```
5
```

---

# Query Parameters

```
GET /users?page=2&limit=10
```

Express

```javascript
req.query.page
req.query.limit
```

Output

```
2
10
```

---

# Request Body

```
POST /users
```

```json
{
"name":"Arjun",
"age":20
}
```

Express

```javascript
req.body.name
```

---

# Headers

Example

```
Authorization

Bearer JWT
```

Read in Express

```javascript
req.headers.authorization
```

---

# Idempotency

A favorite interview topic.

An operation is **idempotent** if calling it multiple times has the same final effect as calling it once.

| Method | Idempotent?   | Why                                                             |
| ------ | ------------- | --------------------------------------------------------------- |
| GET    | ✅             | Doesn't change data                                             |
| PUT    | ✅             | Replacing with the same data keeps the result the same          |
| DELETE | ✅             | Deleting an already deleted resource leaves the resource absent |
| PATCH  | ⚠️ Usually no | Depends on the update                                           |
| POST   | ❌             | Creates a new resource each time                                |

Example:

```
DELETE /users/5
```

Calling it 10 times still results in **user 5 being deleted**.

---

# REST URL Best Practices

✅ Good

```
/users
/users/1
/orders
/orders/50/items
```

❌ Bad

```
/getUsers
/deleteUser
/createUser
```

Use **nouns** for resources and let the HTTP method describe the action.

---

# Express Example

```javascript
const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json(["Arjun", "Rahul"]);
});

app.post("/users", (req, res) => {
  res.status(201).json(req.body);
});

app.put("/users/:id", (req, res) => {
  res.json({
    id: req.params.id,
    updated: req.body,
  });
});

app.delete("/users/:id", (req, res) => {
  res.status(204).send();
});

app.listen(3000);
```

---

# REST API Flow

```
React
   │
   │ POST /users
   ▼
Express Route
   │
   ▼
Controller
   │
   ▼
Service (Business Logic)
   │
   ▼
Database
   │
   ▼
Response
   │
   ▼
React UI
```

---

# Common REST API Interview Questions

### 1. What is REST?

A set of architectural principles for designing scalable web APIs using HTTP methods and resources.

---

### 2. Difference between PUT and PATCH?

* **PUT:** Replaces the entire resource.
* **PATCH:** Updates only specific fields.

---

### 3. Difference between GET and POST?

* **GET:** Retrieves data, should not modify server state.
* **POST:** Creates a new resource or submits data for processing.

---

### 4. Why is REST stateless?

Because every request contains all the information needed to process it (such as authentication), allowing the server to scale more easily.

---

### 5. What is idempotency?

An idempotent request produces the same final state even if it is executed multiple times.

---

### 6. What are the most common HTTP status codes?

* 200 OK
* 201 Created
* 204 No Content
* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 409 Conflict
* 500 Internal Server Error

---

# Quick Revision Cheat Sheet

```
REST = Architectural style for APIs

API = Communication between applications

CRUD
------
Create → POST
Read   → GET
Update → PUT / PATCH
Delete → DELETE

Request
--------
URL
Headers
Query
Params
Body

Response
---------
Status Code
Headers
Body

Common Status Codes
-------------------
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
500 Internal Server Error

REST Principles
---------------
✓ Client-Server
✓ Stateless
✓ Cacheable
✓ Uniform Interface
✓ Layered System
✓ Code on Demand (Optional)
```

### Practice Questions

Try answering these without looking:

1. Why is REST called **stateless**?
2. What is the difference between **PUT** and **PATCH**?
3. When would you use **query parameters** instead of **URL parameters**?
4. Why is **GET** considered idempotent?
5. Explain the complete flow of a request from **React → Express → Database → React**.
6. What is the difference between **401 Unauthorized** and **403 Forbidden**?
