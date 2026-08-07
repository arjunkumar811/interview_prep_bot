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