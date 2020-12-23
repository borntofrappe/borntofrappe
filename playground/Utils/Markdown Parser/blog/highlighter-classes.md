---
title: Highlighter Classes
date: 2020-12-8
brief: Testing out the many classes added with highlight.js
tags: node, js
---

```js
const path = require('path');

// check if the output folder exists, create one
if (!fs.existsSync(output)) {
  fs.mkdirSync(output);
}

// modify default renderer
const markdownLibrary = markdownIt();
markdownLibrary.renderer.rules.heading_open = function (tokens, index) {
  const { tag } = tokens[index];
  const { content } = tokens[index + 1];
  const id = content.toLowerCase().replace(/ /g, '-');

  return `<${tag} id="${id}" class="permalink">`;
};
markdownLibrary.renderer.rules.heading_close = function (tokens, index) {
  const { tag } = tokens[index];
  const { content } = tokens[index - 1];
  const id = content.toLowerCase().replace(/ /g, '-');

  return `<a href="#${id}"><span class="visually-hidden">permalink</span>${icons.permalink}</a></${tag}>`;
};

markdownLibrary.options.highlight = function (str, lang) {
  const icon = icons[lang] ? icons[lang] : '';
  return `<div class="code"><span aria-label="Language">${icon} ${lang}</span><pre><code>${
    highlighter.highlight(lang, str).value
  }</code></pre></div>`;
};
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Footer</title>
    <link rel="stylesheet" href="../global.css" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <!-- switch to "light" or "dark" for a different color palette -->
  <body data-preference="light">
    <main></main>
    <footer>
      <a href="https://twitter.com/borntofrappe">borntofrappe</a>
    </footer>
  </body>
</html>
```

```css
#content {
  max-width: 40rem;
  font-size: 1rem;
  width: 90vw;
  margin: 150vh auto 100vh;
  line-height: 2;
}

@media (prefers-color-scheme: dark) {
  body:not([data-preference]) nav a {
    font-weight: 600;
  }
}

body[data-preference='dark'] nav a {
  font-weight: 600;
}

nav a {
  text-decoration: none;
  font-family: 'Maven Pro', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.25rem 0;
  display: inline-flex;
  align-items: center;
}

a.relative:hover::after,
a.relative:focus::after {
  color: hsl(20, 22%, 12%);
  content: url('');
}
```
