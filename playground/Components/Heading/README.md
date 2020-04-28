# Heading

- match the `id` attribute of the heading to the `href` attribute of the nested anchor link

- add a span to describe the anchor link element to assistive technologies

## Usage notes

### Anchor links

On top of the styles specified for anchor link elements, globally, style the opacity to reduce the weight of the permalink icon.

Beside the opacity, the change in color is included in the transition properties, as transitioning only the opacity would override the previous transition for the color.

```css
.permalink {
  transition-property: opacity, color;
}
```

It is superfluous, but the color is also repeated for the `:hover` pseudo selector. Superfluous, but allows to link the transition properties to the matching change.

```css
.permalink a:hover {
  opacity: 1;
  color: hsl(340, 90%, 55%);
  color: var(--primary-6);
}
```
