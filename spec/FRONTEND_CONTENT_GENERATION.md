# 🚀 Frontend Development — Complete Revision Guide

*Interview-focused, beginner → advanced, with real-world examples, diagrams, code, and quizzes — same style as your backend notes.*

---

# 1. HTML

## 🤔 What is HTML?

Imagine building a house. Before you paint the walls or add furniture, you need the **structure** — walls, doors, rooms. That structure is HTML.

> **HTML (HyperText Markup Language) is the standard language used to structure content on the web — text, images, links, forms, and more.**

```
HTML  → Structure (skeleton of the house)
CSS   → Style (paint, furniture)
JS    → Behavior (doors that open, lights that turn on)
```

HTML is **not a programming language** — it has no logic, loops, or conditions. It only describes structure using **tags**.

## Basic Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

* `<!DOCTYPE html>` — tells the browser this is HTML5
* `<html>` — root element
* `<head>` — metadata (title, links to CSS, SEO tags) — not visible on the page
* `<body>` — the visible content

## Common Tags

| Tag | Purpose |
|---|---|
| `<h1>` – `<h6>` | Headings (h1 = biggest/most important) |
| `<p>` | Paragraph |
| `<a href="...">` | Link |
| `<img src="..." alt="...">` | Image |
| `<ul>` / `<ol>` / `<li>` | Unordered / ordered list / list item |
| `<div>` | Generic block container (no meaning) |
| `<span>` | Generic inline container (no meaning) |
| `<button>` | Clickable button |
| `<input>` | Form field |
| `<table>` | Tabular data |

## Semantic HTML

Semantic tags describe **meaning**, not just appearance — this matters for SEO and accessibility.

```html
<!-- ❌ Non-semantic -->
<div class="header">...</div>
<div class="nav">...</div>

<!-- ✅ Semantic -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<footer>...</footer>
```

Why it matters:
* Screen readers understand `<nav>` as navigation automatically
* Search engines rank semantic pages better
* Code is easier for other developers to read

## Forms in HTML

```html
<form action="/submit" method="POST">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Password</label>
  <input type="password" id="password" name="password" required />

  <button type="submit">Login</button>
</form>
```

* `method="GET"` — data sent in the URL (used for searches)
* `method="POST"` — data sent in the request body (used for sensitive/large data)

## Accessibility (a11y) Basics

* Always use `alt` text on images (screen readers read it aloud)
* Use `<label>` linked to inputs via `for`/`id`
* Use semantic tags instead of only `<div>`s
* Ensure sufficient color contrast (this is more CSS, but starts with structure)

## Common Interview Questions

**Q1. What is the difference between `<div>` and `<span>`?**
`<div>` is a block-level element (takes a full new line); `<span>` is inline (stays within the text flow).

**Q2. What is semantic HTML and why does it matter?**
Tags that convey meaning (`<header>`, `<article>`, `<footer>`) instead of generic containers — improves SEO, accessibility, and code readability.

**Q3. Difference between `id` and `class`?**
`id` must be unique on the page (used once); `class` can be reused on many elements.

**Q4. What does the `alt` attribute do?**
Provides alternate text for an image, read by screen readers and shown if the image fails to load.

## 🧠 Mini Quiz

1. What does HTML stand for?
2. Which tag is used for the most important heading on a page?
3. Name two semantic HTML tags.
4. What's the difference between `GET` and `POST` in a form's `method` attribute?

---

# 2. CSS

## 🤔 What is CSS?

If HTML is the skeleton of a house, **CSS (Cascading Style Sheets)** is the paint, furniture, and layout — it controls how everything *looks*.

```
HTML: <p>Hello</p>
CSS:  p { color: blue; font-size: 20px; }
Result: "Hello" appears in blue, size 20px
```

## Ways to Add CSS

```html
<!-- Inline -->
<p style="color: red;">Hello</p>

<!-- Internal -->
<style>
  p { color: red; }
</style>

<!-- External (best practice) -->
<link rel="stylesheet" href="styles.css" />
```

## Selectors

```css
p { }              /* all <p> tags */
.card { }          /* elements with class="card" */
#header { }        /* element with id="header" */
div p { }          /* <p> inside a <div> (descendant) */
div > p { }        /* <p> that is a direct child of <div> */
a:hover { }        /* <a> when hovered */
input:focus { }    /* input when focused */
```

## The Box Model

Every HTML element is a box made of 4 layers:

```
┌─────────────────────────────┐
│           Margin             │  (space outside the box)
│  ┌─────────────────────────┐ │
│  │         Border           │ │
│  │  ┌─────────────────────┐ │ │
│  │  │      Padding         │ │ │
│  │  │  ┌─────────────────┐│ │ │
│  │  │  │     Content      ││ │ │
│  │  │  └─────────────────┘│ │ │
│  │  └─────────────────────┘ │ │
│  └─────────────────────────┘ │
└─────────────────────────────┘
```

```css
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  box-sizing: border-box; /* width includes padding+border */
}
```

## Flexbox — 1-Dimensional Layout

```css
.container {
  display: flex;
  justify-content: center;  /* horizontal alignment */
  align-items: center;      /* vertical alignment */
  gap: 10px;
}
```

```
display: flex (row by default)
┌──────────────────────────────┐
│  [Box1]  [Box2]  [Box3]      │
└──────────────────────────────┘
```

## Grid — 2-Dimensional Layout

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
```

```
┌───────┬───────┬───────┐
│ Item1 │ Item2 │ Item3 │
├───────┼───────┼───────┤
│ Item4 │ Item5 │ Item6 │
└───────┴───────┴───────┘
```

Flexbox = great for a single row/column (navbars, button groups).
Grid = great for full page layouts (dashboards, image galleries).

## Positioning

```css
position: static;    /* default, normal flow */
position: relative;  /* offset from its normal position */
position: absolute;  /* removed from flow, positioned relative to nearest positioned ancestor */
position: fixed;     /* stays fixed relative to the browser window (e.g. sticky navbar) */
position: sticky;    /* toggles between relative and fixed based on scroll */
```

## Responsive Design (Media Queries)

```css
/* Default: mobile styles */
.container { flex-direction: column; }

/* Tablet and up */
@media (min-width: 768px) {
  .container { flex-direction: row; }
}
```

This is called **Mobile-First Design** — you design for small screens first, then add rules for bigger ones.

## Specificity (What Wins?)

```
Inline style       > #id      > .class     > element
style="color:red"  > #header  > .text      > p
```

If two rules conflict, the more specific selector wins.

## Common Interview Questions

**Q1. Difference between `display: none` and `visibility: hidden`?**
`display: none` removes the element completely (no space taken); `visibility: hidden` hides it but still reserves its space.

**Q2. What is `box-sizing: border-box` used for?**
It makes `width`/`height` include padding and border, so elements don't unexpectedly grow.

**Q3. Flexbox vs Grid — when to use which?**
Flexbox for one-dimensional layouts (a row or column); Grid for two-dimensional layouts (rows AND columns at once).

**Q4. What is CSS specificity?**
The set of rules that determines which CSS rule applies when multiple rules target the same element.

## 🧠 Mini Quiz

1. What are the four layers of the box model, from inside to outside?
2. What's the difference between Flexbox and Grid?
3. What does `position: sticky` do?
4. Why is "mobile-first" a common approach to responsive design?

---

# 3. JavaScript (ES6+)

## 🤔 What is JavaScript?

JavaScript is the **behavior** layer of the web — it makes pages interactive: button clicks, form validation, animations, fetching data.

```
HTML: Structure
CSS:  Style
JS:   Behavior (the only one of the three that can "think" and "react")
```

## `var` vs `let` vs `const`

```js
var a = 1;   // function-scoped, avoid using in modern JS
let b = 2;   // block-scoped, can be reassigned
const c = 3; // block-scoped, cannot be reassigned
```

```js
{
  let x = 10;
}
console.log(x); // ❌ Error — x doesn't exist outside the block
```

`const` doesn't mean "unchangeable" for objects/arrays — it means the *variable binding* can't be reassigned:
```js
const arr = [1, 2, 3];
arr.push(4); // ✅ Works — mutating contents, not reassigning
arr = [5];   // ❌ Error
```

## Arrow Functions

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

Key difference: arrow functions don't have their own `this` — they inherit it from the surrounding scope. This is why they're preferred inside classes and callbacks.

## Destructuring

```js
const user = { name: "Arjun", age: 20 };
const { name, age } = user;

const arr = [1, 2, 3];
const [first, second] = arr;
```

## Spread & Rest

```js
// Spread — expand an array/object
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// Rest — collect remaining values
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3); // 6
```

## Template Literals

```js
const name = "Arjun";
console.log(`Hello, ${name}!`); // Hello, Arjun!
```

## Array Methods (Very Common in Interviews)

```js
const nums = [1, 2, 3, 4, 5];

