---
title: Syntax Highlighting
date: 2020-3-1
brief: Adding syntax highlighting with shiki and async syntax.
tags: css, js
---

Following the instructions detailed in the mardkwon file **From Markdown to HTML**, I set out to include syntax highlighting with the aforementioned `shiki` module.

```js
const path = require("path");
const fs = require("fs");
const marked = require("marked");
const shiki = require("shiki");
```

Looking at [the website for the shiki module](https://shiki.matsu.io/), I tried to replicate the example provided for the `markedown-it` package, just with `marked` instead.

It took surprisingly little, but the idea is to include the highlighter in the `highlight` field of the options in the markdown parser.

```js
marked.setOptions({
  highlight: (code, lang) => highlighter.codeToHtml(code, lang),
});
```

Once this option is set, I continue parsing the markdown files as specified in the previous script.

I decided to save the script in a separate file, `script-syntax.js`, to better analyze the modules contribution.

I also tried to include a different theme, using night owl, and while I ended up sticking with one of the given options, it was good practice to figure out what it would take.

- download the theme, placing the [json file](https://github.com/sdras/night-owl-vscode-theme/blob/master/themes/Night%20Owl-color-theme.json) in the root folder

- use the `loadTheme` function and pipe the theme directly in the script

```js
const theme = shiki.loadTheme("./Night-Owl-color-theme.json");

shiki
  .getHighlighter({
    theme,
  })
  .then();
```

Store it in the _good to know_ drawer.
