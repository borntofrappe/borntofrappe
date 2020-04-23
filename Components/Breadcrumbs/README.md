# Breadcrumbs

- at the top of every page

- matching the title of the page (sans icons)

- adding an icon next to the anchor link when an icon is available

## For instance

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

Blog post(s): borntofrappe / blog / title

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
  <a href="/blog/title">
    / blog / title
  </a>
</nav>
```
