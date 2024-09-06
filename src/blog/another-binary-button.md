---
title: Another binary button
description: Try another way to mark up and showcase a pretty sweet switch.
date: 2024-09-06T18:16:23
---

In the design of a modern web app a toggle allows to pick between one of two options; a different set of colors for a dark theme, a larger display to highlight the main content. The ever stylable `button` is the most pertinent HTML element: you can listen to a click event to collect mouse, touch and keyboard input, all in one swoop, and with a series of tweaks create up a solid component in just a few steps.

The idea is to enhance the regular element, from a simple button with a static label.

```html
<button>Toggle dark mode</button>
```

To relate the change between the two states with the `aria-pressed` attribute.

```html
<button aria-pressed="false">Toggle dark mode</button>
```

Using JavaScript you can switch the value with the binary choice of strings, `"false"` and `"true"`.

```js
button.addEventListener('click', () => {
	const pressed = button.getAttribute('aria-pressed') === 'true';
	button.setAttribute('aria-pressed', !pressed);
});
```

And in terms of function, you're done. The browser updates the _accessibility tree_ and screen readers are already able to know the new value. You don't want to change the label, as the information in the element makes the change obvious.

_"Toggle dark mode, toggle button, not pressed"_

What you do want is to change the appearance so that the way the button looks answers the same, most pertinent question for sighted users as well — is this button pressed?

With CSS you are able to target the element, and even refine the search for the relevant nodes: buttons with the specific attribute and with the even more specific value.

<!-- prettier-ignore -->
```css
button[aria-pressed] {}

button[aria-pressed="true"] {}

button[aria-pressed="false"] {}
```

To make the difference evident, then, try to change more than just color. You can reposition the widget with a slight offset and reinforce the unpressed version with an evident outline.

```css
button[aria-pressed] {
	color: white;
	background: black;
	position: relative;
}

button[aria-pressed='false'] {
	translate: 0 -2px;
	box-shadow:
		0 1px 0 1px white,
		0 1px 0 3px black;
}
```

But in a recent project, I resolved to add a bit of complexity for a neat alternative. The goal is to show one of two icons, and therefore add the graphics right after the text — being infatuated with the SVG language, I couldn't resist bespoke vector shapes.

```html
<button aria-pressed="false">
	Toggle dark mode
	<svg><!-- ... --></svg>
	<svg><!-- ... --></svg>
</button>
```

To show only one picture hide the other with the `display` attribute and, to make the purpose of the images more clear, add a custom `data` attribute, like `data-pressed`. This is meant to mirror the two values of the `aria-pressed` attribute.

```html
<button aria-pressed="false">
	<!-- ...text -->
	<svg data-pressed="false"><!-- ... --></svg>
	<svg data-pressed="true"><!-- ... --></svg>
</button>
```

Meaning that in CSS you can reveal and conceal the two icons without second guessing.

```css
button[aria-pressed='false'] [data-pressed='false'] {
	display: initial;
}

button[aria-pressed='false'] [data-pressed='true'] {
	display: none;
}

button[aria-pressed='true'] [data-pressed='false'] {
	display: none;
}

button[aria-pressed='true'] [data-pressed='true'] {
	display: initial;
}
```

The `display` property takes precedence over the same attribute and completes the effect.

You can certainly use a different set of nodes to draw shapes, or toy with the idea of using fancy CSS declarations and key-value pairs.

```css
button[aria-pressed='false']::after {
	content: '...';
}
button[aria-pressed='true']::after {
	content: '...';
}
```

Ultimately the essence remains the same. You have a good-looking toggle which is able to describe the change regardless of how you interact with the button and regardless of how you perceive the call to action.

With solid foundations you can move on to develop the actual functionality. And if for some reason you decide to show just the icons — I certainly won't blame you if [your bright app](https://garde-temps.netlify.app/) is pressed for time and space —, don't just remove the text. To describe the state you always have the option adding the `aria-label` attribute or stick with the label, hidden with a utility class which probably lives in your global stylesheet — and should probably be supported by modern browsers as well.

```html
<button aria-pressed="false">
	<span class="visually-hidden">Toggle dark mode</span>
	<!-- ...icons -->
</button>
```
