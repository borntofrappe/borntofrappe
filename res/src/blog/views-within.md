---
title: Views within
description: Orchestrate SVG features to build interactive documents.
date: 2023-12-01T15:36:52
---

By combining several elements it is possible to create an SVG document which updates what you see without a single script. The result is far from perfect, but illustrates the potential and usefulness of several built-in features.

## Images

As you author a vector graphic you have the option of adding the code inline, with other HTML elements.

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
	<!-- ... -->
</svg>
```

Remember the namespace in the `xmlns` attribute and you also gain the option to save the code in an `.svg` file, which you can then reference with different elements. And you might have already seen how [with images](/a-view-outside). You are indeed able to show the entire graphic pointing to the file in the `src` attribute of `img` elements.

```html
<img alt="A view outside" src="./picture.svg" width="400" height="400" />
```

And if you update the structure of the attribute you can even highlight a portion of the graphic. The mentioned article argues the point at length, but briefly, you can update the `viewBox` with a view fragment and, for our purposes, with `view` elements. The idea is to update the syntax of the SVG document ahead of time.

```html
<view id="zoom" viewBox="5 5 10 10" />
```

Between the `<svg>` tags you add the element with a different `viewBox` attribute. The four values detail the canvas in position and size, so that you are able to give a different perspective. With this update, you then reference the file _and then_ the `id` of the `view` element.

```html
<img alt="A distant subject" src="./picture.svg#zoom" width="400" height="400" />
```

And following the instruction the browser shows the area from the chosen point of view — a powerful combination already.

## Objects

There is another way to include the vector, and that is [as an object](/vector-objects).

```html
<object
	title="Royal ancestry"
	data="./ahnentafel.svg"
	type="image/svg+xml"
	width="400"
	height="400"
></object>
```

With an image the graphic is static, close to a screenshot, but with an `object` element the element lives in full, almost like an independent component. You add the file in the `data` attribute, and the document can now include style or script tags, to update the embedded tree.

And even without a script, it is possible to make the object interactive with anchor links.

Consider a `text` element, humbly introducing a sequence of letters.

```html
<text>Henry III</text>
```

Wrap the code with an anchor link and the graphic is able to reference a different resource.

```html
<a href="https://en.wikipedia.org/wiki/Henry_III_of_France">
	<text>Henry III</text>
</a>
```

The resource can be a URL to a different page, perhaps to add more information, but if the introduction of the view element wasn't too obvious, it can also be the `id` of an element in the same scope. You might have leaned on the possibility with _permalinks_, connected to sub-headings.

```html
<h2 id="images">Images</h2>
<a href="#images" aria-label="permalink">
	<svg><!-- ...permalink icon --></svg>
</a>
```

Click the link and you navigate to the relevant section. And you can now understand the potential with `view` elements as well.

```html
<a href="#progeny">
	<text>Henry III</text>
</a>
```

Click on the link and the document updates the `viewBox` per the matching view, all on its own.

```html
<view id="progeny" viewBox="-2 -14 48 18" />
```

## Results

I wish I could wrap up the discussion with an impressive demo. And there is an example [on GitHub](https://github.com/borntofrappe/utils/tree/main/svg-objects), where I've put the concepts to good use in [an upside-down family tree](https://raw.githubusercontent.com/borntofrappe/utils/main/svg-objects/ahnentafel.svg).

If you embed the document you can navigate the ancestry of the not-so-anonymous character, and if you inspect the code you find there's no script at work.

An SVG document on one side, with multiple views and links. An object pointing to the file on the other — quite remarkable.

Unfortunately, the result is also prone to inconsistencies. Consider the experience with a keyboard only. What happens when you explore the markup? Anchor links are always accessible, and if you have the precaution of placing the `view` elements in the right place you can create a precise, predictable flow. You can ensure that when the page moves, so does the focus on the selected node.

At least on Firefox desktop updated on December 1st 2023. I've tested the code in a few settings and the experience is far from the same. Which means a couple of things:

1. focus on the fundamentals

   What you now know about SVG, views, links, and objects remains valid. And the mix of the features remains useful for small interactions.

2. test the code and weigh the alternatives

   As the document grows in complexity it might be easier to manage the interaction with JavaScript. You might even try to animate the change in perspective, but that is a topic for a different article, and with an entirely different twist.
