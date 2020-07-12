# Style Guide

> refer to the different folders for more detail

## Fonts

| Pick            | Type       | Purpose                             |
| --------------- | ---------- | ----------------------------------- |
| Maven Pro       | sans-serif | navigation, footer, header, heading |
| Ubuntu          | sans-serif | body                                |
| Source Code Pro | monospace  | code                                |

Consider [this url](https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500;600;700&family=Source+Code+Pro&family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap):

```code
https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500;600;700&family=Source+Code+Pro&family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap
```

From this starting point set up the Latin variants with the `@font-face` rule.

Refer to `Fonts/index.html` for a visual

## Colors

- primary

- secondary

- grey

Set up with custom properties: `--primary-0`, `--primary-1`, where greater index values correspond to greater lightness.

Refer to `Colors/index.html` for a visual

## Icons

- set up a viewBox of `-50 -50 100 100`

- specify a default size of `1em`

- add `aria-hidden: true` and `aria-focusable: false`

Copy-paste the following markup if need be:

```html
<svg
  aria-hidden="true"
  aria-focusable="false"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-50 -50 100 100"
  width="1em"
  height="1em"
>
  <g>
    <!-- drawing elements -->
  </g>
</svg>
```

The script `Icons/script.js` creates two files:

- `icons.js`; an object detailing the icons in property value pairs

- `index.html`; a visual

## Patterns

Process the syntax through [this website](http://yoksel.github.io/url-encoder/) to escape the necessary characters and inline the syntax

Include the syntax in the `url()` function for one of the following properties

- `content`

- `background-image`

- `mask-image`

Refer to `Patterns/index.html` for a visual
