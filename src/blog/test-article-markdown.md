---
title: Test Article Markdown
description: Extending mdsvex so that it parses .svx and .md files alike
date: 2021 4 17
tags: html, node
---

The goal of this update is one and only: extend the config logic so that the website parses markdown documents in the `blog` folder.

## Markdown

Create a markdown file in the `blog` folder. Like this very file.

## Config

### mdsvex

Include a field so that `mdsvex` contemplates the two desired extensions.

```js
module.exports = {
	extensions: ['.md', '.svx']
};
```

### Svelte

Update the `extension` field so that svelte picks up `.svelte` files and the ones supported through `mdsvex`

```js
module.exports = {
	extensions: ['.svelte', ...mdsvexConfig.extensions]
};
```

## glob

This concerns both `[slug].svelte` and `index.js`, and relates to how it is necessary to import both extensions.

Previously, the vite feature considered `.svx` syntax as follows.

```js
import.meta.glob('/src/blog/*.svx');
```

The documentation for [supported glob patterns](https://github.com/mrmlnc/fast-glob#pattern-syntax) helps to find the new expression.

```js
import.meta.glob('/src/blog/*.{md,svx}');
```

Fingers crossed, that's all that is necessary.
