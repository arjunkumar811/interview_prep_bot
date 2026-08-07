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