nums.map(n => n * 2);          // [2, 4, 6, 8, 10] — transform each item
nums.filter(n => n % 2 === 0); // [2, 4]           — keep matching items
nums.reduce((sum, n) => sum + n, 0); // 15          — combine into one value
nums.find(n => n > 3);         // 4                — first matching item
nums.some(n => n > 4);         // true              — does at least one match?
nums.every(n => n > 0);        // true              — do all match?
```

## Promises & Async/Await

```
Synchronous code runs line by line, blocking.
Asynchronous code lets other tasks run while waiting (e.g. for a network response).
```

```js
// Promise
fetch("/api/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await (cleaner syntax for the same thing)
async function getUsers() {
  try {
    const res = await fetch("/api/users");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

## The Event Loop (How JS Handles Async)

```
Call Stack (runs code)
     │
     ▼
Web APIs (setTimeout, fetch — handled by the browser)
     │
     ▼
Callback Queue / Microtask Queue
     │
     ▼
Event Loop pushes tasks back to the Call Stack when it's empty
```

This is why `console.log` order can surprise you:
```js
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Output: 1, 3, 2
```
Even with a 0ms delay, `setTimeout` always waits for the current call stack to finish.

## Closures

A function "remembers" the variables from where it was created, even after that outer function has finished running.

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = counter();
increment(); // 1
increment(); // 2
```

## `==` vs `===`

```js
"5" == 5   // true  (type coercion — converts types before comparing)
"5" === 5  // false (strict — checks type AND value)
```
Always prefer `===` to avoid unexpected bugs.

## Common Interview Questions

**Q1. What's the difference between `let`, `const`, and `var`?**
`var` is function-scoped and hoisted (can lead to bugs); `let`/`const` are block-scoped; `const` can't be reassigned.

**Q2. What is a closure?**
A function that retains access to variables from its outer scope even after that outer function has returned.

**Q3. What's the difference between `map` and `forEach`?**
`map` returns a new array with transformed values; `forEach` just runs a function on each item and returns `undefined`.

**Q4. Explain the Event Loop in simple terms.**
JavaScript runs on a single thread; the Event Loop lets async operations (like `fetch`) run in the background and pushes their callbacks onto the call stack only once it's empty, giving the illusion of concurrency.

**Q5. What is the difference between `null` and `undefined`?**
`undefined` means a variable was declared but never assigned a value; `null` is an intentional "no value" assigned by the developer.

## 🧠 Mini Quiz

1. What's the output of `"5" == 5` vs `"5" === 5`?
2. What does the spread operator (`...`) do?
3. What is a closure?
4. Which array method transforms every item and returns a new array?
5. Why does `setTimeout(fn, 0)` not run immediately?

---

# 4. TypeScript

## 🤔 What is TypeScript?

Imagine JavaScript is a form with no field labels — you can type anything anywhere, and mistakes are only caught when the app crashes.

TypeScript adds **labels** (types) to that form, catching mistakes *before* you even run the code.

> **TypeScript is a superset of JavaScript that adds static typing — every valid JavaScript file is also valid TypeScript, but TypeScript adds type-checking on top.**

```
TypeScript
    ↓ (compiles to)
JavaScript
    ↓ (runs in)
Browser / Node.js
```

## Basic Types

```ts
let age: number = 20;
let name: string = "Arjun";
let isAdmin: boolean = false;
let tags: string[] = ["a", "b"];
let scores: Array<number> = [1, 2, 3];
```

## Type Inference

You don't always need to write types — TypeScript often figures it out automatically:
```ts
let age = 20; // inferred as number, no annotation needed
age = "20";   // ❌ Error — type 'string' is not assignable to type 'number'
```

## Interfaces & Types

```ts
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // optional field
}

function greet(user: User) {
  console.log(`Hello, ${user.name}`);
}
```

```ts
// type alias — very similar, more flexible (can represent unions, primitives)
type ID = number | string;
type Status = "active" | "inactive" | "banned";
```

`interface` vs `type`: interfaces can be "extended" and merged; types are more flexible for unions and complex compositions. In practice, both are widely used — many teams prefer `interface` for objects and `type` for unions.

## Functions

```ts
function add(a: number, b: number): number {
  return a + b;
}

// Optional and default parameters
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}
```

## Generics

Generics let you write reusable code that works with multiple types while still being type-safe.

```ts
function identity<T>(value: T): T {
  return value;
}

identity<number>(5);      // T = number
identity<string>("hi");   // T = string
```

```ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<User> = {
  data: { id: 1, name: "Arjun", email: "a@gmail.com" },
  success: true,
};
```

## Union & Intersection Types

```ts
type Status = "loading" | "success" | "error"; // union — one of these

type AdminUser = User & { permissions: string[] }; // intersection — combines both
```

## Enums

```ts
enum Role {
  Admin,
  User,
  Guest,
}

const myRole: Role = Role.Admin;
```

## Why TypeScript?

✅ Catches bugs at compile time, not runtime
✅ Autocomplete and IntelliSense in your editor
✅ Self-documenting code (types describe what data looks like)
✅ Safer refactoring in large codebases

## Common Interview Questions

**Q1. What is TypeScript and why use it over plain JavaScript?**
A superset of JavaScript adding static types — it catches type-related bugs before runtime and improves developer tooling (autocomplete, refactoring safety).

**Q2. Difference between `interface` and `type`?**
Interfaces can be extended/merged and are typically used for object shapes; types are more flexible and can represent unions, intersections, and primitives.

**Q3. What are generics used for?**
Writing reusable, type-safe code/components that work across multiple types without losing type information.

**Q4. What does the `?` mean after a property name in an interface?**
It marks the property as optional.

## 🧠 Mini Quiz

1. Is every valid JavaScript file also valid TypeScript?
2. What's the purpose of generics?
3. What does `type Status = "loading" | "success" | "error"` represent?
4. What happens if you try to assign a `string` to a variable typed as `number`?

---

# 5. Git & GitHub

## 🤔 What is Git?

Imagine writing a document and wanting to save every draft, ever — being able to jump back to "the version from 3 days ago" instantly, or see exactly what changed.

> **Git is a version control system that tracks changes to your code over time, letting multiple people collaborate without overwriting each other's work.**

**GitHub** is a cloud platform that hosts Git repositories online, adding collaboration features (pull requests, issues, actions).

```
Git    = the tool that tracks changes (works locally, offline)
GitHub = the website that hosts your Git repositories online
```

## The Three Areas

```
Working Directory  →  Staging Area  →  Repository (committed history)
   (your files)         (git add)         (git commit)
```

## Core Commands

```bash
git init                     # start tracking a new project
git status                   # see what's changed
git add file.js               # stage a specific file
git add .                     # stage everything
git commit -m "message"       # save a snapshot with a message
git log                       # view commit history
```

## Branching

A **branch** is an independent line of development — you can experiment without touching the main codebase.

```
main:      A───B───C
                 \
feature:          D───E
```

```bash
git branch feature/login       # create a branch
git checkout feature/login     # switch to it
git checkout -b feature/login  # create AND switch in one command
git merge feature/login        # merge it back into current branch
```

## Working with GitHub (Remote)

```bash
git remote add origin https://github.com/user/repo.git
git push origin main            # upload commits to GitHub
git pull origin main            # download + merge latest changes
git clone https://github.com/user/repo.git  # copy a repo to your machine
```

## Merge Conflicts

Happen when two branches change the **same line** of the same file.

```
<<<<<<< HEAD
const greeting = "Hello";
=======
const greeting = "Hi";
>>>>>>> feature/login
```
You manually choose (or combine) the correct version, then commit.

## Pull Requests (PRs)

A PR proposes merging your branch into another (usually `main`), letting teammates review the diff before it's merged.

```
Your Branch ──► Pull Request ──► Code Review ──► Approved ──► Merge into main
```

## `.gitignore`

Tells Git which files to never track (e.g. `node_modules`, `.env` secrets):
```
node_modules/
.env
dist/
```

## Useful Everyday Commands

```bash
git diff              # see exact line changes before committing
git stash             # temporarily save uncommitted changes
git reset --soft HEAD~1   # undo last commit, keep changes staged
git revert <commit>   # safely undo a commit by creating a new commit
```

## Common Interview Questions

**Q1. Difference between `git merge` and `git rebase`?**
`merge` combines branches and preserves full history with a merge commit; `rebase` replays your commits on top of another branch, creating a cleaner, linear history.

**Q2. What is a merge conflict, and how do you resolve it?**
It occurs when Git can't automatically combine changes to the same lines; you manually edit the conflicting sections and commit the resolved version.

**Q3. Difference between `git fetch` and `git pull`?**
`fetch` downloads changes from the remote but doesn't merge them; `pull` = `fetch` + `merge` in one step.

**Q4. What does `.gitignore` do?**
Lists files/folders Git should never track (e.g. secrets, dependencies, build output).

## 🧠 Mini Quiz

1. What's the difference between `git add` and `git commit`?
2. What is a branch used for?
3. What causes a merge conflict?
4. What's the purpose of a Pull Request?

---

# 6. React

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

# 7. React Router

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

# 8. Tailwind CSS

## 🤔 What is Tailwind CSS?

Instead of writing custom CSS classes and switching files back and forth, Tailwind gives you small, single-purpose **utility classes** you apply directly in your HTML/JSX.

```
Traditional CSS                      Tailwind
────────────────                     ────────
.card {                              <div class="p-4 rounded-lg
  padding: 16px;                          shadow-md bg-white">
  border-radius: 8px;
  box-shadow: ...;
  background: white;
}
<div class="card">
```

> **Tailwind CSS is a utility-first CSS framework that provides pre-built classes (like `p-4`, `flex`, `text-center`) so you rarely need to write custom CSS.**

## Common Utility Classes

```html
<div class="flex items-center justify-between p-4 bg-blue-500 text-white rounded-lg shadow-md">
  <h1 class="text-xl font-bold">Title</h1>
  <button class="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100">
    Click Me
  </button>
</div>
```

| Class | Meaning |
|---|---|
| `p-4` | padding: 1rem |
| `flex` | display: flex |
| `items-center` | align-items: center |
| `justify-between` | justify-content: space-between |
| `text-xl` | font-size: 1.25rem |
| `bg-blue-500` | background-color (blue shade 500) |
| `rounded-lg` | border-radius: large |
| `hover:bg-gray-100` | background changes on hover |

## Responsive Design

Tailwind uses mobile-first breakpoint prefixes:

```html
<div class="text-sm md:text-lg lg:text-2xl">
  Responsive text
</div>
```
```
(default)  → applies to all screens
sm:        → ≥640px
md:        → ≥768px
lg:        → ≥1024px
xl:        → ≥1280px
```

## Why Utility-First?

✅ No need to invent class names (`.card-wrapper-inner-2`)
✅ No CSS file grows unbounded — styles live next to the markup
✅ Consistent design system (fixed spacing/color scales)
✅ Removing a component removes its styles automatically (no orphaned CSS)

❌ HTML can look cluttered with many classes
❌ Learning curve — memorizing utility names

## Customization (`tailwind.config.js`)

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#7C3AED",
      },
    },
  },
};
```
```html
<div class="bg-brand text-white">Custom brand color</div>
```

## Reusing Styles with `@apply`

```css
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
}
```
Useful when the same combination of utilities repeats often across a project.

## Common Interview Questions

**Q1. What is "utility-first" CSS?**
An approach where you compose designs using small, single-purpose classes (like `p-4`, `flex`) directly in markup, instead of writing custom CSS classes per component.

**Q2. How does Tailwind handle responsive design?**
Through breakpoint prefixes (`sm:`, `md:`, `lg:`) applied in a mobile-first manner — unprefixed styles apply to all sizes, and prefixed ones override at that breakpoint and up.

**Q3. What is a downside of Tailwind's utility-first approach?**
Markup can become cluttered with many classes, and there's a learning curve memorizing utility names.

## 🧠 Mini Quiz

1. What does the `flex` class do?
2. What breakpoint prefix targets screens 768px and wider?
3. What's one advantage of utility-first CSS over writing custom classes?
4. What does `@apply` let you do?

---

# 9. State Management

## 🤔 What is State Management?

In a small app, `useState` is enough. But as an app grows, **many components need access to the same data** — the logged-in user, the shopping cart, theme settings. Passing that data down through many layers of props ("prop drilling") becomes painful.

```
App
 └─ Layout
     └─ Sidebar
         └─ CartWidget  ← needs cart data, but it's stored 4 levels up in App!
```

> **State management is the strategy for storing, sharing, and updating data across many components in an app.**

## Local vs Global State

| Local State | Global State |
|---|---|
| Only one component needs it | Many components need it |
| `useState` inside that component | Shared store (Context, Redux, Zustand) |
| Example: is this dropdown open? | Example: is the user logged in? |

## Prop Drilling — The Problem

```jsx
<App user={user}>
  <Layout user={user}>
    <Sidebar user={user}>
      <Profile user={user} /> {/* finally used here */}
    </Sidebar>
  </Layout>
</App>
```
Every intermediate component has to pass `user` along, even if it never uses it itself.

## React Context — Built-in Solution

```jsx
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout />
    </UserContext.Provider>
  );
}

// Any nested component, no matter how deep:
function Profile() {
  const { user } = useContext(UserContext);
  return <p>{user.name}</p>;
}
```
✅ No prop drilling
❌ Every consumer re-renders when the context value changes — not ideal for very frequently changing state

## Redux — Predictable Global State

```
Component dispatches an Action
        │
        ▼
   Reducer (a pure function) decides how state changes
        │
        ▼
     Store updates
        │
        ▼
Components subscribed to that state re-render
```

```js
// slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
  },
});

// component
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
dispatch(increment());
```
Best for large apps with complex, frequently-updated shared state and a need for predictable debugging (e.g. Redux DevTools time-travel).

## Zustand — A Lightweight Alternative

```js
import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));

// Usage in any component
const { items, addItem } = useCartStore();
```
✅ Much less boilerplate than Redux
✅ No need to wrap your app in a Provider
Great middle ground between Context and Redux for medium-sized apps.

## Server State vs Client State

A common modern distinction:
* **Client State** — UI state, form inputs, modals (Context/Zustand/Redux)
* **Server State** — data that lives on your backend (users, posts) — better handled by tools like **React Query / TanStack Query**, which manage caching, refetching, and loading states automatically instead of manually storing API data in Redux.

## Common Interview Questions

**Q1. What is prop drilling and how do you avoid it?**
Passing props through many intermediate components that don't use them, just to reach a deeply nested child. Avoided using Context, Redux, or another global state solution.

**Q2. When would you choose Context over Redux?**
Context is great for simple, infrequently-changing global data (theme, auth user). Redux/Zustand suit complex state with frequent updates, many actions, or the need for debugging tools.

**Q3. What's the difference between client state and server state?**
Client state is local UI data owned by the frontend; server state is data fetched from an API that needs caching, syncing, and refetching — often better managed with tools like React Query rather than plain Redux/Context.

## 🧠 Mini Quiz

1. What problem does prop drilling create?
2. Name one built-in React tool for sharing state without prop drilling.
3. What's a benefit of Zustand over Redux?
4. What's the difference between "client state" and "server state"?

---

# 10. API Integration

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

# 11. Forms & Validation

## 🤔 What is Form Handling in React?

Forms are one of the trickiest parts of frontend development — tracking input values, validating them, and showing helpful errors, all while keeping the UI responsive.

## Controlled Components

React "controls" the input's value via state — the input always reflects what's in state, and state updates on every keystroke.

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}
```
```
User types "a"
   │
   ▼
