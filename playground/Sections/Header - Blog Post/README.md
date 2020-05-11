# Blog Post Header

Header for blog post pages.

## Markup

The script populates the body of the document from the frontmatter presumed from a series of articles.

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
