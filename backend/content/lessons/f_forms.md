⏳ **Estimated Learning Time:** 10-15 min

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