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