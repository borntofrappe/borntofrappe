# Getting Started

An article in the `<main>` container of the landing page.

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

Be sure to remove the `width` and `height` attributes or have the two match the width and height of the pseudo element.

## Animation

The SVG syntax includes a `<style>` block to animate the top of the telescope with CSS.
