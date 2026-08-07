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