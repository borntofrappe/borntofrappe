---
title: A remarkable introduction to ASTs
description: I learned about abstract syntax trees to improve the time it takes to build this website. Let me share a few notes.
date: 2023-01-20 17:59:01
---

On January 18th, at precisely 11:59:29 AM, this website was built in 57.6 seconds.

On the same day, at 6:46:10 PM on the dot, the same process took 12.4 seconds instead.

The whole affair is highly specific, involving a custom feature in the context of a processing library _with_ the interplay of a syntax highlighting library. Too specific to be of use outside of this website in the early stages of 2023.

What might be more useful is the journey behind the dramatic improvement, explained by a soft, but impressive, introduction to [remark](https://github.com/remarkjs/remark) and _Abstract Syntax Trees_.

## The premise

You have a markdown file, similar to the one you are actually reading at this very moment.

```md
# A remarkable introduction to ASTs

On January 18th, at precisely 11:59:29 AM, this website was built in 57.6 seconds.
```

You want to process the content into HTML elements.

```html
<h1>A remarkable introduction to ASTs</h1>
<p>On January 18th, at precisely 11:59:29 AM, this website was built in 57.6 seconds.</p>
```

## Node file system

Given a local repository with a markdown file, import a reading and writing function from the `fs` module.

```js
import { readFileSync, writeFileSync } from 'fs';
```

Read an arbitrary markdown document.

```js
const md = readFileSync('index.md', 'utf-8');
```

Write an anecdotic HTML file.

```js
const html = '<p>Hi there</p>';
writeFileSync('index.html', html);
```

Eventually you are going to rely on the file's contents, but the instructions should work as a proof of concept.

## Remark

Install two remark libraries: `remark` itself and `remark-html`.

```bash
npm i -D remark remark-html
```

Import in the script.

```js
import { remark } from 'remark';
import remarkHtml from 'remark-html';
```

Invoke the `remark` function to process the markdown contents.

```js
const result = remark().processSync(md);
```

`processSync` specifically returns an object, with the output safely tucked in the `value` property.

Replace the previous hard-coded string with the newfound value.

```diff
-const html = "<p>Hi there</p>";
+const html = result.value;
```

Without further instructions you add the text as-is, as a string. Almost as if `remark` was nothing.

However, include the `remark-html` plugin through the `use` method.

```js
const result = remark().use(remarkHtml).processSync(md);
```

And suddenly, the sequence of characters is framed in familiar HTML syntax. Almost as if `remark` was doing something after all.

## Abstract syntax tree

It is through the concept of plugins that we can shed more light on the unsung hero of this story, the cryptic abstract syntax tree.

A remark plugin is but a function you pass through the `.use` method, exactly as the installed library.

```js
remark().use(remarkPlugin);
```

The function itself returns a function which receives as first argument an object. A tree. The abstract syntax tree.

```js
const remarkPlugin = () => (tree) => {
	console.log(tree);
};
```

And it is here that you see the inner workings of the `remark` function. If you run the script you'll find a hefty object, a root node and a series of `children` properties, nesting more and more nodes.

Objects like the heading.

```json
{
	"type": "heading",
	"depth": 1,
	"children": [
		{
			"type": "text",
			"value": "A remarkable introduction to ASTs",
			"position": {}
		}
	]
}
```

Or again the paragraph.

```json
{
	"type": "paragraph",
	"children": [
		{
			"type": "text",
			"value": "On January 18th, at ...",
			"position": {}
		}
	]
}
```

It is _through_ the information contained in these objects, _through_ the tree that the installed plugin conjures up the HTML elements.

It is again through this tree that you are able to access the information and change the end result.

## Custom plugin

We could just mock the tree directly and see the change take place immediately, but let's try to implement one feature, no matter how trivial.

The goal is to take the first letter of the first paragraph following the main heading and wrap it in a `<b>` element. Normally, you'd rely on CSS to style the specific character, but the tag works to provide immediate feedback.

```js
const remarkFirstLetter = () => (tree) => {};
```

To traverse the tree install the `unist-util-visit` utility.

```bash
npm i -D unist-util-visit
```

Import the aptly-named `visit` function.

```js
import { visit } from 'unist-util-visit';
```

`visit` takes as first argument a tree object, so it is useful in the body of the plugin function.

```js
const remarkFirstLetter = () => (tree) => {
	visit(tree);
};
```

With an additional argument you specify the type of node in which you are interested (or a function to filter the nodes). In this instance, heading nodes.

```js
visit(tree, 'heading');
```

With a third argument you describe a function, a callback function which takes as argument the found node.

```js
visit(tree, 'heading', (heading) => {});
```

There are several levels of headings, but here we care about `<h1>` elements only. Access the `depth` property to further filter the nodes.

```js
visit(tree, 'heading', (heading) => {
	if (heading.depth !== 1) return;
});
```

Past the first filter, call once again the `visit` function to look for the paragraph immediately following the heading.

```js
visit(tree, 'paragraph', (paragraph) => {});
```

How to consider only the first, successive paragraph? You will find a much better solution, but here's how I continued.

The callback function receives an additional argument, the index of the node relative to the visited object.

```js
visit(tree, 'heading', (heading, i) => {});
```

The most immediate way to test that the paragraph immediately follows is to compare the two index values, for the heading and for the paragraph.

```js
visit(tree, 'paragraph', (paragraph, j) => {
	if (j !== i + 1) return;
});
```

Had enough visiting for one day? Unfortunately, there is one last stop on the schedule. You may remember from the previous section that a paragraph nests an additional node, of type `text`.

Visit the paragraph instead of the parent tree, looking for the specific node.

```js
visit(paragraph, 'text', (node, k) => {});
```

Here we care about the first instance.

```js
visit(paragraph, 'text', (node, k) => {
	if (k !== 0) return;
});
```

From this node extract the value.

```js
const { value } = node;
```

Finally, change the node to represent a different type.

```js
node.type = 'html';
```

And, a different value altogether.

```js
node.value = `<b>${value[0]}</b>${value.slice(1)}`;
```

## Onwards and upwards

Run the script with the plugins.

<!-- prettier-ignore -->
```js
const result = remark()
  .use(remarkHtml)
  .use(remarkFirstLetter)
  .processSync(md);
```

And oopsie, the text all but disappears. Inspect the page and you'll find only an empty paragraph.

This is ultimately because `remark-html` strips HTML through the `sanitize` option.

Change the default value of `true` to see the markup appear once again.

```diff
-.use(remarkHtml)
+.use(remarkHtml, { sanitize: false })
```

A questionable choice which works to highlight the potential of interacting with abstract syntax trees, to stress the need for much more research.
