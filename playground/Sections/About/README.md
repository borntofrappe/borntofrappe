# About

An article in the `main` container of the landing page.

## Fluid typography

Implements fluid typography similarly to the hero header.

### em

The `<p>` and `<h2>` elements use the `em` unit to scale the content according to the `font-size` of the closest element upstream. This is the wrapping `<article>` element.

## Animation

The SVG is animated to have the satellites and orbit rotate around the center.

Use the intersection observer API to rotate the elements only when the illustration is visible. This explains the `padding-top` property, to force vertical scroll.

```css
body {
  padding-top: 150vh;
}
```

## setAttribute

In the script a class of `observed` is added using `setAttribute`, and removed using `removeAttribute`, You can achieve a similar feature using only `setAttribute` and a ternary operator:

```js
entry.target.setAttribute("class", entry.isIntersecting ? "observed" : "");
```

But in this instance the class attribute is still present. It doesn't specify a value, but it exist in the element's own markup.

```html
<svg class></svg>
```
