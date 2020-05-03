# Hero

- add `aria-*` attributes to describe the anchor link elements

## Usage notes

### stylesheet

In the stylesheet, I repeated some of the property value pairs specified for the **List** component. Consider having these in the global stylesheet, and change only the values associated with a larger `font-size`, like the spacing between items.

### borntofrappe

The center of the SVG illustration draws the logo for the website. This is not wrapped in an anchor link element and cannot be selected with keyboard focus. However, I decided to change its `color` and `transform` properties following the `:hover` state still.

To this end, the SVG syntax is slightly modified:

- add a class to target the group element:

  ```html
  <g class="borntofrappe">
    <!-- svg syntax -->
  </g>
  ```

- add a transparent circle as the last element of the `<g>` element:

  ```html
  <g class="borntofrappe">
    <!-- svg syntax -->
    <circle r="50" opacity="0" />
  </g>
  ```

  This is essential to make sure that the change in CSS properties happen everywhere on the circle element, and not just where the stroke of the path element is drawn.

### Fluid typography

The `font-size` of the `<section>` element changes in the `[1.5, 2]rem` range, and considering a viewport in the `[40, 75]rem` interval.

The formula is straight from [this CSS tricks article](https://css-tricks.com/snippets/css/fluid-typography/).

```css
section {
  font-size: calc(1.5rem + (2 - 1.5) * (100vw - 40rem) / (75 - 40));
}
```

The "clamping" makes sure that the measure doesn't exceed the two extremes.

```css
@media (min-width: 75rem) {
  section {
    font-size: 2rem;
  }
}
@media (max-width: 40rem) {
  section {
    font-size: 1.5rem;
  }
}
```

Be sure to add a fixed `font-size` for browsers that do not support the `calc` value.

```css
section {
  font-size: 2rem;
  font-size: calc(1.5rem + (2 - 1.5) * (100vw - 40rem) / (75 - 40));
}
```

### rem & em

The size of the SVG element caps at `100%` to consider the viewport width using the `max-width` property.

```css
svg {
  max-width: 100%;
}
```

Its `width` however uses `em` units to scale alongside the `rem` value set on the parent section element.

```css
svg {
  width: 18em;
}
```

This value should provide a semblance of alignment with the `<nav>` element.
