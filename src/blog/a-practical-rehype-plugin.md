---
title: A practical rehype plugin
description: Let's wrap the excursion into ASTs with a helpful function.
date: 2023-01-25 15:08:54
---

The previous two articles discussing abstract syntax trees in the context of [remark](/a-remarkable-introduction-to-asts) and [rehype](renewed-hype-in-asts) focused on a plugin to carry out a rather pointless task.

It is helpful to rehearse the concepts once more, in the context of a practical example implementing a veritable feature.

## The feature

The goal is to add a _permalink_, an anchor link element pointing to subheadings in a markdown document.

```html
<h2 id="hi-there">
	Hi there
	<a href="#hi-there"></a>
</h2>
```

I am specifically interested in `<h2>`, `<h3>`, and `<h4>` elements, but once you understand the logic you can expand the functionality to consider all possible levels.

The function is going to work as a rehype plugin. In the scope of the previous articles, this means it would follow the call to `remark-rehype`.

```js
unified()
	//
	.use(remarkRehype)
	.use(rehypePermalink);
```

In terms of abstract syntax trees, this means we are going to interact with and manipulate HTML nodes.

## Visitations

Install `unist-util-visit` library to explore the tree with the `visit` function.

```js
import { visit } from 'unist-util-visit';
```

In the body of the plugin look for nodes with a type of `element`.

```js
const rehypePermalink = () => (tree) => {
	visit(tree, 'element', (node) => {});
};
```

As prefaced, we care about a specific set of headings.

```js
const tagNames = ['h2', 'h3', 'h4'];
```

Filter out the nodes which don't fall in one of the categories.

```js
visit(tree, 'element', (node) => {
	if (!tagNames.includes(node.tagName)) return;
});
```

As you need an identifier a possible reference comes from the heading's own text.

```html
<h2 id="hi-there">Hi there</h2>
```

At first I thought it would be enough to look at the `children` array for the specific node, and extract its value.

```js
const text = node.children.find((d) => d.type === 'text');

const { value } = text;
```

Unfortunately, the approach is rather short-sighted. What if the `children` array doesn't contain text at all?

Say you have a heading which works as a link.

```md
## [Rehype](https://github.com/rehypejs/rehype)
```

In this instance `children` would describe the anchor link, with the text nested an additional level.

```json
{
	"type": "element",
	"tagName": "a",
	"properties": {
		"href": "https://github.com/rehypejs/rehype"
	},
	"children": [
		{
			"type": "text",
			"value": "Rehype",
			"position": {}
		}
	],
	"position": {}
}
```

You can terminate the function early in the moment you don't find the node, but you'd skip the heading altogether.

```js
if (!text) return;

const { value } = text;
```

Luckily, the `visit` function leads to a possible solution.

Initialize a string for the string value.

```js
let value = '';
```

Visit the heading looking for text nodes.

```js
visit(node, 'text', (text) => {});
```

Add the value to the tracking variable.

```js
visit(node, 'text', (text) => {
	value += text.value;
});
```

In this manner you find nested elements, but also multiple nodes. Consider for instance a slightly more complex heading which includes backticks.

```md
## The `rehype` library
```

`children` would describe three nodes.

```json
[
	{
		"type": "text",
		"value": "The ",
		"position": {}
	},
	{
		"type": "element",
		"tagName": "code",
		"properties": {},
		"children": [
			{
				"type": "text",
				"value": "rehype"
			}
		],
		"position": {}
	},
	{
		"type": "text",
		"value": " library",
		"position": {}
	}
]
```

`visit` would still find the text nodes and compose a more accurate value.

## Properties

Install the `slug` library to turn the string into a slug, removing whitespace and escaping possibly pesky characters.

```js
import slug from 'slug';
```

Create the identifier for the heading.

```js
const id = slug(value);
```

Create the reference for the soon-to-be anchor link.

```js
const href = `#${id}`;
```

## HTML Nodes

Let's try to fabricate a slightly more complex markup structure, with an additional label and two classes.

```html
<h2 id="hi-there" class="permalink">
	Hi there
	<a href="#hi-there">
		<span class="visually-hidden">Permalink</span>
	</a>
</h2>
```

It is helpful to start from the most nested element and work our way upwards — you'll soon appreciate why.

For the label, define an object with the fitting `tagName`.

```js
const span = {
	type: 'element',
	tagName: 'span'
};
```

Add the prescribed class in the `properties` field.

```js
const span = {
	// ...
	properties: {
		className: 'visually-hidden'
	}
};
```

Include the hard-coded string with a text node.

```js
const span = {
	// ...
	children: [
		{
			type: 'text',
			value: 'Permalink'
		}
	]
};
```

That's some leg work for a `<span>` element, but thankfully, the remaining logic repeats most of the steps only with different values.

Create an object for the anchor link.

```js
const a = {
	type: 'element',
	tagName: 'a'
};
```

Add the `href` attribute among the properties.

```js
const a = {
	// ...
	properties: {
		href
	}
};
```

For the content, include the made-up label.

```js
const a = {
	// ...
	children: [span]
};
```

Let's take a breather to consider the state of things. With the two nodes you have composed the following markup.

```html
<a href="href"><span>Permalink</span></a>
```

It is finally time to modify the original node, the heading, and tie everything together.

Update the `id` attribute, creating a match for the anchor link.

```js
node.properties.id = id;
```

For the class you could update the `className` property directly.

```js
node.properties.className = 'permalink';
```

But let's be wholesome and consider a more complex setup. One in which other plugins might want to update the heading and add a different class. You can support this scenario with an array of values instead of a single, overriding string.

If the node doesn't have a `className` property already, initialize the array.

```js
if (!node.properties.className) node.properties.className = [];
```

If `className` is a string, collect the value in an array.

```js
if (typeof node.properties.className === 'string')
	node.properties.className = [node.properties.className];
```

Finally, append the string for the plugin at hand.

```js
node.properties.className.push('permalink');
```

Past the specific id, past the arbitrary class, update the `children` array to include the finally permanent anchor link.

```js
node.children = [...node.children, a];
```

## Wrapping up

I don't believe the plugin to be _the_ answer to add permalinks to headings.

Prior to the custom logic I relied on [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings), and the necessary [rehype-slug](https://github.com/rehypejs/rehype-slug) to create a similar markup, and the two certainly offer more options.

What `rehypePermalink` realizes, however, is a specific vision. Once you appreciate abstract syntax trees, once you understand how HTML (or markdown) nodes work, you become the architect for any structure you may need. An empowering feeling.

If you need the entire plugin I keep a reference in a helper folder [on GitHub](https://github.com/borntofrappe/utils/blob/main/rehype-permalink/rehype-permalink.js), but don't limit yourself to the script. Create your own version, the one which fits your wants and wishes.