onChange fires → setEmail("a") → state updates → input re-renders with value "a"
```

## Uncontrolled Components (using refs)

```jsx
function LoginForm() {
  const emailRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} />
    </form>
  );
}
```
Useful for simple forms where you don't need to react to every keystroke — slightly better performance since it skips re-renders on every character typed.

## Manual Validation

```jsx
function validate(email, password) {
  const errors = {};
  if (!email.includes("@")) errors.email = "Invalid email";
  if (password.length < 6) errors.password = "Password too short";
  return errors;
}
```

## React Hook Form (Popular Library)

Manages form state and validation with much less boilerplate, and avoids unnecessary re-renders on every keystroke.

```jsx
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: "Email is required" })} />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register("password", { minLength: 6 })} />

      <button type="submit">Login</button>
    </form>
  );
}
```

## Schema Validation with Zod (Builds on your backend notes)

The same Zod library you used on the backend can validate forms on the frontend, keeping validation logic consistent and reusable.

```jsx
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  // ...same as before, errors now come from the Zod schema
}
```

## Client-Side vs Server-Side Validation

```
Client-side validation → fast feedback, better UX, but can be bypassed
Server-side validation → the real security boundary; ALWAYS re-validate on the backend
```
**Never trust client-side validation alone** — a malicious user can bypass your React form entirely and hit the API directly (this is exactly why the backend Zod validation from your earlier notes still matters).

## Common Interview Questions

**Q1. What's the difference between controlled and uncontrolled components?**
Controlled components store the input value in React state (single source of truth); uncontrolled components read the value directly from the DOM via a ref when needed.

**Q2. Why should you validate on both the client and the server?**
Client-side validation gives instant feedback for good UX; server-side validation is the actual security boundary since client-side checks can be bypassed.

**Q3. Why use a library like React Hook Form instead of manual `useState` for every field?**
Less boilerplate, better performance (avoids re-rendering the whole form on every keystroke), and built-in validation integration.

## 🧠 Mini Quiz

1. In a controlled input, where does the "source of truth" for the value live?
2. Why is server-side validation still necessary even if you validate on the client?
3. What does `register()` do in React Hook Form?
4. What library from your backend notes can also be reused for frontend form validation?

---

# 12. Authentication

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

# 13. Testing

## 🤔 Testing the Frontend

*(Builds on Lesson 39 — Testing Node.js from your backend notes — same principles, applied to UI)*

## The Testing Pyramid (Frontend Version)

```
        ▲
       / \        Few — full user flows in a real browser
      / E2E \
     /-------\
    /Integr-  \    Some — multiple components working together
   / ation     \
  /-------------\
 /  Unit Tests   \  Many — a single component/function in isolation
/-------------------\
```

## Unit Testing a Component (React Testing Library + Jest/Vitest)

```jsx
// Button.jsx
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
```

```jsx
// Button.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  fireEvent.click(screen.getByText("Click Me"));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## Testing Philosophy: Test Behavior, Not Implementation

React Testing Library is intentionally built around how a **user** interacts with your app — finding elements by visible text or role — rather than internal implementation details.

```js
// ✅ Good — tests what the user sees/does
screen.getByRole("button", { name: "Submit" });

// ❌ Avoid — tests internal implementation details
wrapper.find(".btn-primary-internal-class");
```

## Testing Async Behavior (API Calls)

```jsx
import { render, screen, waitFor } from "@testing-library/react";

test("shows users after fetching", async () => {
  render(<Users />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Arjun")).toBeInTheDocument();
  });
});
```

## Mocking API Calls

```js
jest.mock("axios");
axios.get.mockResolvedValue({ data: [{ id: 1, name: "Arjun" }] });
```
Or with **MSW (Mock Service Worker)**, which intercepts real network requests at the network level, making tests behave more realistically:
```js
const server = setupServer(
  rest.get("/api/users", (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: "Arjun" }]));
  })
);
```

## End-to-End (E2E) Testing (Cypress / Playwright)

Tests the entire app in a real browser, simulating a real user:

```js
// Cypress example
cy.visit("/login");
cy.get("input[name=email]").type("arjun@gmail.com");
cy.get("input[name=password]").type("password123");
cy.get("button[type=submit]").click();
cy.url().should("include", "/dashboard");
```

## Common Interview Questions

**Q1. What's the philosophy behind React Testing Library?**
Test components the way a user would interact with them (finding elements by visible text/role) rather than testing internal implementation details.

**Q2. Difference between unit, integration, and E2E tests on the frontend?**
Unit tests check one component/function in isolation; integration tests check multiple components working together; E2E tests simulate a real user flow in an actual browser.

**Q3. Why mock API calls in component tests?**
To keep tests fast and reliable, independent of a real backend being available, and to control exactly what data the component receives.

## 🧠 Mini Quiz

1. What does React Testing Library encourage you to query by, instead of CSS classes?
2. What tool lets you test full user flows in a real browser?
3. Why do we mock API responses in unit/integration tests?
4. In the testing pyramid, which type of test should you have the most of?

---

# 14. Next.js

## 🤔 What is Next.js?

Plain React (via Create React App / Vite) renders everything in the **browser** — the server sends a nearly empty HTML file, and JavaScript builds the page after loading. This is slower for first load and bad for SEO (search engines see an empty page).

> **Next.js is a React framework that adds server-side rendering, file-based routing, API routes, and many production optimizations on top of React.**

```
Plain React (CSR)                     Next.js (SSR/SSG)
──────────────────                    ──────────────────
Browser downloads empty HTML          Server renders full HTML
        │                                     │
        ▼                                     ▼
JS runs, builds the page              Browser shows content immediately
        │                                     │
        ▼                                     ▼
User finally sees content             JS "hydrates" it to become interactive
```

## Rendering Strategies

| Strategy | When HTML is generated | Best for |
|---|---|---|
| **CSR** (Client-Side Rendering) | In the browser, after JS loads | Highly interactive dashboards |
| **SSR** (Server-Side Rendering) | On the server, per request | Pages needing fresh, personalized data (e.g. user dashboard) |
| **SSG** (Static Site Generation) | At build time, once | Content that rarely changes (blogs, marketing pages) |
| **ISR** (Incremental Static Regeneration) | At build time, then re-generated periodically | Product pages — mostly static, occasionally updated |

## File-Based Routing

```
app/
 ├── page.tsx           → /
 ├── about/
 │    └── page.tsx      → /about
 └── users/
      └── [id]/
           └── page.tsx → /users/:id
```
No manual route configuration needed (unlike React Router) — the folder structure *is* the routing.

## Server Components vs Client Components (App Router)

```tsx
// Server Component (default) — runs only on the server, can access DB directly
async function UsersPage() {
  const users = await db.user.findMany();
  return <UserList users={users} />;
}
```
```tsx
"use client"; // Client Component — needed for interactivity (hooks, onClick, useState)
function LikeButton() {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>❤️</button>;
}
```
* **Server Components** — render on the server, send zero JS to the browser for that component, can directly query databases
* **Client Components** — needed for interactivity (`useState`, `onClick`, browser APIs)

## API Routes

Next.js lets you build backend endpoints right inside the same project:
```ts
// app/api/users/route.ts
export async function GET() {
  const users = await db.user.findMany();
  return Response.json(users);
}
```
This means a small app doesn't even need a separate Express server.

## Data Fetching

```tsx
async function Page() {
  const res = await fetch("https://api.example.com/data", {
    next: { revalidate: 60 }, // ISR: re-fetch at most every 60 seconds
  });
  const data = await res.json();
  return <div>{data.title}</div>;
}
```

## Why Companies Use Next.js

✅ Better SEO (search engines see fully-rendered HTML immediately)
✅ Faster initial page load (First Contentful Paint)
✅ Built-in routing, image optimization, API routes
✅ One framework for both frontend and lightweight backend logic

## Common Interview Questions

**Q1. What's the difference between SSR and SSG?**
SSR renders HTML on the server for every request (fresh data); SSG renders HTML once at build time (fast, but data can go stale until the next build/rebuild).

**Q2. What is hydration?**
The process where React attaches event listeners and makes server-rendered HTML interactive in the browser after the initial page load.

**Q3. Difference between Server Components and Client Components?**
Server Components render only on the server (no JS shipped to the browser, can access backend resources directly); Client Components run in the browser and are required for interactivity/hooks.

**Q4. Why might a company choose Next.js over plain React (CRA/Vite)?**
Better SEO, faster initial loads via SSR/SSG, built-in routing and API routes, and production optimizations out of the box.

## 🧠 Mini Quiz

1. What problem does Server-Side Rendering solve that plain client-side React has?
2. What does the `"use client"` directive do?
3. What's the difference between SSG and ISR?
4. Where do you put a dynamic route like `/users/:id` in the Next.js App Router?

---

# 15. Deployment

## 🤔 Deploying a Frontend App

*(Builds on Lesson 16 — Deployment from your backend notes)*

