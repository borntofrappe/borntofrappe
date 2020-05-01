# Link

- for the anchor link of the landing page

## Notes

`rocket.svg` is modified to have the icon tilted horizontally

```diff
-<g transform="rotate(45)">
+<g transform="rotate(90)">
```

Moreover, the path describing the outline of the rocket's body is repeated without stroke at the end of the group element. This is to make sure that the stroke is shown even when the fill is updated with the background's color.

```css
a svg > g {
  fill: hsl(215, 10%, 97%);
  fill: var(--grey-10);
}
```
