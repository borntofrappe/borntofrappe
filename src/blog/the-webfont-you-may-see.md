---
title: The webfont you may see
date: 2023-01-12 10:21:20
description: This website relies on a webfont. Here a few notes on how, just in case you fancy a change.
---

You may spot this website has a preference for [Mulish](https://fonts.google.com/specimen/Mulish), a sans-serif font which I believe to be easy on the eyes. It has a rather low x-height and wide characters, to compensate for the verbose sentences which are bound to populate every page. Moreover, letters have soft curvatures, to match the comfortable, welcoming tone the application tries to instill.

At the time of writing.

I tend to like new beginnings. Definitely not tomorrow, maybe not this year, but it will definitely happen that some day I might indulge in a change in style, a new coat of paint and a brand new character set.

Hence, this post, trying to detail as clearly as possible how to get from zero — you have chosen a font — to one — you use the font in a web application.

A lot of research has gone in the process, and these notes might save my future self, and perhaps somebody else as well, a few hours of time.

If you need a refresher, consider [_Developing a robust font loading strategy for CSS-Tricks_](https://www.zachleat.com/web/css-tricks-web-fonts/) from [Zach Leatherman](https://www.zachleat.com) as the be-all and end-all. You will be thoroughly entertained for a good afternoon.

## Four faces

Mulish shows itself in several weights and styles, from extra light 200 to "extra black" 1000 italic. For the complexity of the project, however, four variants are more than enough: regular, italic, extra bold and extra bold italic.

Why extra bold? A personal choice. I simply worry the bold variant might not be chunky enough to contrast the surrounding 400 weight.

## One type extension

OTF, TTF, WOFF, WOFF2... You finally pick a font and are swarmed with choices in terms of font file. The WOFF pairing seems to be the most solid choice, but with the intent of using the smallest set possible, I'm more than happy with the more advanced, second variant. [Support for WOFF2](https://web.dev/font-best-practices/#use-woff2) justifies the solitary choice.

Google Fonts gives you `.ttf` files in the unzipped folder. There are online environments like [Font Squirrel's Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator), but the command line and a few Python libraries — detailed in [the reputed article](https://www.zachleat.com/web/css-tricks-web-fonts/) — provide more fine-grained control.

As a setup:

1. install [Python](https://www.python.org/downloads/) (be sure to you tick the option to add python to PATH)

2. open a terminal and use `pip` to install [`fonttools`](https://github.com/fonttools/fonttools)

   ```bash
   pip install fonttools
   ```

3. keep the terminal open and use `pip` once more to install [`brotli`](https://github.com/google/brotli)

   ```bash
   pip install brotli
   ```

   You need the library to work with the `.woff` extensions and ensure the upcoming `pyftsubset` utility doesn't crash with an error.

## Subsets with HTML and CSS

Starting from the `.ttf` file create a subset in `.woff2` format.

```bash
pyftsubset "Mulish-Regular.ttf" --output-file="Mulish-Regular-kern-latin.woff2" --flavor=woff2 --layout-features=locl,mark,mkmk,kern --no-hinting --desubroutinize --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
```

I decided to limit layout features to those [_wakamaifondue_](https://wakamaifondue.com/) describes as "_Required layout features_", which don't need further configuration with CSS.

Preload the asset in the `<head>` of the document.

```html
<link
	rel="preload"
	href="Mulish-Regular-kern-latin.woff2"
	as="font"
	type="font/woff2"
	crossorigin
/>
```

The MDN docs explain the different key-value pairs, among which the necessary [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload#cors-enabled_fetches) attribute.

Always in the head of the document, add `<style>` tags to define a font rule.

```css
@font-face {
	font-family: Mulish;
	src: url(Mulish-Regular-kern-latin.woff2) format('woff2');
	font-display: swap;
}
```

The [`font-display`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) option means the browser doesn't wait to render the text and swaps in the webfont when, if, available.

Following the rule, set the `font-family` property with a few fallback values.

```css
body {
	font-family: Mulish, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica
			neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
}
```

The options are taken directly from [systemfontstack](https://systemfontstack.com/). Pasted to the letter.

As the browser reaches the declaration, it proceeds to download the asset and shows the desired set. Quite a tour de force.

Ultimately, I repeated the steps for the extra bold weight, but stopped there, choosing to preload just the two files.

## Features with JavaScript

There is a case for stopping with the subset. As a limited application this website doesn't need much more than the reduced set of characters. I am, however , learning French. I also live in southern Europe, at the intersection of three to four considerably different cultures. The number of languages grows with every border you cross and the extended latin set might come in handy.

Real italics are also missing, which admittedly should have been the first reason to continue.

Create the more "featured" font file — this time for all four faces.

```python
pyftsubset "Mulish-Regular.ttf" --output-file="Mulish-Regular-hint-features.woff2" --flavor=woff2 --layout-features=locl,mark,mkmk,kern --unicodes=U+0-10FFFF
```

Past the `<link>` element, past the `<style>` tags, wrap the logic in `<script>` tags and a function which calls itself, a self-invoking function.

```html
<script>
	(() => {
		// ...
	})();
</script>
```

As per the [CSS Font Loading API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API) you need to:

1. create a font as an instance of `FontFace`

   ```js
   const regular = new FontFace(
   	'Mulish',
   	"url(/fonts/Mulish-Regular-hint-features.woff2) format('woff2')"
   );
   ```

   The constructor takes the name of the font, and the location of the actual file. Use the third, optional, argument for options such as the weight for the bolder variant (or again the italic style).

   ```js
   const extraBold = new FontFace(
   	'Mulish',
   	"url(/fonts/Mulish-ExtraBold-hint-features.woff2) format('woff2')",
   	{ weight: '700' }
   );
   ```

   Why, you might spot a weight of 700 even though the file references the 800 font. Keen eyes.

   The assumption is that the browser looks for the 700 value when the `font-weight` property is set to `bold`. Since I do not load the specific weight, since I am bound to forget and explicitly reference the number in the stylesheet, I'm willing to confound the browser and pretend to load the slimmer variant.

   800 is the new 700.

2. load the font

   ```js
   regular.load();
   ```

   The function returns a promise, so you can eventually use the font once the file becomes available.

   ```js
   regular.load().then((font) => {});
   ```

   Ultimately, I prefer the `async` `await` syntax over chaining a `.then()` method, but either solution works.

   ```diff
   -regular.load().then((font) => {});
   +const font = await regular.load()
   ```

   Just remember to make the invoking function an async function.

   ```js
   (async () => {
   	// ...
   })();
   ```

3. add the font to the document

   ```js
   document.fonts.add(font);
   ```

As you have multiple files, you ultimately gather every promise in a larger `Promise.all()`, but the logic remains the same.

Create.

```js
const italic = new FontFace(
	'Mulish',
	"url(/fonts/Mulish-Italic-hint-features.woff2) format('woff2')",
	{ style: 'italic' }
);
// extraBoldItalic
```

Load.

```js
const fonts = await Promise.all([
	regular.load(),
	italic.load(),
	extraBold.load(),
	extraBoldItalic.load()
]);
```

Add.

```js
fonts.forEach((font) => {
	document.fonts.add(font);
});
```

JavaScript being the most brittle of the three technologies, you may want to test if the `document.fonts` interface does exist, and terminate the function early if need be.

```js
if (!'fonts' in document) return;
```

And that's close to it.

## Cache with a service worker

You may visit the website more than once, and I'm honored just by the supposition. In this instance it is possible to improve performance with a service worker.

Personally, I approach the topic rather tentatively. You have a script which manages the communication between client and server, the delicate process of request and response. Mess up something and you break the entire application. Care for an example? Let's say you want to return a response, a regular response through the fetch API.

```js
const response = await fetch(event.reqeust);
event.respondWith(response);
```

Further, you don't realize that you actually have a typo.

```diff
-fetch(event.reqeust)
+fetch(event.request)
```

Well, before you find the quick fix you end up with a completely unusable website. Every request fails as the browser becomes more befuddled than you, and every page prompts the same cruel message: "_Failed to load resource_". Worse yet, you need a new service worker altogether. _And_, any existing window, any open tab would continue to serve the unservable app.

Would never happen, right?

Just use TypeScript? Thank you for the input, I hope to soon join you in the comfy realm of strict typing and helpful error messages. Unfortunately, it is beside the point.

The point being you should be careful with a service worker, evaluate the risks and rewards.

Once again the limited scope of the website helps to make a decision. In trying to optimize _only_ the fonts, you want to:

1. store the assets in the browser cache

2. consider if the incoming request is a request to the cached files

In this very last instance you do not rely on the `fetch` function, and return the files directly.

Simple? Never, but at least worth a try.

Most graciously, [SvelteKit](https://kit.svelte.dev/docs/service-workers) takes care of registering the script for the service worker, so we can focus on the events assuming `self` describes the worker itself.

### Add to cache

Consider the static files SvelteKit provides with the `$service-worker` module.

```js
import { files } from '$service-worker';
```

Moreover, filter only those documents ending with the WOFF2 extension.

```js
const fontFiles = files.filter((file) => file.endsWith('.woff2'));
```

As the service worker is installed, call a function to cache the files.

```js
self.addEventListener('install', (event) => {
	const addFilesToCache = async () => {};

	event.waitUntil(addFilesToCache());
});
```

In the body of the async function add the files to a cache. By name.

```js
const cache = await caches.open(cacheFontFiles);
await cache.addAll(fontFiles);
```

Having a variable in place of a literal string just helps to refer to the same value throughout the script.

```js
const cacheFontFiles = 'cache-font-files';
```

### Possibly read from cache

Following the `fetch` event, call an async function to respond to the incoming request.

```js
self.addEventListener('fetch', (e) => {
	const respond = async () => {};

	e.respondWith(respond());
});
```

You need to evaluate the request's URL, specifically if the path matches one of the resources listed between the cached assets.

```js
const { pathname } = new URL(e.request.url);

if (fontFiles.includes(pathname)) {
	// a font file!
}
```

In this instance open the cache and return the respective resource.

```js
const cache = await caches.open(cacheFontFiles);
return cache.match(e.request);
```

Otherwise, proceed with the same `fetch` call described earlier.

```js
const response = await fetch(e.request);
return response;
```

Just remember to double-check the spelling.

### Possibly delete old caches

You could stop and consider only the `install` and `fetch` event, but you'd fall short of the intent of this article — having a process to load and serve a font today, a different asset later on.

To cache new files you change the name of the cache.

```js
const cacheFontFiles = 'cache-font-files-v0';
```

As a new service worker is registered, the cache is populated per the `install` event.

As the service work is activated, you start to load the different fonts, and have a chance to be a good denizen of the web and delete the previous, outdated resources.

Listen to the `activate` event.

```js
self.addEventListener('activate', (e) => {
	const deleteOldCaches = async () => {};

	e.waitUntil(deleteOldCaches());
});
```

In the body of the function identify the caches by key, by name.

```js
const keys = await caches.keys();
```

Delete all the caches which do not match the updated string literal.

```js
for (const key of keys) {
	if (key !== cacheFontFiles) {
		await caches.delete(key);
	}
}
```

And that's really, really, currently it.
