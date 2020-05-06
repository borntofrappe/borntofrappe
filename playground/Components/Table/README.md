# Table

The markup of the table is obtained by processing a markdown table with `marked.js`.

## align

The `align` attribute is included by `marked.js`, but it's also and apparently deprecated.

Change the alignment of the text using CSS as well.

```css
table [align="right"] {
  text-align: right;
}
table [align="center"] {
  text-align: center;
}
```

## Pseudo

Use a pseudo element to make rounded borders at the top of the table.

## Style

Replicate the design created for the code snippet.
