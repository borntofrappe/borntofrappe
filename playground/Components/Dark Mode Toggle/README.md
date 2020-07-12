# Dark Mode Toggle

## SVG Syntax

The markup includes the syntax behind `sun.svg` and `moon.svg` with a series of additional group elements.

### Moon

`moon.svg` was originally designed with a `<mask>` element.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-50 -50 100 100"
  width="1em"
  height="1em"
>
  <defs>
    <mask id="mask-moon">
      <path
        fill="hsl(0, 0%, 100%)"
        d="M 0 -28 a 28 28 0 0 1 0 56 28 28 0 0 1 0 -56"
      />
      <path
        fill="hsl(0, 0%, 0%)"
        d="M 22 -50 a 28 28 0 0 1 0 56 28 28 0 0 1 0 -56"
      />
    </mask>
  </defs>
  <g fill="currentColor">
    <g mask="url(#mask-moon)">
      <path d="M 0 -28 a 28 28 0 0 1 0 56 28 28 0 0 1 0 -56" />
    </g>
  </g>
</svg>
```

The syntax is however processed through inkscape, and later through SVGOMG, so that the icon is described by a single `<path>` element.

### Groups

The idea is to have the sun and moon opposite to one another, and show either one by rotating the graphic from the bottom center. To achieve this result, the syntax for both icons is nested in `<g>` group elements, and the groups are pushed away from the desired point of origin.

```html
<g class="rotate">
  <g transform="translate(0 -80)">
    <!-- sun -->
  </g>

  <g transform="translate(0 80)">
    <!-- moon -->
  </g>
</g>
```

To keep the graphics straight while the rotation occurs, include additional group elements to rotate the sun and moon in the opposite direction.

```html
<g transform="translate(0 80)">
  <g transform="scale(-1 1)">
    <g class="rotate">
      <g transform="scale(-1 1)">
        <!-- moon -->
      </g>
    </g>
  </g>
</g>
```

The groups using a negative scale are included to ensure that the same rotation applied to the wrapping group element has an opposite effect.

### Group

One last group element wraps the entire body of the svg element

```html
<g class="scale">
  <!-- groups, sun and moon -->
</g>
```

The idea is to here apply a negative scale on the entire graphic when the rotation occurs.

```html
<g class="scale" transform="scale(-1 1)">
  <!-- groups, sun -->
  <g transform="rotate(180)"> </g>

  <!-- groups, moon -->
  <g transform="rotate(180)"> </g>
</g>
```

With a negative scale, the rotation back to `0` is once again clockwise, giving the illusion that the graphic is making a full rotation.

## transition

The negative scale mentioned in the last section is included when the rotation to `180` degrees is complete. In the stylesheet, you can achieve this effect by applying a `transition-delay` equal to the duration of the first transition.

```css
body[color-preference] button svg .scale {
  transition: transform 0s;
  transition-delay: var(--transition-duration);
}
```

Alternatively, you can use the `step-end` easing function, which allows to change the `transform` property after the same amount of time.

```css
body[color-preference] button svg .scale {
  transition: transform var(--transition-duration) step-end;
}
```

## HTML, CSS and JavaScript

The toggle needs to consider a plethora of possibilities: is CSS available? is JavaScript available? Is there a preference set in the media query `prefers-color-scheme`, or again through `localStorage`?

In increments, consider the markup, then the stylesheet, and only finally the script.

### Markup

By default disable the button.

This is perhaps controversial, but it comes from the following consideration: even if it's not possible to change the color scheme, the SVG syntax provides a visual for the current color scheme. Purely aesthetic.

### Stylesheet

When the button is not disabled, change its appearance on `:hover` and on `focus`.

Moreover, respect the `prefers-color-scheme` media query, if this is set to `dark`.

```css
@media (prefers-color-scheme: dark) {
  body:not([color-preference]) {
    color: var(--grey-9);
    background: var(--grey-0);
  }

  body:not([color-preference]) button svg .rotate {
    transform: rotate(180deg);
  }

  body:not([color-preference]) button svg .scale {
    transform: scaleX(-1);
  }
}
```

Notice the `:not([color-preference])` part of the selector. The attribute `color-preference` is added through the script, and considering the value from `localStorage`. This to ensure the preference overrides the media query.

If there is a `color-preference` attribute include the necessary `transition` properties.

```css
body[color-preference] {
  --transition-duration: 1.5s;
  transition: color var(--transition-duration) ease-in-out, background var(
        --transition-duration
      ) ease-in-out;
}

body[color-preference] button svg .rotate {
  transition: transform var(--transition-duration) var(--ease-in-out-sine);
}
body[color-preference] button svg .scale {
  transition: transform var(--transition-duration) step-end;
}
```

If the attribute describes a preference for the `dark` color scheme, update the necessary properties.

```css
body[color-preference='dark'] {
  color: var(--grey-9);
  background: var(--grey-0);
}

body[color-preference='dark'] button svg .rotate {
  transform: rotate(180deg);
}

body[color-preference='dark'] button svg .scale {
  transform: scaleX(-1);
}
```

### Script

Remove the `disabled` attribute from the button.

```js
button.removeAttribute('disabled');
```

For the logic of the color scheme, consider the interplay between `localStorage` and the `prefers-color-scheme` media query:

- retrieve the preference from local storage

  - there is a preference -> include it in the `color-preference` attribute

  - there is no prefrence

    - consider the media query

      - query matches -> include a `dark` color scheme

      - query does not match -> include a `light` color scheme

When using the value of the media query, be sure to update the value in `localStorage` to match.

This covers the "setup" phase, but it is also necessary to consider a change to the preference:

- when the button is clicked, consider the current preference and set the opposite

- when the media query changes, consider the preferred value
