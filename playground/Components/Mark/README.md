# Mark

Design for the `<mark>` element as included in the landing page. Landing page only.

## SVG

Refer to `ufo.svg` and `ufo-dark.svg` for the visual included through one of the pseudo elements. The syntax is repeated with different colors for the dark variant.

```css
/* light variant */
mark::after {
  content: url();
}
/* dark variant */
body[data-preference='dark'] mark::after {
  content: url();
}
```

Be sure to remove the `width` and `height` attributes or have the two match the width and height of the pseudo element.

## elevation

The custom property `--elevation` is included to describe how the `bottom` property of the `::after` pseudo element and the `height` property of the `::before` counterpart are inherently connected.

The distance of the SVG asset from the bottom needs to match the height of the beam of light,

## Media query

Include the `::before` pseudo element and the animation in a media query checking the support for the `clip-path` property. If the property is not supported, the rectangle shown through the pseudo element makes for a less than pleasing fallback.
