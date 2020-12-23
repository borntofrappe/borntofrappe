---
title: 'Syntax Highlighting'
date: 2020-12-22
description: ''
keywords: ['editor', 'js', 'node']
hasCode: true
---

After many trials and tribulations, I've finally settled on a solution for syntax highlighting. Instead of using the plugin provided by 11ty, I use `highlight.js` to wrap the code in a series of `<span>` elements with specific classes. These classes allow to then change the color of dedicated elements.

```html
<span class="hljs-name"></span>
```

A stylesheet is then included with a specific flag.

```md
hasCode: true
```

Here's a few code snippets to test the feature out.

```html
<body>
  <blockquote>
    <p>there's no better time than now</p>
    <p>there was, but it was yesterday</p>
  </blockquote>
</body>
```

```css
.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}
```

```js
function setPreference(preference) {
  document.body.setAttribute('data-preference', preference);
}
```

```js
function setPreference(preference) {
  document.body.setAttribute('data-preference', preference);
  window.localStorage.setItem('color-scheme', preference);
}
```

What is left is customizing the colors according to a specific theme.

Work-in-progress indeed.
