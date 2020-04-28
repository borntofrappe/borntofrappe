# Design Guide

Systems, patterns and assets used in the website.

## Fonts

| Choice          | Type       | Purpose                             |
| --------------- | ---------- | ----------------------------------- |
| Maven Pro       | sans-serif | navigation, footer, header, heading |
| Crimson Pro     | serif      | body                                |
| Source Code Pro | monospace  | code                                |

Import with HTML

```html
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Maven+Pro:wght@500;600;700&family=Source+Code+Pro&display=swap" rel="stylesheet" />
```

Import with CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Maven+Pro:wght@500;600;700&family=Source+Code+Pro&display=swap");
```

## Colors

> the markup shows the picks side by side

Scales of 11 choices, varying in hue, saturation, and most prominently lightness

- primary

- secondary

- grey

Set up with custom properties: `--primary-0`, `--primary-1`, where greater index values correspond to greater lightness.

## Icons

> the script creates the object with the icons, _and_ the markup showing the assets

In `_data`, add `icons.js` describing the icons through key value pairs:

```js
module.exports = {
  blog: `<svg></svg>`,
  rocket: `<svg></svg>`,
};
```

Through the templating language, inject the icon where needed:

```njk
{{ icons.rocket }}
{{ icons.blog }}
```

When creating an icon:

- specify a default size of `1em`

- add `aria-hidden: true` and `aria-focusable: false`

## Patterns

`.svg` files and other assets repeated throughout the website.

## Meta Tags

Static assets and markup filling the `<head>` of the documents.
