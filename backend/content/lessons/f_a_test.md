*(Builds on Lesson 13 — Testing from your earlier notes)*

## Visual Regression Testing

Catches unintended visual changes by comparing screenshots over time.

```
Baseline screenshot (approved)
        │
        ▼
New screenshot taken after a code change
        │
        ▼
Pixel-diff comparison
        │
   ┌────┴────┐
No diff       Diff found
   │              │
   ▼              ▼
✅ Pass         ❌ Flag for review (real bug, or intentional change to re-approve)
```
Tools: Chromatic, Percy, Playwright's built-in screenshot testing.

## Contract Testing

Ensures a frontend and backend agree on the shape of their API — catches breaking changes before they hit production.

```
Frontend expects: { id: number, name: string }
Backend contract test verifies it still returns exactly that shape
        │
        ▼
If backend changes `name` to `fullName`, the contract test FAILS
before the frontend breaks in production
```
Tools: Pact.

## Snapshot Testing

Captures a component's rendered output and compares it against a saved "snapshot" on future test runs.

```jsx
import renderer from "react-test-renderer";

test("Button renders correctly", () => {
  const tree = renderer.create(<Button>Click</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
```
⚠️ Overused snapshot testing can become noise — large snapshots that change often get blindly re-approved (`--updateSnapshot`) without real review, defeating the purpose. Best for small, stable components.

## Testing Custom Hooks

```jsx
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

test("increments count", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

## Accessibility Testing (Automated)

```jsx
import { axe } from "jest-axe";

test("has no accessibility violations", async () => {
  const { container } = render(<LoginForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Performance Testing

```
Lighthouse CI → runs Core Web Vitals checks automatically in your CI pipeline,
                 failing the build if performance regresses beyond a threshold
```

## Test Coverage — Use Wisely

```bash
npm test -- --coverage
```
```
100% coverage does NOT mean bug-free — it just means every line executed at
least once, not that every edge case or user scenario was verified.
```
Aim for meaningful coverage of critical paths (checkout, auth) over chasing an arbitrary percentage.

## Common Interview Questions

**Q1. What is visual regression testing and what problem does it catch that unit tests miss?**
Comparing screenshots over time to catch unintended visual/layout changes — bugs that don't break functionality (and so wouldn't fail a normal unit test) but do break the UI's appearance.

**Q2. What is contract testing used for?**
Verifying that the frontend and backend agree on API request/response shapes, catching breaking API changes before they cause runtime failures in production.

**Q3. Why can over-reliance on snapshot testing be problematic?**
Large or frequently-changing snapshots often get blindly re-approved without real review when they fail, providing a false sense of test coverage.

**Q4. Does 100% test coverage guarantee a bug-free application?**
No — it only means every line of code executed at least once during tests, not that every logical branch, edge case, or user scenario was actually verified.

## 🧠 Mini Quiz

1. What kind of bug does visual regression testing catch that a normal unit test wouldn't?
2. What does contract testing verify between a frontend and backend?
3. Why can 100% code coverage be misleading?
4. What tool integrates Core Web Vitals checks into a CI pipeline?

---