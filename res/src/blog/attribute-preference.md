---
title: Attribute preference
description: Few reasons to favor presentational attributes in SVG.
date: 2023-11-17T09:24:45
---

To improve writing SVG I often go through the specification, books and articles on the topic. The exercise is well worth the effort, even if some times, I end up not changing anything at all. Case in point, styling. I've seen a suggestion to separate the style in the `style` attribute instead of painting vector graphics with presentational attributes, to separate style from structure.

```diff
-<circle fill="orange" r="50" />
+<circle style="fill: orange;" r="50" />
```

I can appreciate the sentiment, but much less the consequences of this choice.

SVG being a way to draw images, style is inherently tied to the format. In the body of the `<svg>` element you may design effects like linear gradients.

```html
<linearGradient id="gradient">
	<stop stop-color="orange" offset="0" />
	<stop stop-color="gold" offset="1" />
</linearGradient>
```

You can set the values with the `style` syntax, both for the `fill` and more technical attributes like `stop-color`.

```diff
-<stop stop-color="gold" offset="1" />
+<stop style="stop-color: gold;" offset="1" />
```

That being said, the change looks unnecessarily complicated. Especially when there are attributes which do not have a counterpart in terms of CSS, like `offset`.

But the biggest reason can be summarized in one simple word: _specificity_. The moment you want to override the values, presentational attributes are at the bottom of the priority list. Even element selectors will be able to triumph over the declarations.

```css
circle {
	fill: tomato;
}
```

Inline styles are almost on the opposite end of the spectrum. To override the properties you only have the drastic option to add an `!important` flag after the key-value pairs.

```css
circle {
	fill: tomato !important;
}
```

## Custom properties

To create a flexible image, in a more declarative fashion, you can still use [CSS in SVG](/css-in-svg) in the form of custom properties.

```html
<circle fill="var(--circle-fill, orange)" r="50" />
```

Depending on the necessities and complexity of the drawing you can set up a styling API so that, if no property is set, you can lean on the fallback values of the `var` expressions.

With a stylesheet you are then able to override the value up the document tree.

```css
svg {
	--circle-fill: hotpink;
}
```
