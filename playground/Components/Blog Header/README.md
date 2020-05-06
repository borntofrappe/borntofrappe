# Header - Blog

## Notes

### Breakout

I use CSS grid to have a break-out effect, whereby the background and the wave-like pattern are repeated past the width of the actual header.

Since grid is not supported everywhere however, grid properties are specified in a `supports` media query.

```css
@supports (display: grid) {
  header {
    display: grid;
    grid-template-columns: 1fr minmax(auto, 40rem) 1fr;
    grid-column-gap: 5vw;
  }
  header > * {
    grid-column: 2;
  }
}
```

To create the effect without grid properties, I rely on `vw` units and a pseudo element.

```css
header::before {
  width: 100vw;
  height: 100%;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
}
```

Any property connected to this default, grid-is-not-supported-case, is then reset in the media query:

- the `::before` pseudo element is hidden

- the `::after` pseudo element is resized to use percentage instead of `vw` units

### overflow-x

When using `100vw` on the `::before` pseudo element, it causes horizontal scroll. This explains the following snippet at the top.

```css
body {
  overflow-x: hidden;
}
```

A convenience, which is then removed if grid is actually supported.

```css
@supports (display: grid) {
  body {
    overflow-x: initial;
  }
}
```

### grid-column-gap

By default, the `header` element is centered with a width of `90vw`. In the moment I use grid properties, it stretches to consider the entire viewport, and to guarantee a similar whitespace around the element, I use `5vw` for the grid property.

```css
header {
  grid-column-gap: 5vw;
}
```

Creating a gap on `5vw` on either side of the center column.
