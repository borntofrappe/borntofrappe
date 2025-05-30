---
title: Exec editor
description: A cheap way to prototype a rich editing experience.
date: 2025-05-30
---

Here's a couple things worth knowing when you want to receive user input and rapidly display the text with a few styling options:

1. `contentEditable` set to `true` is enough to enable rich editing with keyboard shortcuts

   ```html
   <div contenteditable="true"></div>
   ```

   The options are limited as you can increase only increase the font weight — <kbd>Ctrl</kbd> + <kbd>B</kbd>, incline the letters — <kbd>Ctrl</kbd> + <kbd>I</kbd>, or toggle a neat underline — <kbd>Ctrl</kbd> + <kbd>U</kbd>.

   Even worse, the "feature" works only on Chromium-based browsers. Test the code on FireFox and you are stuck with unstyled text.

1. if you want to keep a consistent interaction and avoid the changes `contentEditable` supports another value with the simpler `plaintext-only`

   ```html
   <div contenteditable="plaintext-only"></div>
   ```

1. to expand the features to more web browser you can try the `execCommand` method on the `document` object

   ```js
   document.execCommand("bold", false, undefined);
   ```

   The function is [noted as deprecated](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand), but there aren't quick alternatives to its features.

When you have the time for a more serious piece of editing software you might consider a dedicated library, or accept to re-implement the `execCommand` niceties all on your own. But if you still rely on the still widespread API, know that when you want to signal that a flag is active you don't need to keep track of state with a variable you update next to the call to the express function. To keep a marker in sync, and since you are already relying on a deprecated method, you can query the state understanding the warning coming with `queryCommandState`.

```js
document.queryCommandState("bold"); // true
```
