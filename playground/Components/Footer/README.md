# Footer

## Markup

Include the icon for `heart.svg` after the anchor link element redirecting toward twitter.

```njk
<footer>
  <a href="{link}">
    {text}
  </a>
  <span>
    {icon}
  </span>
</footer>
```

## Animation

Animate the SVG icon when the hover/focus state is detected on the anchor link element which precedes it.