Frontend deployment has one key advantage over backend deployment: for a plain React app, the output is just **static files** (HTML, CSS, JS) — no server process needs to keep running.

```
npm run build
     │
     ▼
dist/ (or .next/ for Next.js)
     │
     ▼
Upload static files to a CDN / hosting platform
```

## Where to Deploy

### Static Hosting (for CSR React apps — Vite/CRA)
* **Vercel**
* **Netlify**
* **GitHub Pages**
* **Cloudflare Pages**

These serve your `dist/` folder from a global CDN — extremely fast, and usually free for small projects.

### Platforms for Next.js (SSR needs a running server)
* **Vercel** (built by the creators of Next.js — zero-config deployment)
* Any Node.js host (Render, Railway, AWS) since SSR pages need server-side JavaScript execution on each request

## The Build Process

```bash
npm run build     # bundles, minifies, optimizes your code
```
```
src/ (readable source code)
     │
     ▼
Bundler (Vite/Webpack)
     │
     ├── Minifies JS/CSS (smaller file size)
     ├── Tree-shakes unused code
     ├── Splits code into chunks (faster initial load)
     └── Optimizes images
     │
     ▼
dist/ (production-ready static files)
```

## Environment Variables

```
.env
VITE_API_URL=https://api.myapp.com
```
```js
const apiUrl = import.meta.env.VITE_API_URL; // Vite
const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Next.js
```
⚠️ Important: anything prefixed for the client (`VITE_`, `NEXT_PUBLIC_`) is bundled into the JavaScript and **visible to anyone** who views your site's source — never put secrets (API keys, passwords) in frontend environment variables.

## CI/CD for Frontend (builds on Lesson 14 — CI/CD)

```
Push to GitHub
     │
     ▼
GitHub Actions / Vercel auto-detects push
     │
     ▼
Runs tests → npm run build
     │
     ▼
Deploys automatically to production
     │
     ▼
Preview URL generated for every Pull Request
```
Preview deployments (a unique URL per PR) let teammates review a change visually before merging — a huge advantage of platforms like Vercel/Netlify.

## CDN & Caching

```
User in India requests your site
        │
        ▼
Nearest CDN edge server (e.g. in Mumbai) serves cached static files
        │
        ▼
Page loads in milliseconds — no round trip to your origin server
```

## Common Interview Questions

**Q1. Why can a plain React (CSR) app be hosted on simple static hosting, but a Next.js SSR app usually can't?**
A CSR app compiles down to static HTML/CSS/JS files with no server logic needed; an SSR app needs a running Node.js server to render pages per-request.

**Q2. Why should you never put secret API keys in frontend environment variables?**
Any environment variable exposed to client-side code (e.g. `VITE_`/`NEXT_PUBLIC_` prefixed) gets bundled into the JavaScript sent to the browser, making it publicly visible in the page source.

**Q3. What is a CDN and why does it help frontend performance?**
A Content Delivery Network caches your static files across servers worldwide, so users are served from a nearby location instead of a single distant origin server — reducing latency.

**Q4. What is a "preview deployment"?**
A temporary, unique URL automatically generated for a pull request/branch, letting teammates review the actual running app before merging into production.

## 🧠 Mini Quiz

1. What does `npm run build` produce for a typical React app?
2. Why can't a Next.js SSR app be deployed to plain static hosting the same way a CRA/Vite app can?
3. What's the danger of putting a secret API key in a `VITE_`-prefixed environment variable?
4. What is the benefit of a CDN?

---
# 🚀 Advanced Frontend Engineering — Revision Guide

*Continuing from HTML, CSS, JavaScript, TypeScript, Git, React, React Router, Tailwind, State Management, API Integration, Forms, Auth, Testing, Next.js, and Deployment — this guide goes deeper into senior/staff-level frontend topics.*

---

# 1. Advanced JavaScript

## 🤔 Beyond the Basics

You already know closures, promises, and array methods. Advanced JavaScript is about understanding **what's actually happening under the hood** — this is where senior interviews live.

## `this` Binding

`this` isn't fixed at write-time — it depends on **how a function is called**.

```js
const user = {
  name: "Arjun",
  greet() {
    console.log(this.name);
  },
};

user.greet();               // "Arjun" — called as a method, this = user
const fn = user.greet;
fn();                       // undefined — called standalone, this = undefined/global

const bound = user.greet.bind(user);
bound();                    // "Arjun" — bind() locks `this` forever
```

* `call()` / `apply()` — invoke a function immediately with a custom `this`
* `bind()` — returns a new function with `this` permanently locked
* Arrow functions don't have their own `this` — they inherit it from the enclosing scope (this is why they're safe inside callbacks/classes)

## Prototypes & Prototypal Inheritance

Every JS object has a hidden link to another object (its **prototype**) that it can borrow methods from.

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

const dog = new Animal("Rex");
dog.speak(); // "Rex makes a sound" — found via the prototype chain
```

```
dog ──proto──► Animal.prototype ──proto──► Object.prototype ──proto──► null
```

`class` syntax in modern JS is **syntactic sugar** over this same prototype system.

## Event Loop, Microtasks & Macrotasks (Deep Dive)

```js
console.log("1");
setTimeout(() => console.log("2"), 0);      // macrotask
Promise.resolve().then(() => console.log("3")); // microtask
console.log("4");

// Output: 1, 4, 3, 2
```

```
Call Stack finishes current script
        │
        ▼
Drain ALL microtasks (Promises, queueMicrotask) FIRST
        │
        ▼
Run ONE macrotask (setTimeout, setInterval, I/O)
        │
        ▼
Repeat
```
This is why Promises always resolve *before* `setTimeout`, even with a 0ms delay — microtasks always fully drain before the next macrotask runs.

## Debouncing & Throttling

Both control how often a function runs in response to fast, repeated events (typing, scrolling, resizing).

```js
// Debounce — wait until the user STOPS triggering the event
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
// Use case: search-as-you-type — only fire the API call after typing pauses
```

```js
// Throttle — run at most once every X ms, no matter how often it's triggered
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
// Use case: scroll event handlers, resize handlers
```

## Memory Leaks in JavaScript

Common causes in frontend apps:
```js
// 1. Forgotten event listeners
window.addEventListener("resize", handleResize);
// If the component unmounts without removing this, it leaks.

// 2. Uncleared intervals
setInterval(fetchData, 1000); // never cleared

// 3. Closures holding references to large objects unintentionally
```
Fix pattern in React:
```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize); // cleanup!
}, []);
```

## Currying & Function Composition

```js
const multiply = (a) => (b) => a * b;
const double = multiply(2);
double(5); // 10
```
```js
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
const process = compose(double, addOne); // addOne runs first, then double
```

## Web Workers

JavaScript is single-threaded — a heavy computation (e.g. processing a huge dataset) freezes the UI. Web Workers run JS in a background thread.

```js
// main.js
const worker = new Worker("worker.js");
worker.postMessage(largeDataset);
worker.onmessage = (e) => console.log("Result:", e.data);

// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};
```

## Common Interview Questions

**Q1. Explain how `this` behaves differently in a regular function vs an arrow function.**
Regular functions get `this` based on how they're called (method, standalone, `new`, etc.); arrow functions inherit `this` lexically from their surrounding scope at the time they were defined.

**Q2. What's the difference between microtasks and macrotasks?**
Microtasks (Promises) always fully drain before the next macrotask (setTimeout, I/O) runs, meaning Promise callbacks are prioritized over `setTimeout` even with a 0ms delay.

**Q3. Difference between debounce and throttle?**
Debounce waits for a pause in events before firing (good for search inputs); throttle guarantees the function runs at most once per interval regardless of event frequency (good for scroll handlers).

**Q4. How can a React component cause a memory leak?**
By registering event listeners, timers, or subscriptions in `useEffect` without cleaning them up in the returned cleanup function when the component unmounts.

## 🧠 Mini Quiz

1. What determines the value of `this` inside a regular (non-arrow) function?
2. In what order do microtasks and macrotasks run?
3. When would you use throttle instead of debounce?
4. What causes a common memory leak in React components?

---

# 2. Advanced TypeScript

## 🤔 Beyond Basic Types

You already know interfaces, generics, and unions. Advanced TypeScript is about **manipulating types themselves** to build safer, more expressive APIs.

## Utility Types

TypeScript ships with built-in helpers that transform existing types:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

Partial<User>       // all fields optional  { id?: number; name?: string; ... }
Required<User>       // all fields required (opposite of Partial)
Pick<User, "id"|"name">   // only { id: number; name: string }
Omit<User, "email">       // everything except email
Readonly<User>       // fields can't be reassigned
Record<string, User> // { [key: string]: User }
```

Real use case:
```ts
function updateUser(id: number, changes: Partial<User>) {
  // caller only needs to pass the fields they want to change
}
updateUser(1, { name: "Rahul" }); // ✅ valid — other fields optional
```

## Mapped Types

Build new types by transforming every property of an existing type.

```ts
type ReadonlyVersion<T> = {
  readonly [K in keyof T]: T[K];
};

type OptionalVersion<T> = {
  [K in keyof T]?: T[K];
};
```
This is literally how `Readonly<T>` and `Partial<T>` are implemented internally.

## Conditional Types

```ts
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<"hello">; // "yes"
type B = IsString<42>;      // "no"
```

Combined with `infer` to extract types:
```ts
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() { return { id: 1, name: "Arjun" }; }
type User = ReturnTypeOf<typeof getUser>; // { id: number; name: string }
```

## Type Guards & Narrowing

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function process(value: unknown) {
  if (isString(value)) {
    value.toUpperCase(); // TypeScript now knows it's a string
  }
}
```

Discriminated unions — a very common real-world pattern:
```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2; // TS knows `radius` exists here
  }
  return shape.side ** 2; // and `side` exists here
}
```

## `unknown` vs `any`

```ts
let a: any = "hello";
a.toFixed(); // ❌ No error at compile time, but crashes at runtime!

let b: unknown = "hello";
b.toFixed(); // ❌ Compile error — must narrow the type first
if (typeof b === "number") {
  b.toFixed(); // ✅ Now safe
}
```
`unknown` forces you to check the type before using it — `any` disables type-checking entirely. Prefer `unknown` for safety.

## Generics with Constraints

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProperty({ name: "Arjun" }, "name"); // ✅ "Arjun"
getProperty({ name: "Arjun" }, "age");  // ❌ Error — "age" doesn't exist on the object
```

## Declaration Merging & Module Augmentation

```ts
// Adding a custom property to Express's Request type
declare global {
  namespace Express {
    interface Request {
      user?: { id: number };
    }
  }
}
```
This is exactly how you'd type `req.user` after adding an auth middleware in an Express + TypeScript backend.

## Common Interview Questions

**Q1. What's the difference between `unknown` and `any`?**
`any` disables type checking completely; `unknown` still requires you to narrow the type (e.g. with `typeof`) before performing operations on it — much safer.

**Q2. What are utility types like `Partial` and `Pick` used for?**
Deriving new types from existing ones without redefining them — e.g. making all fields optional for an update function, or selecting a subset of fields for a specific use case.

**Q3. What is a discriminated union and why is it useful?**
A union of object types sharing a common literal field (like `kind`), which lets TypeScript automatically narrow to the correct type in each branch of a conditional.

