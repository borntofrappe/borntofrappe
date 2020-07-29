# About

An article in the `<main>` container of the landing page.

## SVG

Include the illustration describing a planet surrounded by satellites. The idea is ultimately include as many icons and whichever icons as needed, and have the graphic adjust.

Refer to `world.svg` for the static version.

## Animation

Animate the SVG to have the satellites and orbit rotate around the center.

Use the intersection observer API to rotate the elements only when the illustration is visible. This explains the `padding-top` property, to force vertical scroll.

```css
body {
  padding-top: 150vh;
}
```
