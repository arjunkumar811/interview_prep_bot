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