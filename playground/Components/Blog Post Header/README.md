# Blog Post Header

## Markup

The script populates the body of the document from the frontmatter presumed from a series of articles.

## Icons

By default, display the icons in a flex row, and separate them horizontally with liberal margin.

If grid is supported, center the graphics in `100px` wide columns – 100 being the width of a wave in the SVG pattern.

## scrollbar

Style the horizontal scrollbar of the unordered list to match the vertical scrollbar of the document.

## 1px

Specify a 1px translation on the pseudo element describing the wave pattern.

```css
header::after {
  transform: translateY(-1px) scaleY(-1);
}
```

Without this — at least on mobile devices — there is often an annoying gap between the pseudo element and the footer. Enough to break the illusion of having a contiguous shape.

## z-index

Specify a positive value for the `z-index` of the list.

```css
header ul {
  z-index: 5;
}
```

This is to make sure the icons are shown above the wave pattern. When included through the `::after` pseudo element, the pattern is effectively on top.
