# Mark

Use the syntax described in `ufo.svg` and `ufo-dark`.

## elevation

The custom property `--elevation` is included to describe how the `bottom` property of the `::after` pseudo element and the `height` property of the `::before` counterpart are inherently connected.

The distance of the SVG asset from the bottom needs to match the height of the beam of light,

## supports

Include the `::before` pseudo element and the animation in a media query checking the support for the `clip-path` property. If the property is not supported, the rectangle shown through the pseudo element makes for a less than pleasing fallback.

## prefers-color-scheme

For the dark preference:

- reduce the weight of the `<mark>` element

  ```css
  @media (prefers-color-scheme: dark) {
    body:not([data-preference]) mark {
      font-weight: 600;
    }
  }

  body[data-preference='dark'] mark {
    font-weight: 600;
  }
  ```

- use `ufo-dark.svg` instead of the default `ufo.svg`

  ```css
  @media (prefers-color-scheme: dark) {
    body[data-preference='dark'] mark::after {
      content: url('ufo-dark-syntax');
    }
  }

  body[data-preference='dark'] mark::after {
    content: url('ufo-dark-syntax');
  }
  ```

- reduce the opacity of the `::before` pseudo element

  ```css
  @media (prefers-color-scheme: dark) {
    body:not([data-preference]) mark::before {
      opacity: 0.2;
    }
  }

  body[data-preference='dark'] mark::before {
    opacity: 0.2;
  }
  ```

## prefers-reduced-motion

If the media query matches, pause the animation and change the properties to have the pseudo elements in their final state.
