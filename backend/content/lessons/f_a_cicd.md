⏳ **Estimated Learning Time:** 10-15 min

*(Builds on Lesson 14 — CI/CD, and Lesson 15 — Deployment from your earlier notes)*

## The Frontend CI/CD Pipeline

```
Developer pushes code
        │
        ▼
CI: Lint → Type Check → Unit Tests → Build
        │
        ▼
CD: Deploy to Preview URL (per PR)
        │
        ▼
Manual/automated review of the preview
        │
        ▼
Merge to main
        │
        ▼
CD: Deploy to Production
```

## Example GitHub Actions Workflow

```yaml
name: CI
on: [pull_request]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm test
      - run: npm run build
```

## Preview Deployments

Every pull request gets its own live URL — this is one of the biggest frontend-specific CI/CD wins (platforms like Vercel/Netlify do this automatically).

```
PR #42 opened
        │
        ▼
Deployed to: pr-42-myapp.vercel.app
        │
        ▼
Designer/PM/QA reviews the ACTUAL running app, not just code
        │
        ▼
Approved → merge → auto-deploys to production
```

## Quality Gates

Automatically block a merge if:
```
✅ Tests must pass
✅ Type checking must pass (no TypeScript errors)
✅ Lint checks must pass
✅ Bundle size must not exceed a set budget
✅ Lighthouse score must not regress below a threshold
```

## Feature Flags

Deploy code to production without actually releasing the feature to users yet — decouples *deployment* from *release*.

```jsx
if (featureFlags.isEnabled("new-checkout-flow")) {
  return <NewCheckout />;
}
return <OldCheckout />;
```
This allows: gradual rollouts (5% of users first), instant kill-switches if something breaks, and A/B testing — all without a new deployment.

## Rollback Strategy

```
Bad deploy detected (errors spike, Core Web Vitals crash)
        │
        ▼
Instantly revert to the previous deployment
        │
        ▼
(Most static hosting platforms keep every past deployment instantly available)
```

## Monorepo CI Optimization

In a monorepo (ties into your backend Monorepo notes), only rebuild/retest what actually changed:
```
Change only in packages/ui
        │
        ▼
Turborepo skips rebuilding apps/backend entirely (unaffected)
```

## Common Interview Questions

**Q1. What is a preview deployment and why is it valuable for frontend teams?**
An automatically deployed, unique URL for a pull request, letting reviewers see the actual running app (not just the diff) before merging.

**Q2. What are quality gates in a CI pipeline?**
Automated checks (tests, type checks, lint, bundle size, performance thresholds) that must pass before code is allowed to merge or deploy.

**Q3. What problem do feature flags solve?**
They decouple deploying code from releasing it to users, enabling gradual rollouts, instant kill-switches, and A/B testing without needing a new deployment.

## 🧠 Mini Quiz

1. What is a "preview deployment"?
2. Name two checks that might act as a "quality gate" before merging.
3. What problem do feature flags solve that a simple deploy doesn't?
4. Why does a monorepo build tool like Turborepo skip rebuilding unaffected packages?

---