⏳ **Estimated Learning Time:** 10-15 min

*(Builds on Lesson 14 — Next.js from your earlier notes)*

## Middleware

Code that runs **before** a request completes, at the edge — great for auth checks, redirects, A/B testing, without touching every page.

```ts
// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
```

## Streaming with Suspense

Instead of waiting for the *entire* page's data before sending anything, Next.js can stream parts of the page as they become ready.

```tsx
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Header /> {/* renders instantly */}
      <Suspense fallback={<Spinner />}>
        <SlowDataComponent /> {/* streams in once its data resolves */}
      </Suspense>
    </div>
  );
}
```
```
Without streaming: user sees a blank page until EVERYTHING is ready
With streaming:     user sees the header immediately, slow parts fill in progressively
```

## Route Handlers & Caching

```ts
// app/api/products/route.ts
export async function GET() {
  const data = await db.product.findMany();
  return Response.json(data);
}

export const revalidate = 3600; // ISR: cache for 1 hour
```

## Parallel & Intercepting Routes

**Parallel routes** render multiple independent pages in the same layout simultaneously (e.g. a dashboard with `@analytics` and `@team` slots loading independently):
```
app/
 └── dashboard/
      ├── @analytics/page.tsx
      ├── @team/page.tsx
      └── layout.tsx (renders both slots together)
```

**Intercepting routes** let you show a route in a modal while preserving the underlying page (common in apps like Instagram — clicking a photo opens a modal, but the URL still reflects the photo's own page):
```
app/feed/(.)photo/[id]/page.tsx
```

## Image & Font Optimization

```tsx
import Image from "next/image";

<Image src="/hero.jpg" width={800} height={400} alt="Hero" priority />
```
`next/image` automatically: resizes, serves modern formats (WebP), lazy-loads by default, and prevents layout shift by reserving space upfront.

## Metadata & SEO

```tsx
export const metadata = {
  title: "My App",
  description: "The best app ever",
  openGraph: { images: ["/og-image.png"] },
};
```

## Server Actions

Call server-side functions directly from a form, without manually building an API route.

```tsx
async function createUser(formData: FormData) {
  "use server";
  await db.user.create({ data: { name: formData.get("name") } });
}

<form action={createUser}>
  <input name="name" />
  <button type="submit">Create</button>
</form>
```

## Common Interview Questions

**Q1. What is Next.js Middleware used for?**
Running logic (auth checks, redirects, header rewrites) at the edge before a request reaches a page, without duplicating that logic across every route.

**Q2. How does streaming with Suspense improve perceived performance?**
It lets fast parts of the page render immediately while slower data-dependent parts stream in progressively, instead of blocking the entire page on the slowest piece of data.

**Q3. What are Server Actions?**
Functions marked `"use server"` that can be called directly from client components/forms, letting you perform server-side mutations without manually creating an API route.

## 🧠 Mini Quiz

1. Where does Next.js Middleware run — client or edge/server?
2. What does `<Suspense>` combined with streaming allow a page to do?
3. What does `next/image` automatically handle for you?
4. What directive marks a function as a Server Action?

---