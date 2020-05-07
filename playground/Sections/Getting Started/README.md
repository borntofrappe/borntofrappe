# Getting Started

An article in the `main` container of the landing page.

## Illustration

Use `telescope-icons.svg` as a starting point.

## Layout

The idea is to display the text in the whitespace to the right the telescope, to the bottom of the icons.

Use the `float` and the `shape-outside` property to achieve this effect.

```css
@supports (shape-outside: polygon(0% 0%)) {
  article > svg {
    float: left;
    margin-bottom: initial;
    shape-outside: polygon(0% 0%, 100% 0%, 100% 58%, 28% 58%, 28% 100%, 0% 100%);
  }
  article > svg .telescope {
    transform: initial;
  }
}
```

As a fallback, force an overlap between the illustration and the content which follows, applying a negative margin on the SVG.

```css
article > svg {
  margin-bottom: -18%;
}
```

`-18%` as in roughly `80/440`. `80` in the translation applied on the `.telescope` group element, `440` as in the width of the `viewBox`. It might sound convoluted, but the idea is to translate the telescope up by 80, and have the following content closer by roughly the same measure.

```css
article > svg .telescope {
  transform: translateY(-80px);
}
```

## Animation

There are three animations:

- change in scale for the circles and the icons. The circles of the mask are also modified so to avoid showing/hiding the stroke of the path element

- change in color for the circles, the icons and the path element. To this end, the path is broken down in three segments, to reconcile the delay set up on the connecting elements

- change in rotation for the telescope and its hinge.

I've tried to use the same `animation-duration` value, so to have successive iterations match in timing. Pay attention that this value – 20s – considers the delays set up in the markup.

## color

The change in color provides a nugget of entertainment when testing the animation on Microsoft Edge: instead of adding color, the browser completely hides the shape. I believe it is not a matter of opacity, but color itself. Changing the value from `currentColor` to `inherit` fixes the issue.

```diff
5%,
95%,
100% {
-  color: currentColor;
+  color: inherit;
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
