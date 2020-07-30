Use the syntax described in `rocket.svg`. The icon is tweaked to have the rocket tilted on its right side. Moreover, its scale is reduced to `0.8` the natural size.

## relative

Specify the properties in a class selector, to differentiate the specific design from default anchor links.

```diff
<a>
+<a class="relative">
```

## supports

The fallback for browser that do not support `mask` properties is less than pleasing, especially considering the extra whitespace around the anchor links. To this end, wrap the properties within a media query checking for `mask` and `-webkit-mask` properties alike.

```css
@supports (mask-size: 1.5em) or (-webkit-mask-size: 1.5em) {
  a.relative {
    /* ... */
  }
}
```
