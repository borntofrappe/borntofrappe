Section for the the `<main>` container of the landing page.

## SVG

Refer to `telescope.svg` and `telescope-dark.svg` for the visual included next to the actual content. The syntax is repeated with different colors for the dark variant.

```css
/* light variant */
article::before {
  content: url();
}
/* dark variant */
body[data-preference='dark'] article::before {
  content: url();
}
```

## Animation

Similarly to the _Sections/About_, the demo considers the `prefers-reduced-motion` media query and the intersection observer API. Since the animation is included directly with SVG syntax however, the logic in the stylesheet is different:

- by default, include the syntax described in `telescope-reduced-motion.svg` and `telescope-reduced-motion-dark.svg`

- if the `<article>` element has a class of `.observed`, include the syntax described in `telescope.svg` and `telescope-dark.svg`. This pair has a `<style>` block which animates the telescope to have its main tube rotate up and down

- if the media query describes a preference for reduced motion, revert to use the static syntax once more
