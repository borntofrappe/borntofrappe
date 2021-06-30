---
title: Syntax Highlighting
date: 2021-5-30
brief: Adding syntax highlighting through mdsvex and with the shiki module
keywords: ['svelte', 'html', 'svg']
---

The entire purpose of this article is to show how I intend to handle syntax highlighting. By default `mdsvex` leans on [PrismJS](https://prismjs.com/), but I opted to install and use [shiki](https://shiki.matsu.io/) instead.

```json
{
  "devDependencies": {
    "mdsvex": "^0.9.7",
    "shiki": "^0.9.5"
  }
}
```

`mdsvex.config.js` helps to have a dedicated file to export the configuration for the `mdsvex` module. This helps to avoid including every instruction in the svelte config file.

It is possible to disable the default tokenization by customizing the `highlight.highlighter` function.

```html
<h1>Hello world</h1>
```

```js
function highlighter(code) {
  return `Hello ${hello there} world`;
}
```

However, it is necessary to escape a few characters:

- the less-than sign, `<`, since it describes the opening tag of an HTML element

- backticks characters `\``

- the opening curly brace `{` since in svelte it has a special meaning, and allows to include JavaScript in the HTML

Refer to [this issue](https://github.com/pngwn/MDsveX/issues/117) to understand why.

The same precaution is not necessary when using shiki.
