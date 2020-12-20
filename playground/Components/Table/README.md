# Table

## Markup

The structure described in `index.html` comes from a node script using the `marked` library. The `Utils` folder and the `Markdown Parser` project describe how to create the markup from the following markdown syntax:

```md
| Key          | Value | isRandom |
| ------------ | ----: | -------: |
| Grapes       |  1.28 |     true |
| Oranges      |  2.55 |    false |
| Apples       |  0.98 |    false |
| Peaches      |  1.85 |     true |
| Strawberries |  3.12 |     true |
```

## align

The `align` attribute is included by `marked.js`, but it's also and apparently [deprecated](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#Deprecated_attributes).

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
