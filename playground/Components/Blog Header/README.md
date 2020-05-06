# Blog Header

## Breakout

The idea is to have the header background and pattern extend to the left and right of the element.

### vw

By default, use `vw` units to have the pseudo element(s) stretch across the viewport.

```css
header::before {
  position: absolute;
  top: 0%;
  left: 50%;
  width: 100vw;
  height: 100%;
  transform: translateX(-50%);
  /* background properties */
}
```

Remove horizontal overflow caused by having `::before` occupy the entirety of the viewport.

```css
body {
  overflow-x: hidden;
}
```

### Grid

When grid is supported, the effect becomes more intuitive.

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

The header sets up a three column grid. Every direct child element occupies the second.

It requires a few properties, but allows to make due without the `::before` pseudo element.

```css
@supports (display: grid) {
  header::before {
    display: none;
  }
}
```

Remember to reset the properties necessary to create the effect with `vw` units: the overflow on the body, the size of the pseudo elements.

## ::after

Beside the `::before` pseudo element, used if grid is not supported to recreate the background, use `::after` to add a wave-like pattern. This pseudo element too stretches to consider the viewport, with viewport units or percentage values if grid is supported.
