# Introduction

- use link component

- animate illustration when visible

- float when shape-outside is supported

## Notes

### Illustration

For the illustration the SVG syntax created in the style guide is used as a starting point. In the context of the section element I figured the stroke and the scale of the icons was excessive, distracting from the content instead of supporting it, and therefore I decided to modify the syntax a bit.

### Layout

By default, apply a negative margin on the SVG element, so to avoid excessive whitespace between the illustration and the text.

```css
section > svg {
  margin-bottom: -18%;
}
```

`-18%` as in roughly `80/440`. `80` in the translation applied on the `.telescope` group element, `440` as in the width of the `viewBox`. It might sound convoluted, but the idea is to translate the telescope up by 80, and have the following content closer by roughly the same measure.

```css
section > svg .telescope {
  transform: translateY(-80px);
}
```

This by default.

If `shape-outside` is supported, remove these quirky property value pairs, and instead rely on a `float` property:

- float the illustration to the left

- carve out the area between the telescope and the icons

```css
@supports (shape-outside: polygon(0% 0%)) {
  section > svg {
    float: left;
    margin-bottom: initial;
    shape-outside: polygon(0% 0%, 100% 0%, 100% 58%, 28% 58%, 28% 100%, 0% 100%);
  }
  section > svg .telescope {
    transform: initial;
  }
}
```

Remember to reset the values set earlier in the stylesheet (`margin` and `transform`).

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