**Q4. How does `infer` work in conditional types?**
It lets you extract and capture a type from within another type (e.g. pulling out a function's return type) inside a conditional type expression.

## 🧠 Mini Quiz

1. What does `Partial<User>` produce?
2. Why is `unknown` generally safer to use than `any`?
3. What is a discriminated union?
4. What does `Pick<User, "id" | "name">` return?

---

# 3. Advanced React

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

# 4. Advanced State Management

*(Builds on Lesson 9 — State Management from your earlier notes)*

## 🤔 Beyond Context and Redux Basics

At scale, the real questions become: how do you avoid unnecessary re-renders, structure complex state, and integrate server data cleanly?

## The Context Re-render Problem

```jsx
<UserContext.Provider value={{ user, setUser }}>
  {/* Every consumer re-renders whenever ANY value in this object changes */}
</UserContext.Provider>
```
Fix — split contexts by concern, or memoize the value:
```jsx
const value = useMemo(() => ({ user, setUser }), [user]);
```
Or split into separate providers so unrelated consumers aren't affected:
```
AuthContext (user, login, logout)
ThemeContext (theme, toggleTheme)
```

## Redux Toolkit — Modern Redux

Old Redux required a lot of boilerplate; Redux Toolkit (RTK) is now the standard.

```js
const userSlice = createSlice({
  name: "user",
  initialState: { data: null },
  reducers: {
    setUser: (state, action) => { state.data = action.payload; }, // looks mutable, but Immer makes it safe
  },
});
```
RTK uses **Immer** under the hood, letting you write "mutating" code that's actually converted into safe, immutable updates.

## Selector Optimization

```js
// ❌ Creates a new array every render, causing unnecessary re-renders
const activeUsers = useSelector((state) =>
  state.users.filter((u) => u.active)
);

// ✅ Memoized selector (Reselect) — only recomputes when input state changes
const selectActiveUsers = createSelector(
  (state) => state.users,
  (users) => users.filter((u) => u.active)
);
```

## Normalizing State Shape

Avoid deeply nested state — flatten it like a database table for O(1) lookups and easier updates.

```js
// ❌ Nested — hard to update a single comment
{
  posts: [
    { id: 1, comments: [{ id: 1, text: "..." }] }
  ]
}

// ✅ Normalized
{
  posts: { byId: { 1: { id: 1, commentIds: [1] } }, allIds: [1] },
  comments: { byId: { 1: { id: 1, text: "..." } }, allIds: [1] },
}
```

## Server State vs Client State (Deep Dive)

This distinction matters even more at scale — mixing them causes bugs (e.g. stale cached API data sitting in Redux with no automatic refresh).

```
Client State                     Server State
─────────────                    ─────────────
Modal open/closed                List of users from the API
Form input values                Current user's profile
Theme preference                 Product inventory count

Managed by: useState/Zustand     Managed by: React Query / SWR
                                  (handles caching, refetch, staleness)
```

## Atomic State Management (Jotai/Recoil pattern)

Instead of one big global store, state is split into small independent "atoms" — components only re-render when the specific atom they use changes.

```js
const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```
✅ Fine-grained reactivity — avoids the "everything re-renders" problem of a single large context/store.

## Common Interview Questions

**Q1. Why can React Context cause performance issues in large apps?**
Every consumer of a context re-renders whenever any part of the context value changes, even if that consumer only cares about a small part of it — fixed by splitting contexts or memoizing values.

**Q2. What does "normalizing" state mean and why do it?**
Restructuring nested state into flat, indexed collections (like database tables) to make lookups and updates faster and simpler, avoiding deep, error-prone nested updates.

**Q3. Why shouldn't you store server data (like API responses) directly in Redux without a caching strategy?**
It becomes stale with no automatic refetching/invalidation — tools like React Query are purpose-built to manage server state's caching, background refetching, and staleness.

## 🧠 Mini Quiz

1. Why does splitting one large Context into multiple smaller ones improve performance?
2. What library does Redux Toolkit use internally to allow "mutating" reducer syntax safely?
3. What does normalizing state achieve?
4. What's an advantage of atomic state management (Jotai-style) over one large global store?

---

# 5. Performance Optimization

## 🤔 Why Performance Matters

Every 100ms of added load time measurably reduces conversions and engagement — performance is a feature, not an afterthought.

## Core Web Vitals

Google's key metrics for real-world user experience:

```
LCP (Largest Contentful Paint)   → how fast the main content loads   (target: <2.5s)
INP (Interaction to Next Paint)  → how responsive the page feels     (target: <200ms)
CLS (Cumulative Layout Shift)    → how much content jumps around     (target: <0.1)
```

## Code Splitting & Lazy Loading

Instead of shipping one giant JS bundle, split it into chunks loaded only when needed.

```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  );
}
```
```
Before: main.js = 2MB (everything, loaded upfront)
After:  main.js = 200KB + dashboard.js = 1.8MB (loaded only when visiting /dashboard)
```

## Image Optimization

* Use modern formats (WebP/AVIF) — smaller than JPEG/PNG at the same quality
* Lazy-load offscreen images: `<img loading="lazy" />`
* Serve responsive sizes via `srcset`, or use `next/image` in Next.js which handles this automatically

## Memoization Recap (from Advanced React)

`React.memo`, `useMemo`, `useCallback` — but the golden rule is: **measure before optimizing**. Premature memoization adds complexity without benefit if the component wasn't actually re-rendering expensively.

## Virtualization (Windowing)

Rendering a list of 10,000 items creates 10,000 DOM nodes — slow and memory-heavy. Virtualization renders only the visible rows.

```jsx
import { FixedSizeList } from "react-window";

<FixedSizeList height={500} itemCount={10000} itemSize={35}>
  {({ index, style }) => <div style={style}>Row {index}</div>}
</FixedSizeList>
```
```
Without virtualization: 10,000 DOM nodes rendered
With virtualization:    ~15 DOM nodes rendered (only what's visible on screen)
```

## Bundle Analysis

```bash
npx vite-bundle-visualizer
```
Reveals which dependencies are bloating your bundle — often you'll find an entire library imported for one small function, fixable with tree-shaking or a lighter alternative.

## Debouncing Expensive Renders

Same debounce/throttle concepts from Advanced JavaScript, applied to UI updates like search-as-you-type filtering large lists.

## Caching Strategies

```
Browser Cache      → static assets (JS, CSS, images) cached via HTTP headers
Service Worker      → offline-capable caching (see PWA lesson)
CDN Cache            → static files served from edge locations near the user
React Query Cache    → API responses cached client-side, avoiding refetches
```

## Preloading & Prefetching

```html
<link rel="preload" href="hero.jpg" as="image" />
<link rel="prefetch" href="/dashboard.js" />
```
* `preload` — fetch a resource needed for the *current* page ASAP
* `prefetch` — fetch a resource likely needed for the *next* navigation, during idle time

## Common Interview Questions

**Q1. What are the three Core Web Vitals and what do they measure?**
LCP (loading speed), INP (interactivity/responsiveness), and CLS (visual stability).

**Q2. What is code splitting and why does it help performance?**
Breaking a large JS bundle into smaller chunks loaded on demand, so users only download the code needed for the page they're viewing, reducing initial load time.

**Q3. What is list virtualization and when would you use it?**
Rendering only the visible portion of a long list instead of every item, to avoid creating thousands of unnecessary DOM nodes — used for large tables, feeds, or dropdowns.

**Q4. What's the risk of over-using `useMemo`/`React.memo` everywhere?**
Added complexity and even worse performance in some cases — memoization itself has a cost (comparing dependencies), so it should be applied where profiling shows an actual bottleneck, not by default everywhere.

## 🧠 Mini Quiz

1. Name the three Core Web Vitals.
2. What problem does code splitting solve?
3. What is list virtualization, and what problem does it prevent?
4. What's the difference between `preload` and `prefetch`?

---

# 6. Advanced Next.js

*(Builds on Lesson 14 — Next.js from your earlier notes)*

## Middleware

Code that runs **before** a request completes, at the edge — great for auth checks, redirects, A/B testing, without touching every page.

```ts
// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
```

## Streaming with Suspense

Instead of waiting for the *entire* page's data before sending anything, Next.js can stream parts of the page as they become ready.

```tsx
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Header /> {/* renders instantly */}
      <Suspense fallback={<Spinner />}>
        <SlowDataComponent /> {/* streams in once its data resolves */}
      </Suspense>
    </div>
  );
}
```
```
Without streaming: user sees a blank page until EVERYTHING is ready
With streaming:     user sees the header immediately, slow parts fill in progressively
```

## Route Handlers & Caching

```ts
// app/api/products/route.ts
export async function GET() {
  const data = await db.product.findMany();
  return Response.json(data);
}

export const revalidate = 3600; // ISR: cache for 1 hour
```

## Parallel & Intercepting Routes

**Parallel routes** render multiple independent pages in the same layout simultaneously (e.g. a dashboard with `@analytics` and `@team` slots loading independently):
```
app/
 └── dashboard/
      ├── @analytics/page.tsx
      ├── @team/page.tsx
      └── layout.tsx (renders both slots together)
```

**Intercepting routes** let you show a route in a modal while preserving the underlying page (common in apps like Instagram — clicking a photo opens a modal, but the URL still reflects the photo's own page):
```
app/feed/(.)photo/[id]/page.tsx
```

## Image & Font Optimization

```tsx
import Image from "next/image";

<Image src="/hero.jpg" width={800} height={400} alt="Hero" priority />
```
`next/image` automatically: resizes, serves modern formats (WebP), lazy-loads by default, and prevents layout shift by reserving space upfront.

## Metadata & SEO

```tsx
export const metadata = {
  title: "My App",
  description: "The best app ever",
  openGraph: { images: ["/og-image.png"] },
};
```

## Server Actions

Call server-side functions directly from a form, without manually building an API route.

```tsx
async function createUser(formData: FormData) {
  "use server";
  await db.user.create({ data: { name: formData.get("name") } });
}

<form action={createUser}>
  <input name="name" />
  <button type="submit">Create</button>
</form>
```

## Common Interview Questions

**Q1. What is Next.js Middleware used for?**
Running logic (auth checks, redirects, header rewrites) at the edge before a request reaches a page, without duplicating that logic across every route.

**Q2. How does streaming with Suspense improve perceived performance?**
It lets fast parts of the page render immediately while slower data-dependent parts stream in progressively, instead of blocking the entire page on the slowest piece of data.

**Q3. What are Server Actions?**
Functions marked `"use server"` that can be called directly from client components/forms, letting you perform server-side mutations without manually creating an API route.

## 🧠 Mini Quiz

1. Where does Next.js Middleware run — client or edge/server?
2. What does `<Suspense>` combined with streaming allow a page to do?
3. What does `next/image` automatically handle for you?
4. What directive marks a function as a Server Action?

---

# 7. Frontend Security

*(Builds on Lesson 12 — Authentication from your earlier notes)*

## 🤔 Why Frontend Security Matters

The frontend is the most exposed part of your stack — anyone can view your JavaScript, inspect network requests, and try to manipulate your app. Never trust the client.

## Cross-Site Scripting (XSS)

An attacker injects malicious JavaScript that runs in your users' browsers.

```jsx
// ❌ Dangerous — renders raw HTML/JS from user input
<div dangerouslySetInnerHTML={{ __html: userComment }} />

// ✅ React escapes text content by default
<div>{userComment}</div>
```
```
Attacker submits comment: <script>stealCookies()</script>
        │
        ▼
If rendered unsafely, this script runs in every visitor's browser
        │
        ▼
Steals cookies, tokens, or performs actions as that user
```
Defenses: React auto-escapes by default (avoid `dangerouslySetInnerHTML` with untrusted input), use a library like DOMPurify if you must render HTML, set a strict **Content Security Policy (CSP)**.

## Cross-Site Request Forgery (CSRF)

A malicious site tricks a logged-in user's browser into making an unwanted request to your app (since cookies are sent automatically).

```
User is logged into bank.com (cookie stored)
        │
User visits evil-site.com
        │
evil-site.com secretly submits a form to bank.com/transfer
        │
Browser automatically attaches bank.com's cookie
        │
Transfer happens without the user's consent!
```
Defenses: CSRF tokens (a random value the server verifies), `SameSite=Strict/Lax` cookies, checking the `Origin`/`Referer` header.

## Content Security Policy (CSP)

An HTTP header that restricts what sources of scripts/styles/images a page is allowed to load from.

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com
```
Even if an XSS vulnerability exists, a strict CSP can block the injected script from executing or exfiltrating data.

## Secure Cookie Storage (Recap)

```
httpOnly   → JavaScript cannot read the cookie (protects against XSS stealing it)
Secure     → cookie only sent over HTTPS
SameSite   → controls whether the cookie is sent on cross-site requests (protects against CSRF)
```

## Dependency Vulnerabilities

Frontend apps pull in hundreds of npm packages — any one can be compromised.
```bash
npm audit          # scan for known vulnerabilities
npm audit fix       # attempt automatic fixes
```
Supply-chain attacks (a malicious update to a popular package) are an increasingly common real-world threat.

## Clickjacking

An attacker overlays your site in an invisible iframe on their own page, tricking users into clicking something they didn't intend to.

```
X-Frame-Options: DENY
```
or via CSP:
```
Content-Security-Policy: frame-ancestors 'none';
```

## Sensitive Data Exposure

* Never hardcode API keys/secrets in frontend code — they're visible in the bundled JS
* Never log sensitive data (tokens, passwords) to the console in production
* Be careful with `localStorage` — anything stored there is readable by any script running on the page (including a successful XSS payload)

## Common Interview Questions

**Q1. What is XSS and how does React help prevent it by default?**
Cross-Site Scripting — injecting malicious JS that runs in other users' browsers. React auto-escapes content rendered via `{}`, but `dangerouslySetInnerHTML` bypasses this protection.

**Q2. What is CSRF and how is it prevented?**
Tricking a logged-in user's browser into making an unwanted authenticated request. Prevented with CSRF tokens, `SameSite` cookies, and origin checks.

**Q3. Why is storing a JWT in `localStorage` riskier than an `httpOnly` cookie?**
`localStorage` is readable by any JavaScript running on the page, so a successful XSS attack can steal the token directly; `httpOnly` cookies are inaccessible to JavaScript entirely.

**Q4. What does a Content Security Policy do?**
Restricts which sources scripts, styles, and other resources can be loaded from, reducing the impact of an XSS vulnerability even if one exists.

## 🧠 Mini Quiz

1. What does the `httpOnly` cookie flag protect against?
2. What is the difference between XSS and CSRF at a high level?
3. What does `npm audit` check for?
4. What HTTP header helps prevent clickjacking?

---

# 8. System Design for Frontend

*(Ties into your backend System Design notes — Capacity Estimation, CAP Theorem, Load Balancers)*

## 🤔 What is Frontend System Design?

At senior levels, interviews ask you to design an entire frontend architecture — not just a component. Think: "Design the frontend for Instagram's feed" or "Design a real-time collaborative document editor."

## The Framework for Answering These Questions

```
1. Clarify requirements  → functional & non-functional
2. High-level architecture → components, data flow
3. Data fetching strategy → REST/GraphQL, caching, pagination
4. State management       → what's global vs local
5. Performance considerations → lazy loading, virtualization
6. Edge cases              → offline, errors, race conditions
```

## Example: Designing a News Feed (like Instagram/Twitter)

```
Requirements:
- Infinite scroll
- Real-time new-post notifications
- Works on slow networks
- Handles likes/comments optimistically
```

```
User scrolls
     │
     ▼
Intersection Observer detects "near bottom"
     │
     ▼
Fetch next page (cursor-based pagination)
     │
     ▼
Virtualized list renders only visible posts
     │
     ▼
New posts arrive via WebSocket → shown as a
"X new posts" banner (not auto-inserted, to avoid
disorienting the user mid-scroll)
```

## Pagination Strategies

```
Offset-based:  GET /posts?page=2&limit=20
   → Simple, but can skip/duplicate items if data changes between requests

Cursor-based:  GET /posts?after=post_123&limit=20
   → More stable for real-time feeds, scales better on large datasets
```

## Optimistic Updates

Update the UI immediately, assuming the request will succeed — roll back only if it fails. Makes the app *feel* instant.

```jsx
function likePost(postId) {
  setPosts(prev => prev.map(p =>
    p.id === postId ? { ...p, liked: true, likes: p.likes + 1 } : p
  )); // update UI immediately

  api.likePost(postId).catch(() => {
    // rollback if the request actually failed
    setPosts(prev => prev.map(p =>
      p.id === postId ? { ...p, liked: false, likes: p.likes - 1 } : p
    ));
  });
}
```

## Designing for Offline & Poor Networks

* Show cached content immediately, refresh in the background (stale-while-revalidate)
* Queue actions taken offline, sync when connectivity returns
* Show clear loading/error/retry states

## Component Architecture at Scale

```
Design System (buttons, inputs, shared primitives)
        │
        ▼
Feature Components (PostCard, CommentList)
        │
        ▼
Pages / Routes (Feed, Profile)
```
Each layer should only depend on layers below it — a Design System component should never import a feature-specific component.

## 🧠 Mini Quiz

1. What's the advantage of cursor-based pagination over offset-based pagination for a real-time feed?
2. What is an "optimistic update" and why is it used?
3. Why show a "X new posts" banner instead of auto-inserting new posts into a feed?
4. Why should a design system component avoid importing feature-specific components?

---

# 9. Micro Frontends

## 🤔 What is a Micro Frontend?

*(The frontend equivalent of microservices — ties into your backend Design Patterns notes)*

Just like a backend can be split into independent microservices, a large frontend can be split into independently built, deployed, and owned pieces, composed together into one app.

```
Monolithic Frontend                  Micro Frontend
────────────────────                 ────────────────
One giant React app                  Header Team  → deploys independently
Owned by one team                    Checkout Team → deploys independently
One deploy pipeline                  Search Team   → deploys independently
                                           │
                                           ▼
                                   Composed into ONE page at runtime
```

## Why Use Micro Frontends?

✅ Independent teams deploy independently — no waiting on a shared release train
✅ Different parts can use different tech/versions if truly necessary
✅ Smaller, more focused codebases per team

❌ Increased complexity (shared design system, versioning, communication)
❌ Potential for duplicated dependencies (bigger overall bundle if not managed carefully)
❌ Harder to maintain a consistent UX

## Composition Approaches

### Build-Time Integration
Each micro frontend is published as an npm package and imported at build time.
```
Least flexible, but simplest — all pieces still deploy together
```

### Run-Time Integration via iframes
```html
<iframe src="https://checkout.myapp.com"></iframe>
```
✅ Total isolation (styles/JS can't clash)
❌ Poor UX (separate scroll contexts, hard cross-communication, SEO issues)

### Module Federation (Webpack 5) — The Modern Standard
Different apps expose and consume modules from each other **at runtime**, over the network, without a shared build.

```js
// Host app config
new ModuleFederationPlugin({
  remotes: {
    checkout: "checkout@https://checkout.myapp.com/remoteEntry.js",
  },
});

// Usage
const CheckoutApp = React.lazy(() => import("checkout/App"));
```

## Communication Between Micro Frontends

```
Custom Events         → window.dispatchEvent(new CustomEvent("cart:updated", {...}))
Shared State Library   → a small shared store both apps subscribe to
URL / Query Params     → simplest, most decoupled communication
```

## Real World Example

Large e-commerce platforms often split: **Header/Nav team**, **Product Listing team**, **Checkout team**, **Account/Profile team** — each with its own repo, deploy pipeline, and release schedule, composed into one seamless site for the end user.

## 🧠 Mini Quiz

1. What backend architectural concept do micro frontends mirror?
2. Name one downside of using iframes to compose micro frontends.
3. What modern tool allows apps to share code at runtime without a shared build?
4. Why might a large company choose micro frontends despite the added complexity?

---

# 10. Accessibility (a11y)

*(Builds on Lesson 1 — HTML from your earlier notes)*

## 🤔 What is Accessibility?

> **Accessibility means building interfaces that people with disabilities — visual, auditory, motor, or cognitive — can still use effectively**, often with assistive technology like screen readers or keyboard-only navigation.

"a11y" = "a" + 11 letters + "y" ("accessibility").

## Why It Matters

* ~15% of the world's population lives with some form of disability
* Often legally required (ADA in the US, WCAG standards globally)
* Improves usability for *everyone* (e.g. captions help in noisy environments too)

## Semantic HTML (Recap + Deeper)

```html
<!-- ❌ A clickable div is invisible to screen readers and keyboard users -->
<div onClick={handleClick}>Submit</div>

<!-- ✅ A real button gets keyboard focus, Enter/Space activation, and is announced -->
<button onClick={handleClick}>Submit</button>
```

## ARIA (Accessible Rich Internet Applications)

Used to add accessibility info when semantic HTML alone isn't enough — but the golden rule is: **use native HTML elements first; only reach for ARIA when there's no native equivalent.**

```html
<button aria-label="Close menu">✕</button>

<div role="alert">Your session is about to expire.</div>

<input aria-invalid="true" aria-describedby="email-error" />
<p id="email-error">Please enter a valid email.</p>
```

## Keyboard Navigation

Every interactive element must be reachable and operable via keyboard alone (no mouse).

```
Tab        → move focus forward
Shift+Tab  → move focus backward
Enter/Space→ activate the focused element
Escape     → close a modal/dropdown
```
```jsx
function Modal({ onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);
}
```

## Focus Management

When a modal opens, focus should move into it; when it closes, focus should return to the element that opened it.

```jsx
useEffect(() => {
  const previouslyFocused = document.activeElement;
  modalRef.current.focus();
  return () => previouslyFocused.focus();
}, []);
```

## Color Contrast

Text must have sufficient contrast against its background (WCAG AA requires at least 4.5:1 for normal text) — checkable with browser DevTools or contrast-checking tools.

## Screen Reader Testing

```
"skip to content" link → lets keyboard users bypass repetitive navigation
alt text on images     → describes the image content, not "image.jpg"
form labels             → every input needs an associated <label>
```

## Common Interview Questions

**Q1. What is the difference between using a native `<button>` and a `<div onClick>`?**
A native button is automatically keyboard-focusable, activatable with Enter/Space, and announced correctly by screen readers; a div requires manually re-implementing all of that with ARIA and JS.

**Q2. When should you use ARIA attributes?**
Only when native HTML can't express the needed semantics — native elements should always be preferred first, since ARIA doesn't add any actual behavior (just metadata for assistive tech).

**Q3. What is focus management and why does it matter for modals?**
Ensuring keyboard focus moves logically as the UI changes (e.g. into a modal when it opens, back to the trigger element when it closes) — without it, keyboard/screen-reader users get lost.

**Q4. What WCAG contrast ratio is typically required for normal body text?**
At least 4.5:1 (WCAG AA level).

## 🧠 Mini Quiz

1. What does "a11y" stand for?
2. Why should you prefer semantic HTML elements over ARIA where possible?
3. What should happen to keyboard focus when a modal is closed?
4. What's the purpose of a "skip to content" link?

---

# 11. Internationalization (i18n)

## 🤔 What is i18n?

"Internationalization" (i18n — "i" + 18 letters + "n") is the process of designing an app so it can be adapted to different languages, regions, and cultures without code changes — **localization (l10n)** is then the actual process of translating and adapting it for a specific locale.

```
i18n → building the app to SUPPORT multiple languages
l10n → actually translating/adapting content for ONE specific language
```

## Basic Setup (react-i18next example)

```js
// en.json
{ "welcome": "Welcome, {{name}}!" }

// fr.json
{ "welcome": "Bienvenue, {{name}}!" }
```
```jsx
import { useTranslation } from "react-i18next";

function Welcome({ name }) {
  const { t } = useTranslation();
  return <h1>{t("welcome", { name })}</h1>;
}
```

## Handling Pluralization

Different languages pluralize differently — not just "add an s".

```json
{
  "items_one": "{{count}} item",
  "items_other": "{{count}} items"
}
```
```jsx
t("items", { count: 5 }); // "5 items"
t("items", { count: 1 }); // "1 item"
```
Some languages (like Russian, Arabic) have several plural forms — i18n libraries handle this via [ICU MessageFormat](https://icu.unicode.org) rules automatically.

## Date, Number & Currency Formatting

Never hardcode formatting — it varies drastically by locale.

```js
new Intl.DateTimeFormat("en-US").format(new Date()); // 8/8/2026
new Intl.DateTimeFormat("en-GB").format(new Date()); // 08/08/2026

new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(1000);
// "$1,000.00"
new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(1000);
// "1.000,00 €"
```

## RTL (Right-to-Left) Languages

Arabic, Hebrew, and others read right-to-left — the entire layout must mirror, not just the text.

```html
<html dir="rtl">
```
```css
/* Use logical properties instead of physical ones */
margin-inline-start: 8px;  /* instead of margin-left, which breaks in RTL */
```

## Common Pitfalls

* Concatenating translated strings (`t("hello") + " " + name`) — word order differs across languages; use interpolation instead
* Hardcoding text directly in JSX instead of using translation keys
* Assuming all text is roughly the same length — German text can be 30% longer than English, breaking fixed-width layouts
* Baking currency symbols/formats into component logic instead of using `Intl`

## Common Interview Questions

**Q1. What's the difference between i18n and l10n?**
i18n is designing the app's architecture to support multiple languages/locales; l10n is the actual process of adapting content (translations, formats) for a specific locale.

**Q2. Why shouldn't you concatenate translated string fragments together?**
Word order and grammar differ across languages — string interpolation within a single translated template preserves correct grammar, while concatenation can produce nonsensical sentences.

**Q3. What extra consideration does supporting Arabic or Hebrew require beyond translation?**
RTL (right-to-left) layout support — the entire UI direction must mirror, using `dir="rtl"` and logical CSS properties instead of fixed left/right values.

## 🧠 Mini Quiz

1. What's the difference between i18n and l10n?
2. Why does date formatting differ between `en-US` and `en-GB` locales?
3. What does `dir="rtl"` do?
4. Why is naive string concatenation a bad way to build translated sentences?

---

# 12. Progressive Web Apps (PWA)

## 🤔 What is a PWA?

A Progressive Web App is a website built to **feel and behave like a native app** — installable, works offline, and can send push notifications — while still being just a website under the hood.

```
Regular Website          PWA
────────────────         ─────
Needs internet always    Works offline (cached)
No install                Installable to home screen
No push notifications     Supports push notifications
Opens in a browser tab    Can open in its own window, like a native app
```

## The Two Core Pieces

### 1. Web App Manifest
A JSON file describing your app's identity for installation.

```json
{
  "name": "My App",
  "short_name": "MyApp",
  "start_url": "/",
  "display": "standalone",
  "icons": [{ "src": "/icon.png", "sizes": "512x512", "type": "image/png" }],
  "theme_color": "#000000"
}
```
```html
<link rel="manifest" href="/manifest.json" />
```

### 2. Service Worker
A background script that intercepts network requests, enabling offline support and caching.

```js
// service-worker.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => cache.addAll(["/", "/index.html", "/styles.css"]))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
```

```
Request comes in
        │
        ▼
Service Worker intercepts it
        │
   ┌────┴────┐
Cached?      Not cached?
   │              │
   ▼              ▼
Serve from     Fetch from
cache          network
(offline OK)
```

## Caching Strategies

```
Cache First      → check cache, fall back to network (great for static assets)
Network First    → try network, fall back to cache (great for frequently-changing data)
Stale-While-Revalidate → serve cached version instantly, refresh cache in background
```

## Push Notifications

```js
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    // subscribe to push notifications via the browser's Push API
  }
});
```

## Registering the Service Worker

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
```

