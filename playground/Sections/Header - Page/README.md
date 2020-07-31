Header for any page which is one level away from the landing page. For instance: `/blog`, `/404`.

The idea is to have the background and the wave-pattern extend to the left and right of the header element. This is achieved with `vw` units, and `grid` properties if supported.

## Breakout — vw

Stretch the width of the pseudo element to `100vw` and center the visual horizontally.

```css
header::before {
  position: absolute;
  top: 0%;
  left: 50%;
  width: 100vw;
  height: 100%;
  transform: translateX(-50%);
  z-index: -5;
  /* background properties */
}
```

This causes horizontal scroll, so remove overflow on the x axis.

```css
body {
  overflow-x: hidden;
}
```

## Breakout — grid

Create three columns, center the content in the second one.

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

Reset the property-value pairs included for the `vw` solution.

```css
@supports (display: grid) {
  body {
    overflow-x: initial;
  }
}
```

Hide the pseudo element setting up the background.

```css
@supports (display: grid) {
  header::before {
    display: none;
  }
}
```

## Waves

Use the `::after` pseudo to add a wave-like pattern. Stretch its width to cover the viewport, with similar considerations to the `::before` counterpart:

- `100vw` by default

- `100%` if grid is supported

## Redundancy

The `::before` and `::after` pseudo elements share a few properties, but I prefer to repeat the syntax. The two have a different purpose, and the two change independently of one another.
