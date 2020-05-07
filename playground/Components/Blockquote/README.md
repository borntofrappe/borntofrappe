# Blockquote

## Pseudo Elements

In the pseudo elements use the SVG syntax described in `quote.svg`. This is included in the `url()` function of the `mask-image` property, so that the graphic is tinted with the background's color.

Flip the graphic for one of the pseudo element using a negative scale, **or** half a rotation.

```css
/* equivalent */
blockquote::after {
  transform: translate(-50%, -50%) scale(-1);
  transform: translate(-50%, -50%) rotation(0.5turn);
}
```

## Mask

For each `mask` property add a `-webkit` prefixed version
