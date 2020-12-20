# Heading Permalink

In the script I include the markup for several levels of headings. Fpr each heading, the idea is to include an anchor link using the heading's id as a reference. Before the icon describing the permalink, the idea is to also add a `<span>` element for accessibility.

```html
<h2 id="{id}">
  {text}
  <a href="#{id}">
    <span class="visually-hidden">permalink</span>
    {icon}
  </a>
</h2>
```

## Opacity

The stylesheet reduces the weight of the permalink icon through its opacity. Include the property in the `transition` rule to smoothly change both the opacity and the color.

```css
.permalink {
  transition-property: opacity, color;
}
```
