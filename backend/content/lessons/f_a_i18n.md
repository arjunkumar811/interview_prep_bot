⏳ **Estimated Learning Time:** 10-15 min

## 🤔 What is i18n?

"Internationalization" (i18n — "i" + 18 letters + "n") is the process of designing an app so it can be adapted to different languages, regions, and cultures without code changes — **localization (l10n)** is then the actual process of translating and adapting it for a specific locale.

```
i18n → building the app to SUPPORT multiple languages
l10n → actually translating/adapting content for ONE specific language
```

## Basic Setup (react-i18next example)

```js
// en.json
{ "welcome": "Welcome, {{name}}!" }

// fr.json
{ "welcome": "Bienvenue, {{name}}!" }
```
```jsx
import { useTranslation } from "react-i18next";

function Welcome({ name }) {
  const { t } = useTranslation();
  return <h1>{t("welcome", { name })}</h1>;
}
```

## Handling Pluralization

Different languages pluralize differently — not just "add an s".

```json
{
  "items_one": "{{count}} item",
  "items_other": "{{count}} items"
}
```
```jsx
t("items", { count: 5 }); // "5 items"
t("items", { count: 1 }); // "1 item"
```
Some languages (like Russian, Arabic) have several plural forms — i18n libraries handle this via [ICU MessageFormat](https://icu.unicode.org) rules automatically.

## Date, Number & Currency Formatting

Never hardcode formatting — it varies drastically by locale.

```js
new Intl.DateTimeFormat("en-US").format(new Date()); // 8/8/2026
new Intl.DateTimeFormat("en-GB").format(new Date()); // 08/08/2026

new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(1000);
// "$1,000.00"
new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(1000);
// "1.000,00 €"
```

## RTL (Right-to-Left) Languages

Arabic, Hebrew, and others read right-to-left — the entire layout must mirror, not just the text.

```html
<html dir="rtl">
```
```css
/* Use logical properties instead of physical ones */
margin-inline-start: 8px;  /* instead of margin-left, which breaks in RTL */
```

## Common Pitfalls

* Concatenating translated strings (`t("hello") + " " + name`) — word order differs across languages; use interpolation instead
* Hardcoding text directly in JSX instead of using translation keys
* Assuming all text is roughly the same length — German text can be 30% longer than English, breaking fixed-width layouts
* Baking currency symbols/formats into component logic instead of using `Intl`

## Common Interview Questions

**Q1. What's the difference between i18n and l10n?**
i18n is designing the app's architecture to support multiple languages/locales; l10n is the actual process of adapting content (translations, formats) for a specific locale.

**Q2. Why shouldn't you concatenate translated string fragments together?**
Word order and grammar differ across languages — string interpolation within a single translated template preserves correct grammar, while concatenation can produce nonsensical sentences.

**Q3. What extra consideration does supporting Arabic or Hebrew require beyond translation?**
RTL (right-to-left) layout support — the entire UI direction must mirror, using `dir="rtl"` and logical CSS properties instead of fixed left/right values.

## 🧠 Mini Quiz

1. What's the difference between i18n and l10n?
2. Why does date formatting differ between `en-US` and `en-GB` locales?
3. What does `dir="rtl"` do?
4. Why is naive string concatenation a bad way to build translated sentences?

---