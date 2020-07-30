Use the syntax described in `ufo.svg` and `ufo-dark`.

## elevation

The custom property `--elevation` is included to describe how the `bottom` property of the `::after` pseudo element and the `height` property of the `::before` counterpart are inherently connected.

The distance of the SVG asset from the bottom needs to match the height of the beam of light,

## supports

Include the `::before` pseudo element and the animation in a media query checking the support for the `clip-path` property. If the property is not supported, the rectangle shown through the pseudo element makes for a less than pleasing fallback.

## prefers-color-scheme

For the dark preference:

- reduce the weight of the `<mark>` element

- use `ufo-dark.svg` instead of the default `ufo.svg`

- reduce the opacity of the `::before` pseudo element

Update the attribute on the `body` element to review the changes.

```html
<body data-preference="dark"></body>
```

## prefers-reduced-motion

If the media query matches, pause the animation and change the properties to have the pseudo elements in their final state.