## Common Interview Questions

**Q1. What are the two core technologies that make a PWA possible?**
The Web App Manifest (describes installability) and the Service Worker (enables offline support, caching, and push notifications).

**Q2. How does a Service Worker enable offline functionality?**
It intercepts network requests and can serve cached responses when the network is unavailable, based on a caching strategy.

**Q3. What's the difference between "Cache First" and "Network First" caching strategies?**
Cache First checks the cache before the network (good for static assets that rarely change); Network First tries the network first and falls back to cache (good for data that changes frequently).

## 🧠 Mini Quiz

1. What file describes a PWA's icons, name, and install behavior?
2. What background script enables offline support in a PWA?
3. Which caching strategy is better for content that changes often: Cache First or Network First?
4. What browser API lets a PWA send push notifications?

---

# 13. Advanced Animations

## 🤔 Why Animation Matters

Good animation gives users feedback, guides attention, and makes an interface feel polished — but poorly done animation hurts performance and can even trigger motion sickness for some users.

## CSS Transitions vs Animations

```css
/* Transition — animates between two states (e.g. hover) */
.button {
  transition: transform 0.2s ease;
}
.button:hover {
  transform: scale(1.05);
}

/* Animation — defines multiple keyframes, can loop, more control */
@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.badge {
  animation: pulse 2s infinite;
}
```

