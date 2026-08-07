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