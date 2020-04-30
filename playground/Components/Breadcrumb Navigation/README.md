# Breadcrumb Navigation

- match the title of the page

- add `aria-label` to describe the navigation

- (optional) add an icon next to the anchor links

- change the default focus state to modify only the color

## Usage notes

The format changes according to the title. Consider the following for-instances.

### Landing page

```html
<nav aria-label="Breadcrumb navigation">
  <a href="/">
    borntofrappe {{ icons.rocket }}
  </a>
</nav>
```

### Blog

```html
<nav aria-label="Breadcrumb navigation">
  <a href="/">
    borntofrappe {{ icons.rocket }}
  </a>
  <a href="/blog">
    / blog {{ icons.blog }}
  </a>
</nav>
```

### Blog post

```html
<nav aria-label="Breadcrumb navigation">
  <a href="/">
    borntofrappe {{ icons.rocket }}
  </a>
  <a href="/blog">
    / blog {{ icons.blog }}
  </a>
  <a href="/blog/dash-separated-title">
    / blog / dash-separated-title
  </a>
</nav>
```
