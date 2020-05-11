# Blockquote

## Pseudo Elements

In the pseudo elements, use the SVG syntax described in `quote.svg`.

Flip the graphic for one of the pseudo element using a negative scale, **or** half a rotation.

```css
blockquote::after {
  transform: translate(-50%, -50%) scale(-1);
  transform: translate(-50%, -50%) rotation(0.5turn);
}
```
