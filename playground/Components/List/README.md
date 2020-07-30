Use the syntax described in `badge-check.svg` and `badge-outline`, for `<ul>` and `<ol>` elements respectively.

## Mask

If mask properties are not supported, provide a sensible fallback. This means including a small circle for `<ul>` elements, and a border around the custom counter for `<ol>` elements.

## prefers-color-scheme

For the dark preference, reduce the weight of the custom counter in the `<ol>` elements.

Update the attribute on the `body` element to review the change.

```html
<body data-preference="dark"></body>
```
