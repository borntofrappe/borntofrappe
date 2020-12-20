# Style Guide

Refer to the different folders for more detail.

## Fonts

Consider the following table as a quick reference.

| Choice          | Type       | Purpose                             |
| --------------- | ---------- | ----------------------------------- |
| Maven Pro       | sans-serif | navigation, footer, header, heading |
| Ubuntu          | sans-serif | body                                |
| Source Code Pro | monospace  | code                                |

From Google Fonts, include the fonts in the markup.

```html
<link
  href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500;600;700&family=Source+Code+Pro&family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  rel="stylesheet"
/>
```

Or, alternatively, in the stylesheet.

```css
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500;600;700&family=Source+Code+Pro&family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap');
```

## Colors

In the global stylesheet, I describe four different sets of colors. `frappe` and `frappe-grey`, included by default, and `twilight` and `twilight-grey` for the alternative color palette. dark color scheme.

The idea is to include the sets in the `:root` selector, and the variables actually using these values in the `body` selector, with `--primary-*` and `--grey-*` labels.

In the `Colors` folder, you find a node script which looks at the global stylesheet to provide a visual representation of the possible colors in a markup file.

In terms of design, it is worth mentioning how in the design of a few components, like the footer, the elements use the colors from a one color scheme only.

```css
footer {
  color: var(--frappe-grey-10);
  background: var(--frappe-grey-0);
}
```

The idea is to here have "fixtures", elements which do not change even if the preference changes.

## Icons

In creating the vector graphics, I try to adhere to a few guidelines:

- set up a viewBox of `-50 -50 100 100`

- specify a default size of `1em`

- add `aria-hidden: true` and `aria-focusable: false`

The following syntax provides a solid starting point.

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

In the `Icons` folder, you find a node script which looks for SVG files to create two files:

- `icons.js`, with an object detailing the icons in key-value pairs

- `index.html`, with a visual representation of the possible icons

## Illustrations

Illustrations are meant to describe one-off visuals for specific sections or pages.

## Patterns

Patterns are included in the sections/pages of the website to add more variety to the background/edges of different elements.

The vector graphics are processed through [yoksel.github.io/url-encoder](http://yoksel.github.io/url-encoder/) to escape the necessary characters and inline the syntax.

The syntax is finally included in the `url()` function for one of the following properties:

- `content`

- `background-image`

- `mask-image`
