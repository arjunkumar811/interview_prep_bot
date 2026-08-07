⏳ **Estimated Learning Time:** 10-15 min

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