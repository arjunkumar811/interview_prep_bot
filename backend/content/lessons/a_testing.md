⏳ **Estimated Learning Time:** 10-15 min

## 🤔 Why Test?

Without tests, you only find bugs when a real user hits them. With tests, you catch bugs the moment you write the code — and CI/CD (Lesson 14) can automatically reject broken code before it reaches production.

## The Testing Pyramid

```
        ▲
       / \       Few, slow, expensive
      / E2E\
     /-------\
    /Integr-  \    More, medium speed
   / ation     \
  /-------------\
 /   Unit Tests  \  Many, fast, cheap
/-------------------\
```

* **Unit Tests** — test one function in isolation (e.g. does `calculateTotal()` return the right number?)
* **Integration Tests** — test multiple pieces together (e.g. does the API route correctly save to the database?)
* **End-to-End (E2E) Tests** — test the whole flow like a real user (e.g. sign up → log in → checkout)

## Example: Unit Test with Jest

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require("./sum");

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});
```

```bash
npm test
```
```
PASS  ./sum.test.js
✓ adds 2 + 3 to equal 5
```

## Example: Testing an Express Route with Supertest

```js
const request = require("supertest");
const app = require("./app");

test("GET /users returns 200", async () => {
  const res = await request(app).get("/users");
  expect(res.statusCode).toBe(200);
});
```

## Mocking

Replace a real dependency (like a database or external API) with a fake one, so tests are fast and don't depend on external services.

```js
jest.mock("./db");
db.findUser.mockResolvedValue({ id: 1, name: "Arjun" });
```

## Common Interview Questions

**Q1. What's the difference between unit and integration tests?**
Unit tests isolate a single function; integration tests check that multiple parts (e.g. route + database) work together correctly.

**Q2. Why do we mock dependencies in unit tests?**
To keep tests fast, reliable, and independent of external systems like databases or third-party APIs.

**Q3. What tools are commonly used to test a Node.js/Express app?**
Jest or Mocha for the test runner/assertions, and Supertest for HTTP route testing.

## 🧠 Mini Quiz

1. Which type of test checks a single function in isolation?
2. What is "mocking" used for in tests?
3. Why should CI/CD pipelines run tests automatically before deployment?

---