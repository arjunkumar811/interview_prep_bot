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