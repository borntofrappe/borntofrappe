# Landing page

- nav

- hero section

- about section

- footer

## Notes

### About

The section describing a few words of context and the SVG illustration has been updated to show only half the illustration.

```diff
-<svg viewBox="-50 -50 100 100" width="200" height="200">
+<svg viewBox="-50 -50 100 50" width="200" height="100">
```

For the same reason, the `margin` at the bottom of the section has been reset.

```css
section {
  margin-bottom: 0px;
}
```

So to set up the illusion that the SVG is behind the footer which follows.

Since only half the element is shown, and the animation occurs clockwise, I've also decided to map the icons counter-clockwise. This to have the icons described in the paragraph follow each other in order.

```diff
-<g transform="rotate(${360 / length * index}) translate(0 -42) rotate(${360 / length * index * -1})">
+<g transform="rotate(${360 / length * index * -1}) translate(0 -42) rotate(${360 / length * index})">
```

Finally, I've also decided to associate the intersection observer API with the `<svg>` element instead of the parent `<section>`. Seemed frivolous to animate the entire element in the moment the section, and not the element was visible.
