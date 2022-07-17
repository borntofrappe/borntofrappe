---
title: This is a test
description: This post is a test, and in all likelihood will be deleted once the blog takes its final shape.
datetime: '2022-07-16T10:02'
---

Here's another test article, this time to test the features the blog is set to support.

Looking especially at how `mdsvex` processes markdown syntax, here's a few elements which deviate from the default.

## Headings

Heading elements have an anchor link nested in the HTML, in order to provide a permalink. In the stylesheet the elements are targeted with the `:is` pseudo-selector.

```css
:is(h2, h3, h4) {
	display: flex;
	align-items: baseline;
	gap: 0 0.5rem;
}
```

## Code blocks

As highlighted in the previous section, code blocks are highlighted with a specific theme and marked with a specific structure.

I'm quite proud of the end result.

```js
const highlighter = async (code, lang) => {
	// shiki highligther
};
```

## Quotes

Quotes are marked in a `blockquote` element. This element is then styled with a bit of flair in the blog stylesheet.

Care for an example?

Here's an inspiring quote.

> La timidité n'est pas de mise

Something to live by, especially if you are a bit sheepish like myself.
