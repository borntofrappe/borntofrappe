---
title: SVG stack
description: Include multiple icons with SVG, an object and some style.
date: 2023-12-15T11:34:58
---

When you save a vector graphic with the `.svg` extension there are several elements which help you add the file on a page. You might have explored [the `img` element](vector-url-images) already, and also, [`object`](/vector-objects). An object is particularly intriguing as it allows to include the vector close to an independent component. A document you can customize with `<style>` tags or enhance with a pair of `<script>` brackets, without affecting the rest of the markup. This leads to [interesting applications](/views-within), and another way to include multiple icons from a single source.

## In theory

Start by drawing a series of icons in a stack, one after the other.

```html
<svg>
	<!-- icon #1 -->
	<svg></svg>
	<!-- icon #2 -->
	<svg></svg>
</svg>
```

In SVG order matters, and latter elements overlap on previous ones. This means that without modifications the shapes would mingle in a jumbled mess. From this setup, however, the idea is to hide all the vectors except one, the desired image. You are essentially picking a layer and excluding the rest.

## In practice

To extract a vector from the stack you can thank CSS and the `:target` pseudo class. [The MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:target) do a great job in outlining the feature. In essence, the selector works on an element when the `id` attribute matches the URL fragment. In the proposed example, a table of contents, you have a series of anchor links pointing to different subheadings.

```html
<a href="#in-practice">Part II</a>

<h2 id="in-practice">In practice</h2>
```

Select the link to move the focus of the page on the relevant section. The URL in the search bar is updated to reflect the change, with the addition of the identifier following a hash character `#`, and it is in this instant the element benefits from the pseudo class. It is, after all, the target.

```css
h2:active {
	/* something exciting */
}
```

We can take advantage of this feature with our object. Remember the structure of the element. You reference the resource in the `data` attribute, with a proper URL.

```html
<object title="SVG stack" data="stack.svg" type="image/svg+xml" width="300" height="300"></object>
```

With this in mind you can update the string with the addition of a fragment.

```diff
-data="stack.svg"
+data="stack.svg#icon-1"
```

It is now the `.svg` file which receives the focus for the specific `id`. Update the markup so that the icons share a common trait, a unique identity.

```html
<svg>
	<svg id="icon-1"></svg>
	<svg id="icon-2"></svg>
</svg>
```

And you can now decide what to show with only CSS. And always in the separate document.

```html
<svg>
	<style></style>
	<!-- ...icons -->
</svg>
```

There are at least two ways to achieve the task at hand. Immediately, you can hide all the nested icons with the `display` property. Past the declaration, you then re-abilitate the node which matches the fragment.

```css
svg > svg {
	display: none;
}
svg > svg:target {
	display: initial;
}
```

That being said, if you enjoy brevity and more complex rules, you can streamline the sequence in one declaration. You can select the icons which are _not_ the target, and make them all disappear.

```css
svg > svg:not(:target) {
	display: none;
}
```

It is a pretty convenient setup all things considered. If you want a different icon you only need a different call to the same exact document.

```diff
-data="stack.svg"
+data="stack.svg#icon-2"
```

But there is one little issue you might have noticed already. Consider the initial markup, referencing the file as-is.

```html
<object title="SVG stack" data="stack.svg" ...></object>
```

What happens in this instance? There is no fragment, and there is no target to match. You end up with a blank canvas as the nested shapes share the same `display` property, set to `none`. You may not think of it twice — you will certainly remember to add the fragment and properly update the `title` attribute as well.

```html
<object title="First icon" data="stack.svg#icon-1" ...></object>
```

But in CSS there is an answer with the _"parent"_ selector, `:has`. The syntax lets you style an element depending on a condition being present in the nested scope. The possibilities go beyond the scope of this article — and my understanding —, but you can rely on the selector to consider a multitude of conditions. For instance, you can style a container element only if there is a specific child.

```css
figure:has(figcaption) {
	/* something exotic */
}
```

Or, in a rather roundabout manner, consider the instance when our parent `<svg>` does _not_ have a nested, targeted vector.

```css
svg:not(:has(svg:target)) {
	/* something is coming */
}
```

You may need a moment to evaluate the statement, but once you get past the condition, and the browser supports the feature, you can then pick a graphic to show as a fallback.

```css
svg:not(:has(svg:target)) > svg:first-of-type {
	display: initial;
}
```

If you link to the resource with a fragment, and the fragment matches the `id` of one of the visuals, you'll be able to see just the selected icon. In all other instances you'll have something to show instead.

The selector is fairly supported, but there is one more scenario. If the browser doesn't support the formula you'll be left with a block of empty space. Consider it a nice-to-have, for those rare occasions in which the `data` attribute fails. And a way to see something should you open the file as-is. It might be a bit jarring to stare at the void.
