# Relative Link

Design for anchor link elements redirecting to other pages with the same domain.

## Rocket

The icon is tweaked to have the rocket tilted on its right side. Moreover, its scale is reduced to `0.8` the natural size.

See `rocket.svg` for a reference.

## em

Use `em` units so that the visual scales with the `font-size` set on the closest parent element – in this instance the anchor link. Half the size is also used in the padding/margin properties in order to:

1. increase the clickable area below the text: `padding-bottom`

2. avoid any overlap between the visual and the element which follows: `margin-bottom`

## inline-block

Turn the `<a>` element into an `inline-block` element, so that the margin applies, and the element occupies only the width required by its content.

## relative

Specify a class to differentiate the specific design from default anchor links.

```diff
<a>
+<a class="relative">
```

## Media query

The fallback for browser that do not support `mask` properties is less than pleasing, especially considering the extra whitespace around the anchor links. To this end, wrap the properties within a media query checking for `mask` and `-webkit-mask` properties alike.

```css
@supports (mask-size: 1.5em) or (-webkit-mask-size: 1.5em) {
  a.relative {
    /* ... */
  }
}
```

## Not global

I briefly considered adding the `.relative` properties to the global stylesheet, but ultimately decided not to. Currently, it is used only in the landing page and 404 page, and it is preferable to include the property-value pairs only where needed.
