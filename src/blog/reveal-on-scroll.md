---
title: Reveal on scroll
description: Transition elements into view with the help of the intersection observer API and a sprinkling of Svelte
date: 2023-02-07T15:14:53
---

There is one nice effect, especially on landing pages, where content is revealed as you scroll along. Text and images appear from the ether to make the page feel responsive, receptive. Almost alive.

You don't even need to be fancy with the introduction. Even a subtle, fade-in transition is impressive enough.

## Setup

We are going to touch Svelte in a later section, but let's start with solid foundations. Let's begin with HTML, CSS and Javascript.

You can work locally — all you need is an `.html` file opened in a web browser — but you might enjoy a playground like [CodePen](https://codepen.io/pen/) a tad more. The split between the three panels, between the three languages certainly helps to frame the feature.

## HTML

If you are familiar with [Emmet](https://blog.codepen.io/2013/04/24/emmet-on-codepen/) the following cryptic line will do.

```html
div*4>p>lorem10
```

The result is a markup structure with five `<div>` containers, wrapping around a paragraph element and a pointless sequence of characters.

## CSS

To force scrolling, target the `<div>` elements and stretch them to fill the viewport.

```css
div {
	min-block-size: 100vh;
}
```

To have some breathing room we are going to center the paragraphs in the expanded section.

```css
div {
	min-block-size: 100vh;
	display: grid;
	place-items: center;
}
```

For a bit of flair, then, we are going to change the background color of the child elements, even add a hint of padding.

```css
p {
	background-color: blanchedalmond;
	padding: 1rem 2rem;
}
```

## Data state

It would be presumptuous to hide the content by default and reveal it with the blessing of Javascript. What if something were to go wrong? You might be stuck with a blank page.

To manage the state you could rely on classes, but I rather enjoy the construct of `data-*` attributes.

```css
[data-state='hidden'] {
	opacity: 0;
	transform: translateY(1rem);
}

[data-state='visible'] {
	opacity: 1;
	transform: translateY(0);
}
```

Two `data-state` selectors. One to hide the content, and slightly nudge it down for good measure. One to show the content anew.

For the transition add a final selector, targeting all the elements bearing the `data-state` attribute.

```css
[data-state] {
	transition: opacity 0.5s ease-out, transform 0.75s ease-out;
}
```

The intent should be clear. With JavaScript, the idea is to manage the state through the `data-state` attribute, add the `hidden` value and then replace the string with the `visible` flag.

## Javascript

The intersection observer API is [well supported](https://caniuse.com/intersectionobserver), but it never hurts to test the feature first. One checkup is well worth the hassle.

```js
if (IntersectionObserver) {
	// ...
}
```

If you care for self-invoking functions you could replace the statement testing the opposite instance, the lack of the feature.

```js
(() => {
	if (!IntersectionObserver) return;
	// ...
})();
```

Either way, let's continue the logic with the available API.

Set up an instance of `IntersectionObserver`.

```js
const callback = () => {};

const observer = new IntersectionObserver(callback);
```

We'll compose the callback promptly, but to have the observer actually observe the nodes, target the paragraphs in the document.

```js
const paragraphs = document.querySelectorAll('p');
```

For each paragraph add the starting `data-state` attribute.

```js
paragraphs.forEach((paragraph) => {
	paragraph.setAttribute('data-state', 'hidden');
});
```

Finally, direct the observer to the element.

```js
observer.observe(paragraph);
```

Refresh the page and the text disappears as intended. It's the job of the callback to have the paragraphs return.

The callback function takes as argument an array of entries, and the observer itself.

```js
const callback = (entries, observer) => {
	//
};
```

[A single entry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) gives you plenty of information.

```js
entries.forEach((entry) => {
	console.log(entry);
});
```

For our purposes, however, we care about two specific properties: `isIntersecting` and `target`.

Test first if the entry is intersecting, if the associated element falls within the boundaries of the viewport.

```js
if (!entry.isIntersecting) return;
```

If the entry is indeed intersecting, retrieve the HTML node to add the final `data-state` attribute.

```js
const { target } = entry;
target.setAttribute('data-state', 'visible');
```

Finally, instruct the observer to stop caring about the target.

```js
observer.unobserve(target);
```

And that's it. Feel free to examine the demo I made [on CodePen](https://codepen.io/borntofrappe/pen/QWVbmzJ) while writing this article. As you scroll you are greeted by the paragraphs and the nutty background color. The transition should be slow enough to be noticeable.

## Toggle state

If there is one thing I believe about sorcery is that magic works best once. For the sake of argument, however, let's say you want to hide the paragraphs as they retreat outside of the visible area.

In this instance you no longer relieve the observer of its duty.

```diff
-observer.unobserve(target);
```

Extract the node immediately and add the `data-state` flag most appropriate for the occasion.

```js
const { isIntersecting, target } = entry;
const state = isIntersecting ? 'visible' : 'hidden';
target.setAttribute('data-state', state);
```

I personally have a lighter conscience knowing the observer has completed its task, but in terms of demo, [the result](https://codepen.io/borntofrappe/pen/PodqRgR) might be more convincing.

## Svelte

Open up a Svelte app, perhaps [through a REPL](https://svelte.dev/repl), and copy-paste the markup.

```svelte
<div>
	<p>Lorem ipsum d<!-- ... --></p>
<!-- ... -->
```

In between `<style>` tags continue the copying with CSS.

```svelte
<style>
	div {
		min-block-size: 100vh;
		/* ... */
	}
	/* ... */
</style>
```

The compiler here complains about _"Unused CSS selectors"_, with a reference to the `data-state` attributes.

For better, and this time for worse, Svelte considers only the styles applicable to the component, to the existing markup. There is no element with the `data-state` attribute, nor one with the specific values, and the instructions are not processed.

The quickest way around the issue is through Svelte `:global` syntax. In this manner you target all possible nodes, and the properties are preserved.

```diff
-[data-state="hidden"] {
+:global([data-state="hidden"]) {
```

Moving on to the logic, Svelte offers [actions](https://svelte.dev/docs#template-syntax-element-directives-use-action) as a most helpful feature. You create an action with a function and associate it to an element through the `use:` directive.

```svelte
<script>
	const observeState = () => {
		//...
	};
</script>

<p use:observeState>Lorem ipsum d<!-- ... --></p>
```

The function is called as the element is created, giving you access to the node.

```js
const observeState = (node) => {
	//...
};
```

Knowing this, the biggest challenge is to adapt the previous script, for all paragraphs, to consider a single element. As you'll see, this will take only JavaScript.

Past the customary feature-detection, repeat the code to create the observer.

```js
const callback = (entries, observer) => {
	// ...
};

const observer = new IntersectionObserver(callback);
```

Add the `data-state` attribute and observe the element, this time through the available `node`.

```js
node.setAttribute('data-state', 'hidden');
observer.observe(node);
```

In the callback function iterate through `entries`, exactly as in the previous version, or test the first object only.

```js
/*
entries.forEach((entry) => {
  // ...
})
*/
const [entry] = entries;
```

Since the observer looks for one node, the array has one item, meaning the instructions are equivalent.

The rest of the logic follows precisely the JavaScript-only variant. Consider if the entry is intersecting and add the `data-state` attribute if need be.

One last courtesy, however. Remember how you relied on the `unobserve` function to stop the observer from considering the element further?

```js
observer.unobserve(target);
```

A Svelte action returns an object with a `destroy` function. This function is called as the component is destroyed, and is a fitting place to extend the same kindness.

```js
const observeState = (node) => {
	// ...

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
};
```

Once again, feel free to examine the code, this time [in the REPL](https://svelte.dev/repl/104b8f01b2b146f39890d81a2c26a920?version=3.55.1). Feel free to scroll to your heart's content.
