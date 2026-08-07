⏳ **Estimated Learning Time:** 10-15 min

*(Builds on Lesson 12 — Authentication from your earlier notes)*

## 🤔 Why Frontend Security Matters

The frontend is the most exposed part of your stack — anyone can view your JavaScript, inspect network requests, and try to manipulate your app. Never trust the client.

## Cross-Site Scripting (XSS)

An attacker injects malicious JavaScript that runs in your users' browsers.

```jsx
// ❌ Dangerous — renders raw HTML/JS from user input
<div dangerouslySetInnerHTML={{ __html: userComment }} />

// ✅ React escapes text content by default
<div>{userComment}</div>
```
```
Attacker submits comment: <script>stealCookies()</script>
        │
        ▼
If rendered unsafely, this script runs in every visitor's browser
        │
        ▼
Steals cookies, tokens, or performs actions as that user
```
Defenses: React auto-escapes by default (avoid `dangerouslySetInnerHTML` with untrusted input), use a library like DOMPurify if you must render HTML, set a strict **Content Security Policy (CSP)**.

## Cross-Site Request Forgery (CSRF)

A malicious site tricks a logged-in user's browser into making an unwanted request to your app (since cookies are sent automatically).

```
User is logged into bank.com (cookie stored)
        │
User visits evil-site.com
        │
evil-site.com secretly submits a form to bank.com/transfer
        │
Browser automatically attaches bank.com's cookie
        │
Transfer happens without the user's consent!
```
Defenses: CSRF tokens (a random value the server verifies), `SameSite=Strict/Lax` cookies, checking the `Origin`/`Referer` header.

## Content Security Policy (CSP)

An HTTP header that restricts what sources of scripts/styles/images a page is allowed to load from.

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com
```
Even if an XSS vulnerability exists, a strict CSP can block the injected script from executing or exfiltrating data.

## Secure Cookie Storage (Recap)

```
httpOnly   → JavaScript cannot read the cookie (protects against XSS stealing it)
Secure     → cookie only sent over HTTPS
SameSite   → controls whether the cookie is sent on cross-site requests (protects against CSRF)
```

## Dependency Vulnerabilities

Frontend apps pull in hundreds of npm packages — any one can be compromised.
```bash
npm audit          # scan for known vulnerabilities
npm audit fix       # attempt automatic fixes
```
Supply-chain attacks (a malicious update to a popular package) are an increasingly common real-world threat.

## Clickjacking

An attacker overlays your site in an invisible iframe on their own page, tricking users into clicking something they didn't intend to.

```
X-Frame-Options: DENY
```
or via CSP:
```
Content-Security-Policy: frame-ancestors 'none';
```

## Sensitive Data Exposure

* Never hardcode API keys/secrets in frontend code — they're visible in the bundled JS
* Never log sensitive data (tokens, passwords) to the console in production
* Be careful with `localStorage` — anything stored there is readable by any script running on the page (including a successful XSS payload)

## Common Interview Questions

**Q1. What is XSS and how does React help prevent it by default?**
Cross-Site Scripting — injecting malicious JS that runs in other users' browsers. React auto-escapes content rendered via `{}`, but `dangerouslySetInnerHTML` bypasses this protection.

**Q2. What is CSRF and how is it prevented?**
Tricking a logged-in user's browser into making an unwanted authenticated request. Prevented with CSRF tokens, `SameSite` cookies, and origin checks.

**Q3. Why is storing a JWT in `localStorage` riskier than an `httpOnly` cookie?**
`localStorage` is readable by any JavaScript running on the page, so a successful XSS attack can steal the token directly; `httpOnly` cookies are inaccessible to JavaScript entirely.

**Q4. What does a Content Security Policy do?**
Restricts which sources scripts, styles, and other resources can be loaded from, reducing the impact of an XSS vulnerability even if one exists.

## 🧠 Mini Quiz

1. What does the `httpOnly` cookie flag protect against?
2. What is the difference between XSS and CSRF at a high level?
3. What does `npm audit` check for?
4. What HTTP header helps prevent clickjacking?

---