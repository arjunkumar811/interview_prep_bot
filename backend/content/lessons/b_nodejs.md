# 🚀 Node.js Review — Lesson 1

## 🤔 What is Node.js?

Imagine you know JavaScript.

Normally JavaScript runs inside a browser.

```
JavaScript
      ↓
Chrome
Firefox
Edge
```

But what if you want JavaScript to:

* Read files 📄
* Create a web server 🌐
* Connect to a database 🗄️
* Send emails 📧
* Build APIs 🔥

Browsers **don't allow** JavaScript to do these things directly.

So Node.js was created.

---

# Simple Definition

> **Node.js is a runtime that allows JavaScript to run outside the browser.**

It lets JavaScript access your computer's operating system.

```
JavaScript
      ↓
Node.js Runtime
      ↓
Operating System
      ↓
Files
Network
Database
Processes
```

---

# Real World Example

Imagine JavaScript is a chef.

Inside a browser:

```
👨‍🍳 Chef
Only allowed to cook.
```

Inside Node.js:

```
👨‍🍳 Chef
Can cook
Can deliver food
Can buy ingredients
Can manage the restaurant
```

Node gives JavaScript many new powers.

---

# Without Node.js

```
JavaScript
     ↓
Browser
```

Can do:

✅ Buttons

✅ Animations

✅ Forms

❌ Cannot create a server

❌ Cannot access local files freely

❌ Cannot connect directly to databases

---

# With Node.js

```
JavaScript
      ↓
Node.js
      ↓
Operating System
```

Can do:

✅ Read files

✅ Write files

✅ Create servers

✅ Connect MongoDB

✅ Run background jobs

✅ Build APIs

---

# Why Do Companies Use Node.js?

Because one language can be used everywhere.

```
Frontend
↓

JavaScript

Backend
↓

JavaScript
```

No need to learn another backend language like Java or C# if you're building with Node.js.

---

# Example

Create a file named

```
hello.js
```

Write

```javascript
console.log("Hello Node!");
```

Run

```bash
node hello.js
```

Output

```
Hello Node!
```

The code ran **without a browser**.

---

# Another Example

```javascript
const age = 20;

console.log(age);
```

Output

```
20
```

Again, no browser needed.

---

# How Node.js Works

```
Your Code
      ↓
Node.js Runtime
      ↓
V8 Engine
      ↓
Machine Code
      ↓
CPU
```

### What is the V8 Engine?

Google created the **V8 JavaScript engine** for Chrome.

Node.js uses that same engine to execute JavaScript quickly.

---

# Node.js Is Not

❌ A programming language

❌ A framework

❌ A database

It is a **JavaScript runtime environment**.

---

# Where Is Node.js Used?

* REST APIs
* Backend servers
* Authentication systems
* Chat applications
* Telegram bots
* Discord bots
* CLI tools
* Real-time apps
* Streaming services

---

# Quick Recap

✅ JavaScript normally runs in a browser.

✅ Node.js lets JavaScript run outside the browser.

✅ Node.js can access the operating system.

✅ Node.js uses Google's V8 engine.

✅ Node.js is a runtime, not a programming language.

---

# 🧠 Mini Quiz (No Cheating!)

### 1. What is Node.js?

A. Programming language

B. Runtime environment

C. Browser

D. Database

---

### 2. Which engine executes JavaScript in Node.js?

A. SpiderMonkey

B. Chakra

C. V8

D. Java Engine

---

### 3. Which of these can Node.js do?

A. Read files

B. Create servers

C. Connect to databases

D. All of the above

---

### 4. True or False:

JavaScript can run outside the browser using Node.js.
