---
title: Test article 3
date: 2021-9-3
brief: A third post to consider rehype packages and shiki for syntax highlighting.
keywords: node, svelte, blog
---

If everything works you shoud find a couple of code snippet right below this paragraph. Nicely formatted snippets.

## HTML

```html
<h2 id="heading">
	Heading
	<a href="#heading">
		<span class="visually-hidden">Permalink</span>
	</a>
</h2>
```

## JavaScript

```js
function highlight(code, lang) {
	return `<pre><code>${code}</code></pre>`;
}
```

## Svelte

Some characters need escaping.

```svelte
<h1>{title}</h1>
```
