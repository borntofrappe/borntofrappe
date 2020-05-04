# Introduction

- animate illustration when visible

- use link component

## Notes

### Illustration

The illustration is created using the svg syntax from `telescope.svg`, described in this folder, as well as the icons for html, css, js, and svg.

### Animation

The animation rotates the telescope around its hinge, but only as the illustration is visible in the viewport. For this same reason, the `body` pushes the `section` element below the fold.

### setAttribute

In the script a class of `observed` is added using `setAttribute`, and removed using `removeAttribute`, You can achieve a similar feature using only `setAttribute` and a ternary operator:

```js
entry.target.setAttribute("class", entry.isIntersecting ? "observed" : "");
```

But in this instance the class attribute is still present. It doesn't specify a value, but it exist in the element's own markup.

```html
<svg class></svg>
```
