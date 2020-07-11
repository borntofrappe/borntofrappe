# Table

## Markup

The structure described in `index.html` comes from a node script using `marked`. The **Utils** folder and the **Markdown Parser** project describe how to create this markup.

## align

The `align` attribute is included by `marked.js`, but it's also and apparently deprecated.

Change the alignment of the text using CSS as well.

```css
table [align='right'] {
  text-align: right;
}
table [align='center'] {
  text-align: center;
}
```

## Pseudo element

Use a pseudo element to add a rectangle with rounded borders at the top of the table.
