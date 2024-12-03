---
title: Renewed hype in ASTs
description: A brief introduction may not be enough to appreciate abstract syntax trees. Let's explore the topic further.
date: 2023-01-22 16:49:41
---

On January 21st I revisited the topic of abstract syntax trees, ASTs.

The decision followed [the brief introduction](/a-remarkable-introduction-to-asts) I discussed with the `remark` library, as I felt compelled to continue researching the topic.

In the process, I gained a better understanding of ASTs, and possibly found a better way to replicate the feature made up in the previous post.

## The premise

A quick rundown of the first article, so we start from the same level:

- you have a markdown file

  ```md
  # Renewed hype in ASTs

  On January 21st I revisited the topic of abstract syntax trees, ASTs.
  ```

- you want to mark up the contents in a `.html` document

  ```html
  <h1>Renewed hype in ASTs</h1>
  <p>On January 21st I revisited the topic of abstract syntax trees, ASTs.</p>
  ```

- also, you want to change the markup to highlight the first letter

  ```diff
  -<p>On January 21st
  +<p><b>O</b>n January 21st
  ```

You interact with the file system through Node's `fs` module so as to read from a markdown file.

```js
const md = readFileSync('index.md', 'utf-8');
```

And, write to an `.html` page.

```js
const html = '<p>Nice to see you again</p>';
writeFileSync('index.html', html);
```

## Unified

Install three libraries: `unified`, `remark-parse` and `remark-html`.

```bash
npm i -D unified remark-parse remark-html
```

Why not `remark` alone?

Remark works in the context of the larger [unified](https://github.com/unifiedjs/unified) ecosystem. `remark-parse` works to create the abstract syntax tree just as the solitary module did in isolation.

Import the modules and process the markdown syntax through the remark plugins.

<!-- prettier-ignore -->
```js
const result = unified()
  .use(remarkParse)
  .use(remarkHtml)
  .processSync(md);
```

`processSync` once again hides the syntax in the `value` property.

```js
const html = result.value;
```

## Abstract syntax trees

`remark-parse` creates a particular type of AST, a _markdown_ AST — remember the particular syntax for the nodes, with properties such as `type` describing a heading or again a paragraph.

```json
{
  "type": "heading",
  "depth": 1,
  "children": {},
};
```

When you modify the tree you operate on markdown nodes.

Say you want to mess directly with the markup, however. In this instance you want the _HTML_ AST, available through [rehype](https://github.com/rehypejs/rehype).

## Rehype

Install two libraries: `remark-rehype` and `rehype-stringify`.

```bash
npm i -D remark-rehype rehype-stringify
```

The first plugin helps us to move from <abbr title="Markdown Abstract Syntax Tree">MAST</abbr> to <abbr title="HTML Abstract Syntax Tree">HTMLAST</abbr>.

The second module _serializes_ the tree, turns the tree into HTML elements.

```js
const result = unified()
	// ...
	.use(remarkRehype)
	.use(rehypeStringify)
	.processSync(md);
```

Run the script and you won't see any change. The content is wrapped in the familiar tags. There is a point to the exercise, however.

Add your own function after the `remarkRehype` plugin.

```js
const result = unified()
	// ...
	.use(rehypePlugin)
	.processSync(md);
```

And if you log the tree.

```js
const rehypePlugin = () => (tree) => {
	console.log(tree);
};
```

You'll spot a considerably different structure.

```json
{
	"type": "element",
	"tagName": "h1",
	"properties": {},
	"children": [{}],
	"position": []
}
```

The heading has now of type `element`, no longer `heading`. Moreover, the object includes a `tagName` value to boot — not to mention `properties`.

As mentioned, these are nodes of the _HTML_ tree.

## Custom plugin

Let's try to recreate the first-letter feature by writing a rehype plugin.

```js
const result = unified()
	// ...
	.use(rehypeFirstLetter)
	.processSync(md);
```

The function mirrors the remark alternative in that it returns a function which receives the AST.

```js
const rehypeFirstLetter = () => (tree) => {};
```

Once again install `unist-util-visit` and import the `visit` function, to explore the tree's nodes.

This is where the plugin departs from the remark version. We are interested in the main heading, and in this instance it means we care about the type of `element` with a specific `tagName`.

```js
visit(tree, 'element', (node) => {
	if (node.tagName !== 'h1') return;
});
```

How to find the first paragraph? In the previous post I repeated the `visit` function and compared the index values of the two nodes, for the heading and paragraph. Here, however, I might have found a better alternative remembering a perhaps obvious concept: the tree is just an object. The `children` property of every node is but an array of objects.

You can explore the tree with the utility function, but are free to do so on your own.

Thankfully, the callback function for `visit` provides the parent object for the node with a third argument, right after the index of the node in the tree.

```js
visit(tree, 'element', (node, i, parent) => {});
```

The first paragraph, if existing, is the first node in the parent object with the prescribed tag name.

```js
const paragraph = parent.children.find((d) => d.tagName === 'p');
```

I personally prefer the approach to the index-based variant. What if there is an image, a blockquote, or any other type of element between heading and text? Why, you may never find the first sentence.

Continuing with the plugin, extract the child nodes of the paragraph.

```js
const { children } = paragraph;
```

Instead of looking for the text node, however, look for the index value.

```js
const textIndex = children.findIndex((d) => d.type === 'text');
```

Why the index? The paragraph might contain several types of nodes. We want to operate on the text, but in the larger context of all its children.

Case in point, we want to immediately skip the text node.

```js
paragraph.children = [...children.slice(0, textIndex), ...children.slice(textIndex + 1)];
```

Run the script and the text disappears. As expected.

It is between the two `slice` methods that we inject our made up content. Described with HTMLAST nodes.

The text, skipping the first letter.

```js
const text = {
	type: 'text',
	value: value.slice(1)
};
```

The `<b>` element, fattening the first letter.

```js
const b = {
	type: 'element',
	tagName: 'b',
	children: [
		{
			type: 'text',
			value: value[0]
		}
	]
};
```

Just be sure to place them in the correct order.

```diff
paragraph.children = [
  ...children.slice(0, textIndex),
+ b,
+ text,
  ...children.slice(textIndex + 1),
];
```

## When to use which

Remark, rehype. MAST, HTMLAST. The preference I hold for the latter might be from the increasing familiarity I gained with the topic, not to mention the improvements from the first attempt. Disabling the sanitize option for `remark-html` also felt like a cheap shortcut.

At the end of the day what matters is being informed, know which tree you want to manipulate and how. And perhaps go through more than just these two articles and a trivial plugin.
