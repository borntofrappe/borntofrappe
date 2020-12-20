# Breadcrumb Navigation

At the top of every page, the idea is to show the routes building the current URL. In the specific demo, the necessary markup is created with a few lines of JavaScript and a few example links.

## Markup

The individual crumbs are built as follows:

- for the homepage, include the string _borntofrappe_ followed by the icon of a rocket

- for any additional route, include the string detailing the path and an icon, if available

- separate each route with a slash `/`

For instance:

```html
<nav>
  <a href="/">borntofrappe {rocket icon}</a>
</nav>
```

```html
<nav>
  <a href="/">borntofrappe {rocket icon}</a>
  <a href="/blog">/ blog {blog icon}</a>
</nav>
```

```html
<nav>
  <a href="/">borntofrappe {rocket icon}</a>
  <a href="/blog">/ blog {blog icon}</a>
  <a href="/blog/1st-January-2021">/ 1st-January-2021</a>
</nav>
```

## prefers-color-scheme

If the media query highlights the dark preference, reduce the weight of the text describing the links.

```css
@media (prefers-color-scheme: dark) {
  body:not([data-preference]) nav a {
    font-weight: 600;
  }
}

body[data-preference='dark'] nav a {
  font-weight: 600;
}
```
