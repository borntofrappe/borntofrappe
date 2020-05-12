# Landing page

## Markup

Include the code from the following projects:

- components/skip to content

- components/breadcrumb navigation

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

## Intersection observer

Observe both illustrations included in the article elements.

## Article(s)

The two article elements share a few properties, like vertical spacing between the child elements and size of the heading, paragraph elements. In light of this, use a more general selector to avoid duplicating the values.