## Performance: Which CSS Properties to Animate

```
✅ Cheap to animate (GPU-accelerated, no layout recalculation):
   transform, opacity

❌ Expensive to animate (triggers layout/reflow):
   width, height, top, left, margin
```
```
Animating `left`:                Animating `transform: translateX()`:
Browser recalculates layout       Browser just moves the already-painted
on every frame → janky            layer on the GPU → smooth 60fps
```

## Framer Motion (Popular React Animation Library)

```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Content fades and slides in
</motion.div>
```

Animating list additions/removals:
```jsx
<AnimatePresence>
  {items.map((item) => (
    <motion.li
      key={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {item.name}
    </motion.li>
  ))}
</AnimatePresence>
```
`AnimatePresence` lets you animate an element **out** before it's removed from the DOM — something plain CSS can't do easily, since removed elements disappear instantly.

## The FLIP Technique

Used for smoothly animating layout changes (e.g. reordering a list) without janky reflows:
```
F — First:  record the element's starting position
L — Last:   record its ending position (after the DOM change)
I — Invert: use a transform to make it LOOK like it's still in the start position
P — Play:   animate the transform back to identity (0), which the browser does cheaply
```

## Respecting Reduced Motion

Some users have vestibular disorders or motion sensitivity — always respect their OS-level preference.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Common Interview Questions

**Q1. Why are `transform` and `opacity` preferred for performant animations?**
They can be handled by the GPU without triggering a browser layout recalculation (reflow), unlike properties like `width`, `left`, or `margin`.

**Q2. What problem does the FLIP technique solve?**
Making layout-changing animations (like reordering items) smooth by using transforms to fake the animation instead of animating actual layout properties, which would be janky.

**Q3. Why should you respect `prefers-reduced-motion`?**
Some users experience discomfort or motion sickness from animations; respecting this OS-level accessibility setting disables/reduces animations for them.

## 🧠 Mini Quiz

1. Which CSS properties are cheapest to animate, performance-wise?
2. What does the "I" in FLIP stand for?
3. What accessibility media query should heavy animations respect?
4. What Framer Motion component lets you animate an element as it's removed from the DOM?

---

# 14. Advanced Testing

*(Builds on Lesson 13 — Testing from your earlier notes)*

## Visual Regression Testing

Catches unintended visual changes by comparing screenshots over time.

```
Baseline screenshot (approved)
        │
        ▼
New screenshot taken after a code change
        │
        ▼
Pixel-diff comparison
        │
   ┌────┴────┐
No diff       Diff found
   │              │
   ▼              ▼
✅ Pass         ❌ Flag for review (real bug, or intentional change to re-approve)
```
Tools: Chromatic, Percy, Playwright's built-in screenshot testing.

## Contract Testing

Ensures a frontend and backend agree on the shape of their API — catches breaking changes before they hit production.

```
Frontend expects: { id: number, name: string }
Backend contract test verifies it still returns exactly that shape
        │
        ▼
If backend changes `name` to `fullName`, the contract test FAILS
before the frontend breaks in production
```
Tools: Pact.

## Snapshot Testing

Captures a component's rendered output and compares it against a saved "snapshot" on future test runs.

```jsx
import renderer from "react-test-renderer";

test("Button renders correctly", () => {
  const tree = renderer.create(<Button>Click</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
```
⚠️ Overused snapshot testing can become noise — large snapshots that change often get blindly re-approved (`--updateSnapshot`) without real review, defeating the purpose. Best for small, stable components.

## Testing Custom Hooks

```jsx
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

test("increments count", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

## Accessibility Testing (Automated)

```jsx
import { axe } from "jest-axe";

