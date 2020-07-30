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

Similarly to the _Sections/About_, it is necessary to consider the `prefers-reduced-motion` media query. Moreover, I choose to show the animation only as the parent `<article>` element is visible, using the intersection observer API.

Unlike the mentioned project however, it is not possible to pause the animation directly and with CSS. `telescope.svg` and `telescope-dark.svg` include a `<style>` block with the animation, and the solution is to include the static variant described in `telescope-reduced-motion.svg` and `telescope-reduced-motion-dark.svg` instead.
