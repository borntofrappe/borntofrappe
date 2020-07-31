Header for the articles in the blog.

## Markup

Consider the frontmatter presumed by a series of articles, describing the title and optionally icons associated with the post.

```html
<header>
  <h1>{title}</h1>

  <h2>Icons</h2>
  <ul>
    <li>
      <span>{icon name}</span>
      {icon syntax}
    </li>
  </ul>
</header>
```

Hide the `<h2>` and `<span>` elements from sight, but not for assistive technology. This means using the `.visually-hidden` class.

## Icons

By default, display the icons in a flex row, and separate them horizontally with liberal margin.

If grid is supported, center the graphics in `100px` wide columns – 100 being the width of a wave in the SVG pattern.

## z-index

Specify a positive value for the `z-index` of the list.

```css
header ul {
  z-index: 5;
}
```

This is to make sure the icons are shown above the wave pattern. When included through the `::after` pseudo element, the pattern would effectively be on top.
