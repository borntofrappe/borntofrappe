Section for the the `<main>` container of the landing page.

## SVG

Refer to `telescope-tripod.svg` and `telescope-tube.svg` for the visual included next to the actual content. The illustration is split in two parts since the animation is centered only on a portion of the graphic.

```css
/* tripod */
article::before {
  content: url();
}
/* tube */
article::after {
  content: url();
}
```

The syntax is then repeated with different colors for the dark variant.

## Animation

Considers the `prefers-reduced-motion` media query and the intersection observer API. For the rotation, animate the graphic describing the telescope's tube from the point `50, 33`.
