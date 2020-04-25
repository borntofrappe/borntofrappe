# Components

> And a few instructions on how to use them.

For every page.

## Breadcrumbs

- at the top of every page

- match the title of the page (sans icons)

- adding an icon next to the anchor link when an icon is available

### For instance

Landing page: borntofrappe

```html
<nav aria-label="Breadcrumb navigation">
  <a href="/">
    borntofrappe
    <!-- icon rocket -->
  </a>
</nav>
```

Blog: borntofrappe / blog

```html
<nav aria-label="Breadcrumb navigation">
  <a href="/">
    borntofrappe
    <!-- icon rocket -->
  </a>
  <a href="/blog">
    / blog
    <!-- icon blog -->
  </a>
</nav>
```

Blog post(s): borntofrappe / blog / dash-separated-title

```html
<nav aria-label="Breadcrumb navigation">
  <a href="/">
    borntofrappe
    <!-- icon rocket -->
  </a>
  <a href="/blog">
    / blog
    <!-- icon blog -->
  </a>
  <a href="/blog/dash-separated-title">
    / blog / dash-separated-title
  </a>
</nav>
```

## Skip to Content

- first element in the body

- available for screen users only

- referencing the element with an `id` of `#content`

## Footer

- background image repeating an SVG element

- mask creating a wave-like pattern

- vertically the mirrored version of header

---

For the blog specifically.

## Header

- introduce blog post

- heading

- section displaying a series of icons

- background-image repeating an SVG element

- mask creating a wave-like pattern

### visually-hidden

The project uses the same class created for **Skip to Content**, to add a heading and labels for the different tags. These are ultimately shown with SVG syntax.

### supports grid

The icons are added in a list item, and are tentatively separated using `display: flex` and liberal horizontal margin. If grid is supported, the layout becomes much easier, as the icons are slotted in columns `100px` wide. `100px` as in the width of a wave in the pattern.

### overflow

The last header includes more icons than practically useful, but this is to show how the list overflows horizontally.

## Heading

- permalink class

- permalink icon

- match the id of the heading with the href of the nested anchor link

## Blockquote

Find if it's possible to center the element without setting `flex` on the parent container

## Table

- add enough margin to offset the height of the `::before` pseudo element (`margin-top`)

- compensate height of the pseudo element when adding `padding` to the first table row

## Code Snippet

- use the `>` selector to target the parent `pre` element only

- remove the margin on the pre element `.shiki`

- add a `div` element describing the language of the snippet

The structure is the output of a script using `shiki`. Try to replicate the HTML with whatever syntax highlighting is most appropriate for 11ty.

```pug
pre
  div.language
    svg.lang
    span lang
  //- actual code
```

## List

- margin to compensate the pseudo elements