test("has no accessibility violations", async () => {
  const { container } = render(<LoginForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Performance Testing

```
Lighthouse CI → runs Core Web Vitals checks automatically in your CI pipeline,
                 failing the build if performance regresses beyond a threshold
```

## Test Coverage — Use Wisely

```bash
npm test -- --coverage
```
```
100% coverage does NOT mean bug-free — it just means every line executed at
least once, not that every edge case or user scenario was verified.
```
Aim for meaningful coverage of critical paths (checkout, auth) over chasing an arbitrary percentage.

## Common Interview Questions

**Q1. What is visual regression testing and what problem does it catch that unit tests miss?**
Comparing screenshots over time to catch unintended visual/layout changes — bugs that don't break functionality (and so wouldn't fail a normal unit test) but do break the UI's appearance.

**Q2. What is contract testing used for?**
Verifying that the frontend and backend agree on API request/response shapes, catching breaking API changes before they cause runtime failures in production.

**Q3. Why can over-reliance on snapshot testing be problematic?**
Large or frequently-changing snapshots often get blindly re-approved without real review when they fail, providing a false sense of test coverage.

**Q4. Does 100% test coverage guarantee a bug-free application?**
No — it only means every line of code executed at least once during tests, not that every logical branch, edge case, or user scenario was actually verified.

## 🧠 Mini Quiz

1. What kind of bug does visual regression testing catch that a normal unit test wouldn't?
2. What does contract testing verify between a frontend and backend?
3. Why can 100% code coverage be misleading?
4. What tool integrates Core Web Vitals checks into a CI pipeline?

---

# 15. CI/CD for Frontend

*(Builds on Lesson 14 — CI/CD, and Lesson 15 — Deployment from your earlier notes)*

## The Frontend CI/CD Pipeline

```
Developer pushes code
        │
        ▼
CI: Lint → Type Check → Unit Tests → Build
        │
        ▼
CD: Deploy to Preview URL (per PR)
        │
        ▼
Manual/automated review of the preview
        │
        ▼
Merge to main
        │
        ▼
CD: Deploy to Production
```

## Example GitHub Actions Workflow

```yaml
name: CI
on: [pull_request]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm test
      - run: npm run build
```

## Preview Deployments

Every pull request gets its own live URL — this is one of the biggest frontend-specific CI/CD wins (platforms like Vercel/Netlify do this automatically).

```
PR #42 opened
        │
        ▼
Deployed to: pr-42-myapp.vercel.app
        │
        ▼
Designer/PM/QA reviews the ACTUAL running app, not just code
        │
        ▼
Approved → merge → auto-deploys to production
```

## Quality Gates

Automatically block a merge if:
```
✅ Tests must pass
✅ Type checking must pass (no TypeScript errors)
✅ Lint checks must pass
✅ Bundle size must not exceed a set budget
✅ Lighthouse score must not regress below a threshold
```

## Feature Flags

Deploy code to production without actually releasing the feature to users yet — decouples *deployment* from *release*.

```jsx
if (featureFlags.isEnabled("new-checkout-flow")) {
  return <NewCheckout />;
}
return <OldCheckout />;
```
This allows: gradual rollouts (5% of users first), instant kill-switches if something breaks, and A/B testing — all without a new deployment.

## Rollback Strategy

```
Bad deploy detected (errors spike, Core Web Vitals crash)
        │
        ▼
Instantly revert to the previous deployment
        │
        ▼
(Most static hosting platforms keep every past deployment instantly available)
```

## Monorepo CI Optimization

In a monorepo (ties into your backend Monorepo notes), only rebuild/retest what actually changed:
```
Change only in packages/ui
        │
        ▼
Turborepo skips rebuilding apps/backend entirely (unaffected)
```

## Common Interview Questions

**Q1. What is a preview deployment and why is it valuable for frontend teams?**
An automatically deployed, unique URL for a pull request, letting reviewers see the actual running app (not just the diff) before merging.

**Q2. What are quality gates in a CI pipeline?**
Automated checks (tests, type checks, lint, bundle size, performance thresholds) that must pass before code is allowed to merge or deploy.

**Q3. What problem do feature flags solve?**
They decouple deploying code from releasing it to users, enabling gradual rollouts, instant kill-switches, and A/B testing without needing a new deployment.

## 🧠 Mini Quiz

1. What is a "preview deployment"?
2. Name two checks that might act as a "quality gate" before merging.
3. What problem do feature flags solve that a simple deploy doesn't?
4. Why does a monorepo build tool like Turborepo skip rebuilding unaffected packages?

---

# 16. Monitoring & Analytics

## 🤔 Why Monitor the Frontend?

Once your app is live, you need to know: is it actually working for real users, where are they dropping off, and what's breaking in production that your tests didn't catch?

## Error Tracking

```js
// Sentry example
import * as Sentry from "@sentry/react";

Sentry.init({ dsn: "your-dsn-here" });

// Automatically captures unhandled errors, or manually:
try {
  riskyOperation();
} catch (error) {
  Sentry.captureException(error);
}
```
```
User hits a bug in production
        │
        ▼
Error automatically reported with: stack trace, browser, user actions
        leading up to it (breadcrumbs), user ID (if available)
        │
        ▼
Engineering team gets alerted instantly, instead of relying on users to report it
```

## Real User Monitoring (RUM)

Measures actual performance experienced by real visitors, not synthetic lab tests.

```js
import { onLCP, onINP, onCLS } from "web-vitals";

onLCP((metric) => sendToAnalytics(metric));
onINP((metric) => sendToAnalytics(metric));
onCLS((metric) => sendToAnalytics(metric));
```
This reveals real-world performance across different devices/networks — a metric that looks great on a developer's fast laptop can be terrible on a budget phone with a slow connection.

## Product Analytics

Tracking user behavior to understand how the product is actually used.

```js
analytics.track("checkout_completed", {
  cartValue: 49.99,
  itemCount: 3,
});
```
Tools: Google Analytics, Mixpanel, Amplitude, PostHog.

```
Funnel Analysis:
Landing Page (10,000 visitors)
        │  70% continue
        ▼
Product Page (7,000 visitors)
        │  40% continue
        ▼
Add to Cart (2,800 visitors)
        │  60% continue
        ▼
Checkout Complete (1,680 visitors)
```
This reveals exactly where users drop off, guiding what to fix first.

## Logging & Structured Events

```js
logger.info("checkout_started", { userId, cartId, timestamp: Date.now() });
```
Structured logs (consistent keys, machine-parseable) are far more useful than free-text `console.log` statements when searching production logs later.

## Session Replay

Tools like FullStory/LogRocket record (privacy-respecting) sessions so engineers can literally watch what a user did right before hitting a bug — invaluable for reproducing hard-to-catch issues.

## Alerting

```
Error rate > 5% in the last 5 minutes
        │
        ▼
Automatically pages the on-call engineer (Slack/PagerDuty)
```

## Common Interview Questions

**Q1. What's the difference between synthetic monitoring and Real User Monitoring (RUM)?**
Synthetic monitoring runs automated checks from a fixed environment (like a CI pipeline); RUM measures actual performance experienced by real users across their varied devices/networks — often revealing very different results.

**Q2. Why use an error tracking tool like Sentry instead of relying on users to report bugs?**
It automatically captures errors with full context (stack trace, breadcrumbs, environment) the moment they happen in production, catching issues far faster and more completely than manual bug reports.

**Q3. What is funnel analysis used for?**
Identifying exactly where users drop off in a multi-step flow (e.g. checkout), so the team can prioritize fixing the highest-impact step.

## 🧠 Mini Quiz

1. What does an error tracking tool like Sentry automatically capture when an error occurs?
2. What's the difference between synthetic monitoring and RUM?
3. What does a funnel analysis reveal about user behavior?
4. What might trigger an automated on-call alert?

---

# 17. Production Deployment

*(Builds on Lesson 15 — Deployment and Lesson 15 (CI/CD) from this guide — the final piece bringing it all together)*

## 🤔 What "Production-Ready" Really Means

Getting code to build and deploy is easy. Making it resilient, observable, secure, and performant in front of real traffic is the actual senior-level skill.

## Production Deployment Checklist

```
✅ Environment variables configured per environment (dev/staging/prod)
✅ Error tracking + monitoring wired up (Sentry, RUM)
✅ Analytics events verified
✅ CSP and security headers configured
✅ CDN caching configured for static assets
✅ Core Web Vitals verified (Lighthouse CI)
✅ Rollback plan in place
✅ Feature flags for risky changes
✅ Accessibility audit passed
✅ Load/stress tested if expecting a traffic spike (e.g. a marketing launch)
```

## Multi-Environment Setup

```
Local (localhost)
     │
     ▼
Development (deployed on every push to a dev branch)
     │
     ▼
Staging (mirrors production, used for final QA)
     │
     ▼
Production (real users)
```
Each environment typically has its own environment variables, API endpoints, and sometimes its own database — catching issues before they reach real users.

## Blue-Green & Canary Deployments (ties into backend Resiliency notes)

```
Blue-Green:
  Blue (current version) serves 100% of traffic
  Green (new version) deployed alongside, fully tested
  Traffic switched instantly from Blue → Green
  If issues arise, instantly switch back to Blue

Canary:
  New version rolled out to 5% of traffic first
        │
        ▼
  Monitor error rates / Core Web Vitals closely
        │
   ┌────┴────┐
  Healthy      Problems detected
   │                │
   ▼                ▼
Gradually        Automatically roll back,
increase to      no impact to the other 95%
100%
```

## Zero-Downtime Deployments

Most modern static hosting (Vercel, Netlify, Cloudflare Pages) achieves this by default — the new version is fully built and ready *before* traffic is switched over, so there's never a moment where the site is "half-deployed."

## CDN & Cache Invalidation

```
New deploy happens
        │
        ▼
New files get new hashed filenames (app.abc123.js → app.def456.js)
        │
        ▼
Old cached files simply become unreferenced — no invalidation needed
        │
        ▼
index.html itself is set to NOT cache (or cache briefly),
so users always get the latest reference to the newest hashed files
```
This "hashed filename" pattern is why frontend deploys can safely use aggressive, long-lived CDN caching for JS/CSS without users ever seeing stale code.

## Post-Deployment Verification

```
Automated smoke tests run immediately after deploy
        │
        ▼
Hits key pages/flows (home, login, checkout) to verify they're actually working
        │
        ▼
If smoke tests fail → automatic rollback triggered
```

## Common Interview Questions

**Q1. What's the difference between blue-green and canary deployments?**
Blue-green instantly switches 100% of traffic between two fully-deployed versions; canary gradually shifts a small percentage of traffic to the new version first, monitoring for issues before a full rollout.

**Q2. How do frontend deployments typically achieve zero-downtime releases?**
By fully building and preparing the new version before switching traffic over, combined with content-hashed filenames so old and new assets can coexist without conflicts during the transition.

**Q3. Why do frontend build tools give JS/CSS files hashed filenames (e.g. `app.abc123.js`)?**
It allows those files to be cached extremely aggressively by CDNs (since the filename changes whenever the content changes), while `index.html` (which references the current hash) stays uncached or lightly cached to always point users to the latest version.

**Q4. What's the purpose of a staging environment?**
To mirror production as closely as possible for final QA and verification before code reaches real users, catching environment-specific issues that local development might miss.

## 🧠 Mini Quiz

1. What's the difference between blue-green and canary deployment strategies?
2. Why are hashed filenames used for JS/CSS build output?
3. What environment typically sits between development and production?
4. What should happen automatically if post-deployment smoke tests fail?

---

