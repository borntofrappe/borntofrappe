# Blockquote

- add the graphic behind `quote.svg` at the beginning/end of the quote

## Usage notes

### Centering

Consider using flex properties on the parent container to center the element:

```css
main {
  display: flex;
  flex-direction: column;
}
blockquote {
  align-self: center;
}
```
