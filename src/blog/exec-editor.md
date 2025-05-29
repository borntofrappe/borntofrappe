---
title: Exec editor
description: When you need a playground and you don't plan to create a really rich editing experience.
date: 2025-05-29
---

Today I learned that at least on Chrome `contentEditable` set to `true` is enough to enable rich editing with keyboard shortcuts. Sure, these are limited to a few commands like bold — <kbd>Ctrl</kbd> + <kbd>B</kbd>, italic — <kbd>Ctrl</kbd> + <kbd>I</kbd>, and underline — <kbd>Ctrl</kbd> + <kbd>U</kbd>, but it's certainly something I did not anticipate.

```html
<div contenteditable="true"></div>
```

Unfortunately, just testing the code FireFox proves the solution is brittle. And as brittle as the code you'd need to rapidly prototype the experience through the `document` object. Here you have `execCommand`, but unfortunately the function is [noted as deprecated](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand). There aren't quick alternatives for some of its features, and the API should still work, but the moment you need a more serious piece of editing software, you will have to look further.

```js
document.execCommand("bold", false, undefined);
```

A couple more small things: if you want to signal that a flag is active you don't need to keep track of state with a variable you update next to the call to the command. To keep a marker in sync, and since you are already relying on a deprecated method, you can query the state with `queryCommandState`.

```js
document.queryCommandState("bold"); // true
```

Finally, if you find the Chrome-exclusive features to be overstepping their bounds, you can disable the formatting with another value the `contentEditable`: `plaintext-only`.

```html
<div contenteditable="plaintext-only"></div>
```
