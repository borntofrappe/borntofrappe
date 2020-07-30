Section for the the `<main>` container of the landing page.

## SVG

Include the illustration describing a planet surrounded by satellites. The idea is ultimately include as many icons and whichever icons as needed, and have the graphic adjust.

Refer to `world.svg` for the static version.

## Intersection observer

Use the intersection observer API to animate the `<mark>` and the `<svg>` element only when the wrapping `<article>` is visible.

## prefers-reduced-motion

If the media query matches, remove the animation even if the intersection observer instructs so.

## Intersection observer/2

In a situation in which the media query matches, it is no longer necessary to observe the `<article>` element. The script accommodates for this by checking the preference and then observing/unobserving the node as needed.
