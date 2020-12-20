# Footer

The idea is to include the visual described in `heart.svg` above a single anchor link element. By hovering/focusing on the anchor link then, the idea is to animate the icon.

## Mask

If `mask-image` is not supported, the resulting square included through the `::after` pseudo element is less than pleasing. To this end, use `border-radius` to include a circle instead. Remember to reset this property if a mask is indeed available.

## Animation

Set up an animation to scale the visual included in the `::after` pseudo element, and then immediately pause the animation.

```css
footer a::after {
  animation: ...;
  animation-play-state: paused;
}
```

The idea is to have the animation run only when the anchor link is being hovered on, or focused upon.

## prefers-reduced-motion

Repeat the `animation-play-state` property if the media query matches a preference for reduced motion.

Remember that the position of the declaration block matters: since the level of specificity is the same, the media query kicks in only if it is included _after_ the instruction to animate the element on hover/focus.

```css
footer a:hover::after,
footer a:focus::after {
  animation-play-state: running;
}

@media (prefers-reduced-motion: reduce) {
  footer a:hover::after,
  footer a:focus::after {
    animation-play-state: paused;
  }
}
```
