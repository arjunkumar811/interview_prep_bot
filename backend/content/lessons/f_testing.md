⏳ **Estimated Learning Time:** 10-15 min

## 🤔 Testing the Frontend

*(Builds on Lesson 39 — Testing Node.js from your backend notes — same principles, applied to UI)*

## The Testing Pyramid (Frontend Version)

```
        ▲
       / \        Few — full user flows in a real browser
      / E2E \
     /-------\
    /Integr-  \    Some — multiple components working together
   / ation     \
  /-------------\
 /  Unit Tests   \  Many — a single component/function in isolation
/-------------------\
```

## Unit Testing a Component (React Testing Library + Jest/Vitest)

```jsx
// Button.jsx
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
```

```jsx
// Button.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  fireEvent.click(screen.getByText("Click Me"));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## Testing Philosophy: Test Behavior, Not Implementation

React Testing Library is intentionally built around how a **user** interacts with your app — finding elements by visible text or role — rather than internal implementation details.

```js
// ✅ Good — tests what the user sees/does
screen.getByRole("button", { name: "Submit" });

// ❌ Avoid — tests internal implementation details
wrapper.find(".btn-primary-internal-class");
```

## Testing Async Behavior (API Calls)

```jsx
import { render, screen, waitFor } from "@testing-library/react";

test("shows users after fetching", async () => {
  render(<Users />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Arjun")).toBeInTheDocument();
  });
});
```

## Mocking API Calls

```js
jest.mock("axios");
axios.get.mockResolvedValue({ data: [{ id: 1, name: "Arjun" }] });
```
Or with **MSW (Mock Service Worker)**, which intercepts real network requests at the network level, making tests behave more realistically:
```js
const server = setupServer(
  rest.get("/api/users", (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: "Arjun" }]));
  })
);
```

## End-to-End (E2E) Testing (Cypress / Playwright)

Tests the entire app in a real browser, simulating a real user:

```js
// Cypress example
cy.visit("/login");
cy.get("input[name=email]").type("arjun@gmail.com");
cy.get("input[name=password]").type("password123");
cy.get("button[type=submit]").click();
cy.url().should("include", "/dashboard");
```

## Common Interview Questions

**Q1. What's the philosophy behind React Testing Library?**
Test components the way a user would interact with them (finding elements by visible text/role) rather than testing internal implementation details.

**Q2. Difference between unit, integration, and E2E tests on the frontend?**
Unit tests check one component/function in isolation; integration tests check multiple components working together; E2E tests simulate a real user flow in an actual browser.

**Q3. Why mock API calls in component tests?**
To keep tests fast and reliable, independent of a real backend being available, and to control exactly what data the component receives.

## 🧠 Mini Quiz

1. What does React Testing Library encourage you to query by, instead of CSS classes?
2. What tool lets you test full user flows in a real browser?
3. Why do we mock API responses in unit/integration tests?
4. In the testing pyramid, which type of test should you have the most of?

---