⏳ **Estimated Learning Time:** 10-15 min

## 🤔 Why Monitor the Frontend?

Once your app is live, you need to know: is it actually working for real users, where are they dropping off, and what's breaking in production that your tests didn't catch?

## Error Tracking

```js
// Sentry example
import * as Sentry from "@sentry/react";

Sentry.init({ dsn: "your-dsn-here" });

// Automatically captures unhandled errors, or manually:
try {
  riskyOperation();
} catch (error) {
  Sentry.captureException(error);
}
```
```
User hits a bug in production
        │
        ▼
Error automatically reported with: stack trace, browser, user actions
        leading up to it (breadcrumbs), user ID (if available)
        │
        ▼
Engineering team gets alerted instantly, instead of relying on users to report it
```

## Real User Monitoring (RUM)

Measures actual performance experienced by real visitors, not synthetic lab tests.

```js
import { onLCP, onINP, onCLS } from "web-vitals";

onLCP((metric) => sendToAnalytics(metric));
onINP((metric) => sendToAnalytics(metric));
onCLS((metric) => sendToAnalytics(metric));
```
This reveals real-world performance across different devices/networks — a metric that looks great on a developer's fast laptop can be terrible on a budget phone with a slow connection.

## Product Analytics

Tracking user behavior to understand how the product is actually used.

```js
analytics.track("checkout_completed", {
  cartValue: 49.99,
  itemCount: 3,
});
```
Tools: Google Analytics, Mixpanel, Amplitude, PostHog.

```
Funnel Analysis:
Landing Page (10,000 visitors)
        │  70% continue
        ▼
Product Page (7,000 visitors)
        │  40% continue
        ▼
Add to Cart (2,800 visitors)
        │  60% continue
        ▼
Checkout Complete (1,680 visitors)
```
This reveals exactly where users drop off, guiding what to fix first.

## Logging & Structured Events

```js
logger.info("checkout_started", { userId, cartId, timestamp: Date.now() });
```
Structured logs (consistent keys, machine-parseable) are far more useful than free-text `console.log` statements when searching production logs later.

## Session Replay

Tools like FullStory/LogRocket record (privacy-respecting) sessions so engineers can literally watch what a user did right before hitting a bug — invaluable for reproducing hard-to-catch issues.

## Alerting

```
Error rate > 5% in the last 5 minutes
        │
        ▼
Automatically pages the on-call engineer (Slack/PagerDuty)
```

## Common Interview Questions

**Q1. What's the difference between synthetic monitoring and Real User Monitoring (RUM)?**
Synthetic monitoring runs automated checks from a fixed environment (like a CI pipeline); RUM measures actual performance experienced by real users across their varied devices/networks — often revealing very different results.

**Q2. Why use an error tracking tool like Sentry instead of relying on users to report bugs?**
It automatically captures errors with full context (stack trace, breadcrumbs, environment) the moment they happen in production, catching issues far faster and more completely than manual bug reports.

**Q3. What is funnel analysis used for?**
Identifying exactly where users drop off in a multi-step flow (e.g. checkout), so the team can prioritize fixing the highest-impact step.

## 🧠 Mini Quiz

1. What does an error tracking tool like Sentry automatically capture when an error occurs?
2. What's the difference between synthetic monitoring and RUM?
3. What does a funnel analysis reveal about user behavior?
4. What might trigger an automated on-call alert?

---