# Blog Post Header

Header for blog post pages.

## Markup

Consider data from the (presumed) frontmatter for a series of articles, describing the title and optionally icons associated with the post.

```njk
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

Hide the `<h2>` and `<span>` elements from sight, but not screen readers.

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

This is to make sure the icons are shown above the wave pattern. When included through the `::after` pseudo element, the pattern is effectively on top.
