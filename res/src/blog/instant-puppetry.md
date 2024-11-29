---
title: Instant puppetry
description: Take quick screenshots of a local HTML page.
date: 2023-11-10T14:34:46
---

In the process of building a fast stopwatch I found myself in need of raster images. With the goal of replicating the application as closely as possible I solved the issue with `puppeteer`, launching Chrome and taking a screenshot of a local `.html` document. And the truth is that the entire process took much less than expected.

For the restless: you can code along or borrow the project I have committed [on Github](https://github.com/borntofrappe/utils/tree/main/puppeteer-screenshots). Be warned, the folder lists `puppeteer` between the dependencies in `package.json`. The library is on the heavy side and it might take some time to download everything.

```bash
pnpm i
```

Also, there is no screenshot of the stylish vector graphic hidden in the markup, explaining the additional lines in the `.gitignore` catalog.

```gitignore
*.jpg
*.webp
```

For the images you have to run the script.

```bash
node script.js
```

Or, continue with the rest of the article — it won't be long before you'll be able to reach the same end on your own.

## Setup

In a brand new folder create a `package.json` file. You can run `pnpm init` to set up the project, but again, this works to prove just how little you need. In this file add an empty object and install the one necessary library: `puppeteer`.

```bash
pnpm i -D puppeteer
```

Technically, you only need a script to execute the code. To have something to capture, however, create an `index.html` file. And at this juncture you can design whichever interface you might need. In my instance I had been working with SVG, so that most of the application relied on `<svg>` elements. And if you need a leg up, I took the time to string up [a test page](https://github.com/borntofrappe/utils/blob/main/puppeteer-screenshots/index.html).

You are free to explore the most disparate layouts, the most peculiar styles, but if I have a suggestion, it would be to add the following lines of css.

```css
body {
	margin: 0;
}
```

Ultimately, we are going to take a screenshot of the page, and the default margin on the `body` compromises the feat with additional whitespace.

In the file I also resolved to fix the size of the topmost container.

```css
div {
	inline-size: 600px;
	block-size: 400px;
}
```

You may not need the same directive, but I found the instruction helpful to match the size of the pictures themselves.

## Function

Add a JavaScript document with a memorable name, such as `script.js`. The goal is to execute the logic of the script with `node` and a succinct command.

```bash
node script.js
```

And it is in this file, finally, that we are able to develop the awaited feature.

Start by importing puppeteer.

```js
import puppeteer from 'puppeteer';
```

The library works asynchronously, meaning you can define an `async` function, where you elaborate the logic.

```js
const takeScreenshot = async () => {
	// ...
};
```

And then call the function in the same script.

```js
takeScreenshot();
```

But, are you familiar with self-executing functions? They are often labeled with an obnoxious acronym, but in short, they are anonymous functions which are executed immediately. Wrap the function between parenthesis and then proceed to call the instance immediately, with another set of round brackets.

```js
(() => {
	// ...
})();
```

There is a point to the detour. Such functions can be made asynchronous, with the inclusion of the specific keyword.

```js
(async () => {
	// ...
})();
```

With this in mind, you don't even have to go through the hassle of finding a name for the function, and are free to focus on the inner scope.

`puppeteer` offers many features, but ultimately, has a well defined workflow.

Start by launching an instance of the browser. Then, once you are done with your own logic, have the courtesy to terminate the object.

```js
const browser = await puppeteer.launch();

// ...

await browser.close();
```

Between the two calls you orchestrate complex operations, but if you try out the code immediately, you stumble on a couple of problems. The first one is easy to fix.

```text
SyntaxError: Cannot use import statement outside a module.
```

In the desire of being lean, `package.json` includes only the dependencies, but to use `import` statements, such as the one pulling the library at the top of the script, we need to add one more line and specify the `type` of `module`.

```json
{
	"dependencies": { "puppeteer": "^21.4.1" },
	"type": "module"
}
```

The second hiccup appears once you get around the blocking issue, and comes in the form of a deprecation warning.

```text
Puppeteer old Headless deprecation warning
```

The `launch` method accepts an object to customize the instance of Chrome. Among these options, the `headless` key lets you pick whether or not to actually open up the instance of the browser.

```js
const browser = await puppeteer.launch({ headless: false });
```

Set the value to `false` and you actually get to see puppeteer in action — it might be a treat to see the script do something with the browser on its own.

Omit the value, or set the value to `true`, and while the browser hides the interaction, it also props the mentioned warning.

In short, and [for the growth of the library](https://developer.chrome.com/articles/new-headless/), the developers are restructuring `puppeteer`. In doing so, the two modes are going to be developed separately, and the one you get to work when you set `headless` to `true` is being reframed into a new version. A version you can choose to try out setting the property with a specific string.

```js
const browser = await puppeteer.launch({ headless: 'new' });
```

All this to say, to marvel at the inner workings of the script, for the time being, set the key to `false`. To develop the full-fledged feature, prefer the `"new"` value.

To finally take a picture you need a subject, the `html` document opened in a new page. You can create one through the browser and a specific method. What is more, you are able to specify a size for the overall viewport — a most helpful option to frame the images.

```js
const page = await browser.newPage();
await page.setViewport({ width: 600, height: 400 });
```

With the object you can then navigate to any page on the web just by specifying a valid URL.

```js
const page = await browser.newPage();
await page.goto('https://borntofrappe.netlify.app/');
```

But to load a page locally, it is not enough to point to the file. You need to declare the absolute path, so that the library looks for the document in its proper location. Thankfully, a function found in the `node:path` module helps you achieve just that.

```js
import { resolve } from 'node:path';
```

Import the function and you are more than equipped to refer to the file, wherever it may reside.

```js
await page.goto(resolve('index.html'));
```

The path may have been elaborate, confusing at times, but there's just one more step to take a picture, one more instruction.

```js
await page.screenshot({ path: 'picture.png', type: 'png' });
```

With the `screenshot` method `puppeteer` takes a picture and saves, with the name and location specified in the `path` property. With the `type`, then, the library argues the format of the raster image. `jpeg`, `png`, you have a few options. And you might even be delighted to know that the method supports more modern formats as well, such as `webp`.

Want to take a couple of pictures instead of just one, to be pedantic and consider more types? Repeat the instruction with the chosen formats.

```js
await page.screenshot({ path: 'screenshot.jpeg', type: 'jpeg' });
await page.screenshot({ path: 'screenshot.webp', type: 'webp' });
```

The browser takes a picture, then proceeds to repeat the action with the new settings. And finally, as the instance is closed and the script ends, you have it, a satisfying conclusion. And two screenshots to show for the effort.
