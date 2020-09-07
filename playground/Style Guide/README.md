# Style Guide

Refer to the different folders for more detail

## Fonts

| Pick            | Type       | Purpose                             |
| --------------- | ---------- | ----------------------------------- |
| Maven Pro       | sans-serif | navigation, footer, header, heading |
| Ubuntu          | sans-serif | body                                |
| Source Code Pro | monospace  | code                                |

The purpose is not prescriptive, but more of a guideline. Maven Pro is slightly bulkier than Ubuntu, and used sparingly throughout the interface.

From Google Fonts, include the fonts in the markup or in the stylesheet.

```html
<link
  href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500;600;700&family=Source+Code+Pro&family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  rel="stylesheet"
/>
```

```css
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500;600;700&family=Source+Code+Pro&family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap');
```

Refer to _Fonts/index.html_ for a visual.

## Colors

In _Colors/index.html_ I describe four different sets of colors. `frappe` and `frappe-grey` are used by default, while `twilight` and `twilight-grey` for a dark color scheme.

Refer to _Colors/global.css_ to see how the variables are set up. Include the sets in the `:root` element, and the variables actually using these values in the `body` element, using `--primary-*` and `--grey-*` labels. For the dark color scheme, refer to the logic described in _Components/Dark Mode Toggle_.

**Be warned**: in the design of a few components, like the footer, the elements use the colors from a one scheme only.

```css
footer {
  color: var(--frappe-grey-10);
  background: var(--frappe-grey-0);
}
```

The idea is to have "fixtures", elements which do not change even if the preference changes.

## Icons

- set up a viewBox of `-50 -50 100 100`

- specify a default size of `1em`

- add `aria-hidden: true` and `aria-focusable: false`

When designing a new icon, the following syntax provides a solid starting point.

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

The script _Icons/script.js_ creates two files:

- _icons.js_; an object detailing the icons in property value pairs

- _index.html_; a visual

## Patterns

Process the syntax through [yoksel.github.io](http://yoksel.github.io/url-encoder/) to escape the necessary characters and inline the syntax

Include the syntax in the `url()` function for one of the following properties

- `content`

- `background-image`

- `mask-image`

Refer to _Patterns/index.html_ for a visual

## Illustrations

Include the graphics in the dedicated pages and sections. Consider changing the `viewBox` attribute to crop the visuals as needed.
