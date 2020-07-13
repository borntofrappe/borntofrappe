# Landing page

## Markup

Include the code from the following projects:

- components/skip to content

- components/breadcrumb navigation

- sections/hero

- sections/getting started

- ???

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

## Getting started & About

Wrap both article elements in a `<main>` container with an `id` of `content`.

The article elements actually share a few properties, like vertical spacing between the child elements and size of the heading, paragraph elements. In light of this consider a more general selector to avoid duplicating the values. For instance: use the wrapping `<main>` element to set the font-size, use the general selector `article > * + *` to have the properties applied to both elements.

## Intersection observer

Observe both illustrations included in the article elements.

### ???

In between the article elements, include a visual to separate the distinct sections of the page.

This visual repeats the wave-like pattern specified for the hero section and the footer, but at a smaller scale.
