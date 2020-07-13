# About

An article in the `<main>` container of the landing page.

## SVG

Include the illustration describing a planet surrounded by satellites.

Refer to `world.svg` for the static version.

## Animation

Animate the SVG to have the satellites and orbit rotate around the center.

Use the intersection observer API to rotate the elements only when the illustration is visible. This explains the `padding-top` property, to force vertical scroll.

```css
body {
  padding-top: 150vh;
}
```

## Spacing

By default, add vertical spacing in the form of the `margin-top` property.

```css
article > * + * {
  margin-top: 0.4em;
}
```

Add more space atop the first paragraph element as well.

```css
article > p:first-of-type {
  margin-top: 1em;
}
```

For the text of the paragraphs, reduce the spacing between words, and to a smaller degree, between the letters.

```css
article p {
  word-spacing: -0.2em;
  letter-spacing: -0.005em;
}
```

The monospace font, especially at larger sizes, has too much space between both.
