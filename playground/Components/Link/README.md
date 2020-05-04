# Link

- custom design for landing page

- demand considerable whitespace at the bottom

- override default `:focus`

## Notes

### Rocket

The icon of the rocket is tweaked to have the shape tilted on its right side. I've also scaled the contents of the SVG element to `0.9` the natural size, to cope with an annoying visual bug on Microsoft Edge. See note below.

### Edge

At least on edge, using the mask causes a rather annoying visual bug: next to the icon of the rocket, the browser renders a line spanning the entirety of the element's width. I tried with a simpler shape – a circle – and ultimately resolved that this is an issue with the browser and not the mask properties. Tinkering with this simpler shape I found a solution in literally scaling the contents of the SVG element.

```diff
+<g transform="scale(0.9)">
```

As you scale to `0.95` you start to see the line thinner, and at around `0.9` the line disappears.

Another annoying, edge-related issue, is that the shape provided by the mask is blurry. This is even worsened as the icon is scaled back. I have no solution to this mishap, and no plan to address the situation in the foreseeable future.

### em

The size of the mask makes use of `em` values, so that the visual scales with the `font-size` set on the closest parent element – in this instance the anchor link. Half the size is also used in the padding/margin properties in order to:

1. increase the clickable area below the text: `padding-bottom`

2. avoid any overlap between the visual and the element which follows: `margin-bottom`

With regards to the margin, it is essential to have the `<a>` element into a `block` element. More specifically a `inline-block` element, so that it occupies only the width required by the text.
