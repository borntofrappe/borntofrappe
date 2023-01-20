# remark-ast

## remarkCode

```js
import { remarkCode as remarkPlugin } from './plugins.js';
```

Create a function which works as a plugin function for remark and formats code blocks with a specific HTML structure.

```html
<div class="code">
	<span>html</span>
	<pre><code></code></pre>
</div>
```

## remarkCodeHighlight

```diff
-import { remarkCode as remarkPlugin } from './plugins.js';
+import { remarkCodeHighlight as remarkPlugin } from './plugins.js';
```

Create a function which works as a plugin function for remark, formats code blocks with a specific HTML structure and highlights the syntax with shiki.

```html
<div class="code">
	<span>html</span>
	<pre class="shiki nord"><code></code></pre>
</div>
```
