# Header

- add a heading and span element to describe the tags to assistive tech

- add dot pattern in the background

- add wave-like pattern below the element

- add icons evenly spaced and on top of pattern

## Usage notes

### Patterns

See **Style Guide/Patterns** for the `.svg` syntax used in the background and pseudo element.

### Supports grid

The icons are added in a list item, and are tentatively separated using `display: flex` and liberal horizontal margin. If grid is supported, the layout becomes much easier, as the icons are slotted in columns `100px` wide. `100px` as in the width of a wave in the pattern.

### Overflow

The last header includes more icons than practically useful, to show how the list overflows horizontally. Use the same style of the scrollbar used in the document.

### 1px

Specify a 1px translation on the pseudo element describing the wave pattern.

```css
footer::after {
  transform: translateY(-1px) scaleY(-1);
}
```

Without this — at least on mobile devices — there is often an annoying gap between the pseudo element and the footer. Enough to break the illusion of having a contiguous shape.

For this change, the `background-position` is adjusted to offset the translation.

```css
footer::after {
  background-position: -5px -1.5px;
}
```

### z-index

Specify a positive value for the `z-index` of the list.

```css
header ul {
  z-index: 5;
}
```

This is to make sure the icons are shown above the wave pattern. When included through the `::after` pseudo element, the pattern is effectively on top.
