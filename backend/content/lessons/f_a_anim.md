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