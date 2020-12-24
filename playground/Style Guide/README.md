# Style Guide

## Fonts

The dedicated folder shows the different choices with an arbitrary HTML structure. That being said, consider the following table as a quick reference.

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

In the website, the goal is to have four different sets of colors: `frappe-*` and `frappe-grey-*`, included by default, `twilight` and `twilight-grey` for the alternative, dark color palette.

In terms of design, it is worth mentioning that a few components, like the footer, use to colors from a one color scheme only.

```css
footer {
  color: var(--frappe-grey-10);
  background: var(--frappe-grey-0);
}
```

The idea is to here have "fixtures", elements which do not change even if the preference changes.

In terms of implementation, the sets are defined in the `:root` selector of the global stylesheet, `global.css`, and then use one of the two sets by setting additional properties in the `body` selector: `--primary-*` and `--grey-*`.

```css
:root {
  --frappe-0: hsl(350, 100%, 8%);
  --frappe-1: hsl(347, 100%, 19%);
}

body {
  --primary-0: var(--frappe-0);
  --primary-1: var(--frappe-1);
}
```

The `Colors` folder includes the global stylesheet, `global.css`, as well as a demo showcasing the different hsl combination and a stylesheet devoted to syntax highlighting, `syntax-highlighting.css`. This last stylesheet is necessary to customize the appearance of code fences, marked by the `highlight.js` library to have a series of `<span>` elements and specific `hljs-` classes.

## Icons

In the dedicated folder you find a `syntax` folder, where I design the vector graphics. In creating these visuals, I try to adhere to a few guidelines:

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

Past this folder, you find a node script which creates two files:

- `icons.js`, to show the SVG syntax in an object

  The key-value pairs are meant to highlight the name and syntax of each icon.

  ```js
  const icons = {
    abacus: `<svg></svg>`,
    at: `<svg></svg>`,
  };
  ```

- `index.html`, to show every icon in a grid and a series of `<article>` elements

## Illustrations

In the folder I designed a series of vector graphics which work as one-off for specific sections or pages. `astronaut-*` graphics, for instance, are meant to introduce the pages of the website. `telescope-*` graphics instead describe the visual included in the landing page for the rotating telescope.

## Patterns

In the folder you find a couple of vector graphics which are meant to change the background/edges of different elements. The markup file `index.html` then showcases how the visuals are incorporated in a few examples.

_Please note_: the vector graphics are processed through [yoksel.github.io/url-encoder](http://yoksel.github.io/url-encoder/) to escape the necessary characters and inline the syntax. The syntax is finally included in the `url()` function for the `content`, `background-image`, or again `mask-image` property.
