# Special Link

A particular design for infrequent use.

## Rocket

The icon is tweaked to have the rocket tilted on its right side. Moreover, its scale is reduced to `0.8` the natural size.

See `rocket.svg` for a reference

## em

Use `em` units so that the visual scales with the `font-size` set on the closest parent element – in this instance the anchor link. Half the size is also used in the padding/margin properties in order to:

1. increase the clickable area below the text: `padding-bottom`

2. avoid any overlap between the visual and the element which follows: `margin-bottom`

## inline-block

Turn the `<a>` element into an `inline-block` element, so that the margin applies, and the element occupies only the width required by its content.
