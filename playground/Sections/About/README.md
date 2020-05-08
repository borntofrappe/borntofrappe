# About

An article in the `main` container of the landing page.

## Fluid typography

Implements fluid typography similarly to the hero header.

### em

The `<p>` and `<h2>` elements use the `em` unit to scale the content according to the `font-size` of the closest element upstream. This is the wrapping `<article>` element.

## Animation

Animate the SVG to have the satellites and orbit rotate around the center.

Use the intersection observer API to rotate the elements only when the illustration is visible. This explains the `padding-top` property, to force vertical scroll.

```css
body {
  padding-top: 150vh;
}
```

## setAttribute

To set up the animation with the intersection observer API, add/remove a class with `setAttribute` and `removeAttribute`,

You can achieve a similar feature using only `setAttribute` and a ternary operator:

```js
entry.target.setAttribute("class", entry.isIntersecting ? "observed" : "");
```

However, in this instance the class attribute is still present. It just doesn't refer to anything.

```html
<svg class></svg>
```
