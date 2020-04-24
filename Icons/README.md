# Icons

In the components/pages folders `.svg` files are added inline, and using the SVG syntax described in this folder. Ultimately, the idea is to build a object describing the icons through property value pairs, and have the templating engine inject the syntax instead.

```njk
{{ icons.rocket }}
{{ icons.blog }}
```

- default size of `1em`. Since the vector graphics are paired with text (mostly), this makes the size relative to the earliest `font-size` value.

- `aria-hidden: true` and `aria-focusable: false`. These are icons (mostly), and should be skipped by assistive technologies.
