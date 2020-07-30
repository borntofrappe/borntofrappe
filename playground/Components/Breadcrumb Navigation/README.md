In the script I experiment with different URLs. With JavaScript I include the necessary elements and `href` attributes.

## Markup

- for the homepage include the string _borntofrappe_ followed by the icon of a rocket

- for any additional route include the string detailing the path and an icon, if available

Separate each route with a slash `/`

### For instance

```html
<nav>
  <a href="/">borntofrappe {rocket}</a>
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
  <a href="/blog/up-and-running">/ up-and-running</a>
</nav>
```

## prefers-color-scheme

For the dark preference, reduce the weight of the text describing the links.

Update the attribute on the `body` element to review the change.

```html
<body data-preference="dark"></body>
```
