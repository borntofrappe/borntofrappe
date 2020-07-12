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
body[color-mode] button svg .scale {
  transition: transform 0s;
  transition-delay: var(--transition-duration);
}
```

Alternatively, you can use the `step-end` easing function, which allows to change the `transform` property after the same amount of time.

```css
body[color-mode] button svg .scale {
  transition: transform var(--transition-duration) step-end;
}
```

## HTML, CSS and JavaScript

The project needs to consider a plethora of possibilities: is CSS available? is JavaScript available? Is there a preference set in the media query `prefers-color-scheme`, or again through `localStorage`?

In increments, consider the markup, then the stylesheet, and only finally the script.

### Markup

By default disable the button.

This is perhaps controversial, but it comes from the following consideration: even if it's not possible to change the color scheme, the SVG syntax provides a visual for the current color scheme. Purely aesthetic.

### Stylesheet

When the button is not disabled, change its appearance on `:hover` and on `focus`.

Moreover, respect the `prefers-color-scheme` media query, if this is set to `dark`.

```css
@media (prefers-color-scheme: dark) {
  body:not([color-mode]) {
    color: var(--grey-9);
    background: var(--grey-0);
  }

  body:not([color-mode]) button svg .rotate {
    transform: rotate(180deg);
  }

  body:not([color-mode]) button svg .scale {
    transform: scaleX(-1);
  }
}
```

Notice the `:not([color-mode])` part of the selector. The attribute `color-mode` is added through the script, and considering the value from `localStorage`. This to ensure the preference overrides the media query.

If there is a `color-mode` attribute include the necessary `transition` properties.

```css
body[color-mode] {
  --transition-duration: 1.5s;
  transition: color var(--transition-duration) ease-in-out, background var(
        --transition-duration
      ) ease-in-out;
}

body[color-mode] button svg .rotate {
  transition: transform var(--transition-duration) var(--ease-in-out-sine);
}
body[color-mode] button svg .scale {
  transition: transform var(--transition-duration) step-end;
}
```

If the attribute describes a preference for the `dark` color scheme, update the necessary properties.

```css
body[color-mode='dark'] {
  color: var(--grey-9);
  background: var(--grey-0);
}

body[color-mode='dark'] button svg .rotate {
  transform: rotate(180deg);
}

body[color-mode='dark'] button svg .scale {
  transform: scaleX(-1);
}
```

### Script

Beside the media query, the property value pairs set in the stylesheet are included to match the instructions of the script.

Remove the `disabled` attribute from the button.

```js
button.removeAttribute('disabled');
```

If a preference is included in `localStorage`, add a `color-mode` attribute with said preference.

```js
const colorMode = window.localStorage.getItem('color-mode');

if (colorMode) {
  document.body.setAttribute('color-mode', colorMode);
  window.localStorage.setItem('color-mode', colorMode);
}
```

I specified a function to wrap both lines of code, but it doesn't change the functionality.

```js
function setColorMode(colorMode) {
  document.body.setAttribute('color-mode', colorMode);
  window.localStorage.setItem('color-mode', colorMode);
}
```

Following this "setup" phase, update the preference according to two possible prompts:

1. the user clicks on the `button` element

   ```js
   button.addEventListener('click', ???);
   ```

2. the user changes the preference in the media query

   ```js
   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

   mediaQuery.addListener(???);
   ```

#### Button click

When the button is clicked, consider the preference set up in local storage.

```js
let currentColorMode = window.localStorage.getItem('color-mode');
```

If one is not available, update the variable with the preference from the media query

```js
if (!currentColorMode) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  currentColorMode = mediaQuery.matches ? 'dark' : 'light';
}
```

Then proceed to set the attribute and local storage key to the opposite value.

```js
const colorMode = currentColorMode === 'light' ? 'dark' : 'light';
setColorMode(colorMode);
```

#### Media query change

When a change is detected in the preference of the media query, set the value from the media query itself.

```js
mediaQuery.addListener(({ matches }) => {
  const colorMode = matches ? 'dark' : 'light';

  setColorMode(colorMode);
});
```

No need to consider the current preference (although this means the script has the possibility to set the same preference twice in a row).
