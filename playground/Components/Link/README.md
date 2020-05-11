# Link

## Rocket

The icon of the rocket is tweaked to have the shape tilted on its right side. I've also scaled the contents of the SVG element to `0.8` the natural size, to cope with an annoying visual bug on Microsoft Edge. This also allows to distance the drawing from the underline included with the other pseudo element.

## em

Use `em` units so that the visual scales with the `font-size` set on the closest parent element – in this instance the anchor link. Half the size is also used in the padding/margin properties in order to:

1. increase the clickable area below the text: `padding-bottom`

2. avoid any overlap between the visual and the element which follows: `margin-bottom`

## inline-block

Turn the `<a>` element into an `inline-block` element, so that the margin applies, and the element occupies only the width required by its content.
