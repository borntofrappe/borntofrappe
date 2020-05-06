# Footer

## Markup

Include the icon for `heart.svg` after the anchor link element.

## Patterns

See **Style Guide/Patterns** for the `.svg` syntax used in the background and pseudo element.

The height of the pseudo element implementing the wave-like pattern is `20px`. This is half the height of the actual SVG element, to show only half the wave above the solid background.

```css
footer::before {
  mask-image: url("... width='100' height='40' ...");
  height: 20px;
}
```

## 1px

Specify a 1px translation on the pseudo element describing the wave pattern.

```css
footer::before {
  transform: translateY(-1px) scaleY(-1);
}
```

Without this — at least on mobile devices — there is often an annoying gap between the pseudo element and the footer. Enough to break the illusion of having a contiguous shape.

## Animation

Animate the SVG icon when the hover/focus state is detected on the anchor link element which precedes it.
