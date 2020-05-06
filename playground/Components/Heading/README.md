# Heading

- add a span to describe the anchor link element to assistive technologies

## Markup

```pug
h2#link
  a href="#link"
    span.visually-hidden permalink
    svg.permalink

```

Have the `id` attribute of the heading match the `href` attribute of the nested anchor link.

With the `span` element describe the purpose of the link.

## Opacity

Style the opacity to reduce the weight of the permalink icon.

Transition the opacity _and_ color on hover.

```css
.permalink {
  transition-property: opacity, color;
}
```
