# Blockquote

## Pseudo Elements

In the pseudo elements, use the SVG syntax described in `quote.svg`.

Flip the graphic for one of the pseudo element using a negative scale.

```css
blockquote::after {
  transform: translate(-50%, -50%) scale(-1);
}
```

Half a rotation would work as well.

```css
blockquote::after {
  transform: translate(-50%, -50%) rotation(0.5turn);
}
```

## SVG Syntax

When incuding the icon in the `mask` property, the aria attributes and presentational attributes for the width and the height are unnecessary.

```diff
-<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em">
+<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
```
