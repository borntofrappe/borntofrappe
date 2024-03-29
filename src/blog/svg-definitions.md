---
title: SVG definitions
description: A geeky note on path, symbol, use, and use elements.
date: 2023-02-20T15:35:47
---

In [a recent concoction of vector graphics](/the-faces-of-the-moon) I needed to draw and repeat a star, a custom shape in the form of a `<path>` element with a specific `d` attribute. For a simplified version, consider the following snippet.

```html
<svg viewBox="-10 -10 20 20">
	<g fill="currentColor">
		<path d="M -5 0 l 3 2 2 3 2 -3 3 -2 -3 -2 -2 -3 -2 3z" />
	</g>
</svg>
```

I resolved to define the shape in a set of `<defs>` tags.

```html
<defs>
	<path id="star" d="M -5 0 l 3 2 2 3 2 -3 3 -2 -3 -2 -2 -3 -2 3z" />
</defs>
```

And then include the visual with a `<use>` element.

```html
<g fill="currentColor">
	<use href="#star" />
</g>
```

All things considered the setup was rather flexible. You are able to repeat the shape where needed and what is more, since the `d` attribute draws the star from its center, you are able to scale the asset directly through the `transform` attribute.

```html
<g fill="currentColor">
	<use href="#star" transform="scale(2)" />
</g>
```

That being said, I had a chance to review the code, and possibly found a more flexible, if elaborate, setup with another SVG element.

## The potential issue

The lines work in the context of the specific coordinate system, of the given `viewBox` attribute.

```html
<svg viewBox="-10 -10 20 20">
	<!-- <defs>...</defs> -->
	<use href="#star" />
</svg>
```

The first two numbers shift the origin to draw from the center, but focus on the latter pair instead. Focus on the width and the height of the canvas.

With different dimensions the star could be unnecessarily large, or again exceedingly small.

```html
<svg viewBox="-50 -50 100 100">
	<!-- <defs>...</defs> -->
	<use href="#star" />
</svg>
```

In other words, the definition works, but is tightly connected to the composition.

## Symbol

Think of the star as its own component, its own `<svg>` element.

```html
<svg viewBox="-5 -5 10 10">
	<path d="M -5 0 l 3 2 2 3 2 -3 3 -2 -3 -2 -2 -3 -2 3z" />
</svg>
```

The `viewBox` tightly describes the vector so that the width and height match the size of the element.

A symbol works in much the same way. Add the element with a specific `id` and the ad-hoc `viewBox`.

```html
<defs>
	<symbol id="star" viewBox="-5 -5 10 10">
		<!-- ... -->
	</symbol>
</defs>
```

In the body of the element add the actual `<path>`.

```html
<symbol id="star" viewBox="-5 -5 10 10">
	<path d="M -5 0 l 3 2 2 3 2 -3 3 -2 -3 -2 -2 -3 -2 3z" />
</symbol>
```

## Use

As you referred to the shape, reference the symbol with the `<use>` element.

```html
<!-- <symbol id="star">...</symbol> -->
<use href="#star" />
```

Don't be quick to dismiss the update if you are testing the code, however. By default, the symbol grows to the full size of the parent `<svg>`. Change the default dimensions through the matching attributes.

```html
<use href="#star" width="10" height="10" />
```

Additionally, the shape is drawn from the top left corner. Shift the box back by half the values.

```html
<use href="#star" x="-5" y="-5" width="10" height="10" />
```

## Use and reuse

You might think the discussion was all for nought, and you were better off with the initial version. After all, you started the article with a `<use>` element pointing to the one `<path>` and ended up with a `<use>` element referencing the `<symbol>` _and_ requiring additional attributes.

You have however a more general definition, growing a shrinking at will through the width and height. You have essentially a good-honest SVG. Only nested. Copy-paste the element in any vector graphic and never think about the coordinates of the `d` attribute again.

And if you allow me one last point, you might enjoy the following bit of mind-bending logic to work around the issue with the attributes.

In the `<def>`s block, right after the symbol, define a `<use>` element.

```html
<defs>
	<!-- <symbol id="star">...</symbol> -->
	<use id="lodestar" />
</defs>
```

Reference the symbol and set the attributes in this definition.

```html
<use id="lodestar" href="#star" x="-5" y="-5" width="10" height="10" />
```

In the drawing then, reference the custom implementation.

```html
<use href="#lodestar" />
```

Combining the best of both worlds. You have the component independent of the project at hand, and the instance fit for the use-case.
