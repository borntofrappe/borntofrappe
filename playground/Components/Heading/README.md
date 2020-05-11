# Heading

## Markup

The script populates the body with a series of headings: h2, h3 and h4.

In each heading add an anchor link using the heading's id as a reference.

Add a span for assistive tech.

```njk
<h2 id="{id}">
  {text}
  <a href="#{}id">
    <span class="visually-hidden">permalink</span>
    {icon}
  </a>
</h2>
```

## Opacity

Style the opacity to reduce the weight of the permalink icon.

Transition the opacity _and_ color.

```css
.permalink {
  transition-property: opacity, color;
}
```
