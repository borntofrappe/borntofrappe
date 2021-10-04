---
title: Code snippet
date: 2022-9-4-22-33
brief: mdsvex is configured to highlight code snippets with shiki and a speficic markup.
---

If everything works you shoud find a couple of code snippet right below this paragraph. Nicely formatted snippets.

```html
<h2 id="identifier">
	Heading
	<a href="#identifier">
		<span class="visually-hidden">Permalink</span>
	</a>
</h2>
```

```svelte
<h1>{title}</h1>
```

```js
function highlight(code, lang) {
	return `<pre><code>${code}</code></pre>`;
}
```
