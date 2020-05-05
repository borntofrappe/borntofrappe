# Introduction

- use link component

- animate illustration when visible

## Notes

### Illustration

For the illustration the SVG syntax created in the style guide, under the name of `telescope.icons`, is used as a starting point. Alongside the text I figured the stroke and the scale of the icon was excessive, distracting from the content instead of supporting it, and therefore I decided to modify the syntax a bit.

### Animation

There are three animations:

- change in scale for the circles and the icons. The circles of the mask are also modified so to avoid showing/hiding the stroke of the path element

- change in color for the circles, the icons and the path element. To this end, the path is broken down in three segments, to reconcile the delay set up on the connecting elements

- change in rotation for the telescope and its hinge.

I've tried to use the same `animation-duration` value, so to have successive iterations match in timing. Pay attention that this value – 20s – considers the delays set up in the markup.

### color

The change in color provides a nugget of entertainment when testing the animation on Microsoft Edge: instead of adding color, the browser completely hides the shape. I believe it is not a matter of opacity, but color itself. Changing the value from `currentColor` to `inherit` fixes the issue.

```diff
5%,
95%,
100% {
-  color: currentColor;
+  color: inherit;
}
```

### setAttribute

In the script a class of `observed` is added using `setAttribute`, and removed using `removeAttribute`, You can achieve a similar feature using only `setAttribute` and a ternary operator:

```js
entry.target.setAttribute("class", entry.isIntersecting ? "observed" : "");
```

But in this instance the class attribute is still present. It doesn't specify a value, but it exist in the element's own markup.

```html
<svg class></svg>
```
