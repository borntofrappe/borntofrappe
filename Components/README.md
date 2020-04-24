# Components

And a few instructions on how to use them.

## Breadcrumbs

- at the top of every page

- matching the title of the page (sans icons)

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

## Header

- introducing blog post

- heading

- section displaying a series of icons

- background-image repeating an SVG element

### visually-hidden

The project uses the same class created for **Skip to Content**, to add a heading and labels for the different tags. These are ultimately shown with SVG syntax.

### supports grid

The icons are added in a list item, and are tentatively separated using `display: flex` and liberal horizontal margin. If grid is supported, the layout becomes much easier, as the icons are slotted in columns `100px` wide. `100px` as in the width of a wave in the pattern.

### overflow

The last header includes more icons than practically useful, but this is to show how the list overflows horizontally.
