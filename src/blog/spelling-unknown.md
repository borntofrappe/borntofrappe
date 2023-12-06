---
title: Spelling unknown
description: Check the mildly confusing consequences of unknown elements in HTML and SVG.
date: 2023-12-06T15:36:30
---

HTML is a robust language built to withstand unexpected input, be it intentional or otherwise. SVG is a tad more strict in that sense; the language is often programmed with safeguards, but these are not always of use.

## HTML

What happens if you manage to misspell an HTML element wrapped around additional content, or even more elements?

```html
<diva>
	<p>All that glitters</p>
</diva>
```

Luckily for us, very little out of the ordinary. The browser continues its job to faithfully render the text, the tag names listed in the specification. The elements which do not appear in this list are treated as a special type of element, `HTMLUnknownElement`. You can attest this yourself with JavaScript, through the prototype of the unknown target.

```js
const element = document.querySelector('diva');
Object.getPrototypeOf(element); // HTMLUnknownElementPrototype
```

And if you follow [the documentation](https://html.spec.whatwg.org/multipage/dom.html#htmlunknownelement), you can appreciate the way the language copes with the issue. The unknown element is treated as a generic container with no semantic meaning, no particular connotation. The feature is mighty useful in the context of custom elements, to give purpose to made-up names. But in this context, you should have the courtesy of following [the naming convention](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name). Leave single-named elements to official nodes — you never know where HTML might grow in the future. For your creations, use at least two words separated with a hyphen.

```js
class SpotLight extends HTMLElement {
	/* ...construct */
}

if ('customElements' in window) {
	customElements.define('spot-light', SpotLight);
}
```

Either way, the markup keeps working, in spite or on top of the unknown syntax. Should you type too quickly, should custom elements not be supported, the browser won't be too mad to just move ahead.

## SVG

What happens if you repeat the exercise in SVG? Unfortunately, not the same thing. But not for lack of trying.

```html
<svg viewBox="-5 -5 10 10">
	<group>
		<circle fill="gold" r="5" />
	</group>
</svg>
```

Per [a recommendation](https://www.w3.org/TR/SVG2/struct.html#UnknownElement) in the standard, unknown elements should be treated as generic containers, `g` or `tspan` elements, to keep displaying the nested content. As with HTMLUnknownElement, you should find an instance `SVGUnknownElement` and similar consequences.

Unfortunately, the feature has not been implemented yet. Should you fall in the same scenario and run the code you would find an `SVGElement` instead.

```js
const element = document.querySelector('group');
Object.getPrototypeOf(element); // SVGElementPrototype
```

On the page, you won't find a single shred of the nested shapes. Nothing is shown, nothing is rendered, leaving you with a reminder and a call to action. HTML and SVG share a similar core in the markup format, but each has its own standard. Strive to be precise, test the code and if something doesn't look right, or at all, refer to the docs. And test the code again.
