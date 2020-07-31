Page shown for `/` root path.

## Markup

Include the code from the following projects:

- components/skip to content

- sections/navigation

- sections/hero

- sections/getting started

- sections/about

- components/footer

## About

Update the article element to show only half the illustration.

```diff
-<svg viewBox="-50 -50 100 100" width="200" height="200">
+<svg viewBox="-50 -50 100 50" width="200" height="100">
```

This sets up the illusion that the SVG is behind the footer which follows.

### Clockwise

Since only half the element is shown, and the animation occurs clockwise, flip the order of the icons. This to have the visuals described in the paragraph follow each other in order.

```diff
-<g transform="rotate(${360 / length * index}) translate(0 -42) rotate(${360 / length * index * -1})">
+<g transform="rotate(${360 / length * index * -1}) translate(0 -42) rotate(${360 / length * index})">
```

## Getting started and About

Wrap both article elements in a `<main>` container with an `id` of `content`.

Consider a more general selector to avoid duplicating the values. For instance: use the wrapping `<main>` element to set the font-size, use the selector `article` to size the containers.

## Separator

Include a visual to separate each successive `article`, and through the `article + article::before` selector. The solution is less than ideal, but requires additional whitespace between the elements.

If mask properties are not supported, the resulting separator would be excessive, and it is better to accommodate this instance by reducing the height of the pseudo element.
