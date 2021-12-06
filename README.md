# borntofrappe

<svg aria-labelledby="kit-version" style="width: 136px; height: auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 70" width="500" height="70"><title id="kit-version">SvelteKit version 1.0.0-next.201</title><rect fill="#676778" width="500" height="70" rx="16" /><circle cy="35" cx="35" r="17" fill="#ff3e00" /><text fill="#f6fafd" x="70" textLength="70" y="40" dominant-baseline="middle" font-size="46" font-family="sans-serif" font-weight="bold">kit</text><rect fill="#ffece6" x="165" width="320" height="70" /><rect fill="#ffece6" rx="12" x="165" width="335" height="70" /><text aria-hidden="true" fill="#ff3e00" x="185" textLength="295" y="40" dominant-baseline="middle" font-size="46" font-family="sans-serif" font-weight="bold">1.0.0-next.201
</text><rect fill="none" stroke="#676778" stroke-width="3" x="1.5" y="1.5" width="497" height="67" rx="16" /></svg>

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e7278de-b395-4b4c-a54c-4c12fbd57fc9/deploy-status)](https://app.netlify.com/sites/borntofrappe/deploys)

<details>
<summary><strong>Development Notes</strong></summary>

## Install

```bash
npm init svelte@next
```

- Directory not empty. Continue? y

- Which Svelte app template? Skeleton project

- Use TypeScript? No

- Add ESLint for code linting? Yes

- Add Prettier for code formatting? Yes

```bash
npm install
```

## Develop

```bash
npm run dev
```

## Publish

`npm run build` creates a production version, but it's first necessary to set up an [adapter](https://kit.svelte.dev/docs#adapters).

The application is meant to be deployed with [Netlify](https://www.netlify.com/), hence [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify).

```bash
npm i -D @sveltejs/adapter-netlify@next
```

Update `svelte.config.js` to rely on the adapter.

```js
import adapter from '@sveltejs/adapter-netlify';
```

Add a `netlify.toml` config file.

```toml
[build]
  command = "npm run build"
  publish = "build"
```

## Debug - failed build

> Failed during stage `building site`: Build script returned non-zero exit code: 2

Among the warnings in the "Deploy log"

> npm WARN notsup Unsupported engine for @sveltejs/kit@1.0.0-next.201: wanted: {"node":">=14.13"} (current: {"node":"10.24.1","npm":"6.14.12"})

Update `netlify.toml` to require a satisfactory node version.

```toml
[context.production]
  environment = { NODE_VERSION = "14.18.1" }
```

`14.18.1` because it's the version I use to develop the website.

## Debug - failing function

The site is built but the URL returns the following message

> {"errorType":"Runtime.UserCodeSyntaxError","errorMessage":"SyntaxError: Unexpected token '.'",
>
> ...continues

In the console

> Failed to load resource: the server responded with a status of 502 ()

In the Netlify app and the deploy log there is no warning, but under "Publish deploy" (I wanted to look at the built version) you find the following

> Production: master@5151cbf.
>
> Deployed Functions

Exploring _functions_ you find a `__render` function which produces the error message

> {"errorType":"Runtime.UserCodeSyntaxError","errorMessage":"SyntaxError: Unexpected token

Scavenging the Netlify [docs](https://docs.netlify.com/configure-builds/file-based-configuration/#functions) and [forum](https://answers.netlify.com/t/build-works-locally-but-not-in-netlify/45438/4) I found
a fix.

Update `netlify.toml` and the `[functions]` field.

```toml
[functions]
  node_bundler = "esbuild"
```

## error

Following the suggestion from [the kit's docs](https://kit.svelte.dev/docs#layouts-error-pages) `__error.svelte` implements a custom error page.

The script at the top of the page returns the error and status code, extracted from the `load` function as documented.

```js
export function load({ error, status }) {}
```

## external

The anchor link elements making up the `<SkipToContent>` component has a `rel` attribute of `external`. [The value](https://kit.svelte.dev/docs#anchor-options-rel-external) is necessary to bypass the kit and rely on browser navigation instead.

## use:observe

`use:observe` is an action to have animation run in the viewport, considering the intersection observer API. The function is defined in `lib/utils.js` and receives a node, on which the idea is to add and remove a class of `.observed`.

Note that the styling for this class would be normally stripped out by the Svelte compiler.

```css
section.observed::after {
	animation-play-state: running;
}
```

Unless there is a class of `.observed` in the existing component. To work around this the element being observed technically defines the class, but with a false value.

```svelte
<section class:observed={false} use:observe>
```

The compiler retains the property value pairs, the class is not present and is included through the `observe` action.

## Log

`/log` works as a playground to experiment with a blog-like setup, to learn how to process markdown syntax and generate pages as needed.

### mdsvex

`mdsvex` processes markdown documents.

```bash
npm i --save-dev mdsvex
```

Following [the docs](https://mdsvex.pngwn.io/docs) update the config file.

```js
import { mdsvex } from 'mdsvex';
```

The config object includes two additional fields so that the kit is able to:

1. consider markdown documents

   ```js
   const config = {
   	extensions: ['.svelte', '.md']
   };
   ```

   Svelte-in-markdown syntax, touted by mdsvex as `.svx` will be discussed at a later stage and in the context of the blog.

2. preprocess the documents with mdsvex

   ```js
   const config = {
   	extensions: ['.svelte', '.md'],
   	preprocess: mdsvex({ extensions: ['.md'] })
   };
   ```

This is technically enough to have the kit produce a page from a markdown document, say `routes/log/test-entry.md`.

### glob

Instead of placing the documents the `routes` folder the files are separated in a dedicated location, `src/log`, with the goal of having the kit inject the content as needed.

In `routes/log/index.svelte` consider markdown documents with `import.meta.glob`, a feature made available [by Vite](https://vitejs.dev/guide/features.html#glob-import).

```js
const log = import.meta.glob('/src/log/*.md');
console.log(log);
```

The import syntax returns an object describing the documents with a path and a function.

```js
{
  '/src/log/up-and-running.md': Function(),
  '/src/log/a-star-is-rotated.md': Function(),
}
```

The function is what ultimately allows to transform the documents, through mdsvex, to retrieve the metadata and actual content. Before extracting the information, however, the object is processed to iterate through the entries.

`Object.entries()` creates a 2D array.

```js
Object.entries(import.meta.glob('/src/log/*.md'));
```

With an array `.map` iterates through each pair considering the path and function. Vite calls the larger object `modules` so I decided to use the singular noun in place of something like `fn`, or more topically `entry`.

```js
.map(async ([path, module]) => {

})
```

Note the `async` keyword is necessary since behind the scenes `module` is actually a promise.

Once awaited, the module provides an object with metadata.

```js
.map(async ([path, module]) => {
  const { metadata } = await module();
})
```

In this instance metadata describes the key value pairs retrieved from the YAML syntax at the top of the documents.

```md
---
title: Up and running
entry: 1
---
```

The path helps to build the slug for the individual entries. The approach is rather rudimentary, but it works by considering the name of the file without extension.

```js
const slug = path.split('/').pop().replace('.md', '');
```

Metadata and slug are enough to build the index of entries.

```js
return {
	...metadata,
	slug
};
```

Howrever, you need to wrap the entire `Object.entries` statement in a giant promise to wait for the execution of each module.

```js
const log = await Promise.all(Object.entries(/**/));
```

To this end the `load` function needs to be updated with the `async` keyword.

```js
export async function load() {}
```

Once the promise is all resolved, `log` describes an array of objects with `title`, `entry` and `slug`. The data is passed through props and iterated through with an `#each` statement to create the list of entries.

Note that the slug is appended to the `/log/` string to redirect toward a page in the log.

```svelte
<a href="/log/{slug}">{title}</a>
```

**Update**: the logic of this section is moved to `/log/entries.svelte`, as I chose to use the index page to show only the most recent entry.

### slug

`[slug].svelte` is responsible for creating the actual page for the individual entries. The square brackets help to capture the slug from the URL parameters.

```text
.../log/up-and-running
```

The value is retrieved from the load function.

```js
export async function load({ page }) {
	const { slug } = page.params;
}
```

The idea is to here generate a page only if there is a matching entry in the log folder. A first approach I found working is to:

1. build the path the entry should have as returned by `import.meta.glob`

   ```js
   const path = `/src/log/${slug}.md`;
   ```

2. check if `import.meta.glob` has a matching key

   ```js
   const log = import.meta.glob('/src/log/*.md');

   if (log[path]) {
   }
   ```

If there is a path the script proceeds to resolve the connected module. Aside from the metadata, helpful to introduce the entry with its title and number, the page extracts the content from the `default` field.

```js
const { default: Entry, metadata } = await log[path]();
```

I chose to capitalize the content since it is enough to include the variable as a component.

```svelte
<main id="content">
	<Entry />
</main>
```

If there is no path matching the value it is enough to return an object with a `status` and `error` field to have the kit refer to the error page `__error.svelte`.

```js
return {
	status: 404,
	error: new Error(`No entry found for '${slug}'`)
};
```

### warning

There is a warning connected to using the module as-is.

```svelte
<Entry />
```

The console suggests to use the special element `svelte:component` instead, describing how the first type is not fully interactive.

```svelte
<svelte:component this={Entry} />
```

I will research the topic, but given the static nature of the content I am satisfied with the current solution.

### prerender

Log routes are prerendered.

```html
<script context="module">
	export const prerender = true;
</script>
```

### prefetch

Anchor link elements pointing toward the log routes prefetch the information.

```svelte
<a sveltekit:prefetch href="/log/{slug}">{title}</a>
```

I tested the feature with the prerendered page and the attribute still works to perform the request before the actual click is registered.

### hydrate

The page devoted to listing all entries, the page(s) devoted to the individual entries are not interactive and disable hydration of the server-rendered version.

```html
<script context="module">
	export const hydrate = false;
</script>
```

`/log/index.svelte` does not include the same boolean since the page relies on a script, on JavaScript, to run the animation.

### layout reset

As a matter of preference I chose not to rely on the layout file for the components in `routes/log`. The reset happens through `__layout.reset.svelte`.

## Meta

The `<Meta />` component includes a title, description and link for the canonical URL. For the title the information is extracted from the page store through `$app/store`, to resemble something akin to breadcrumb navigation for the current path. It is however possible to override the deault by passing a value through directly through props.

```svelte
<Meta title="borntofrappe" />
```

</details>

<details>
<summary><strong>Design Notes</strong></summary>

## Playground

I'm exploring the design of several parts of the website in [a separate repository](https://github.com/borntofrappe/playground/borntofrappe).

## Document icons

SvelteKit includes `static/favicon.png` as the default icon, referencing the asset directly in `src/app.html`

```html
<link rel="icon" href="/favicon.png" />
```

In place of this default, and taking inspiration from [this article](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) shared on [CSS-Tricks](https://css-tricks.com/how-to-favicon-in-2021/) I created an SVG icon to better fit the application. The icon describes a rocket pointing up and to the right. There's a reason why I landed on the rocket, but I'd rather yada-yada the issue for the time being.

In terms of actual design I like to draw my vector graphics in VSCode, so that the syntax is the end result of adjusting values by hand. I don't feel pressured to optimize the end result with SVGO and I'm more than satisfied just removing the unnecessary whitespace. The icon itself has a default stroke color, but changes for a dark color preference. The colors refer to the following `hsl` codes:

- hsl(210, 24%, 16%)

- hsl(213, 32%, 88%)

Hex colors just take less characters to type.

Returning to the cited article, the markup references the vector graphic, but also `.ico` and `.png` variants.

```html
<link rel="icon" href="/icons/favicon.ico" sizes="any" />
<link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
```

The variants are created with GIMP. This relates to the `.ico` and `.png` files included in the snippet, but also the two images referenced in the web manifest. `.png` images are optimized with [squoosh.app](https://squoosh.app/) compressing with OxiPNG and toggling the "Reduce palette" option with 64 colors. The three go from 37.8kb to 12.5kb. I know the browser only needs one, but the difference is noticeable.

## Webfonts

From [Google fonts](https://fonts.google.com/) I picked:

- JosefinSans, only in its bold variant

- Jost, considering the regular, bold and italic versions

The two are rather similar, with geometric features, but I like JosefinSans for headings, Jost for copy.

I don't load a `monospace` webfont and instead prefer to rely on the system font stack. Inconsolata is the preferred option, but it's used only if already available on the system.

With [fontsquirrel](https://www.fontsquirrel.com/tools/webfont-generator) I created the `woff` and `woff2` file formats, changing a few options in the process:

- keep existing true type hinting

- do not fix GASP table

- no adjustment for vertical metrics

- do not fix missing glyphs, either spaces or hyphens

I don't like the idea that the generator meddles with the typeface, especially considering the vertical measure.

The fonts are placed in the `static` folder and loaded in `app.html` following the one-step loading strategy explained in [a comprehensive guide to webfonts](https://www.zachleat.com/web/comprehensive-webfonts/).

In `app.html` a `<style>` tag associates the fonts with the class `.webfonts`, relying by default on the system font stack.

In terms of JavaScript the `<script/>` tag loads the fonts with the [font loading API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API).

## Global stylesheet

`__layout.svelte` includes the property value pairs from `app.css`.

```svelte
import '../app.css';
```

The stylesheet implements several systems for color, sizes and even transitions through custom properties.

### Colors

Following the suggestion from [refactoring UI](https://www.refactoringui.com/previews/building-your-color-palette) the `:root` selector defines custom properties for different sets of colors. Each set has ten combinations of `hsl` values with decreasing brightness.

```css
:root {
	--cool-grey-000: hsl(216, 33%, 97%);
	--cool-grey-100: hsl(214, 15%, 91%);
	/*  */
	--cool-grey-800: hsl(209, 20%, 25%);
	--cool-grey-900: hsl(210, 24%, 16%);
}
```

From this starting point the `body` selector introduces the properties actually used throughout the website.

```css
body {
	--copy-color: var(--cool-grey-800);
	--heading-color: var(--cool-grey-900);
}
```

This makes it easier to implement an alternative color palette, say for a dark theme.

```css
body.dark {
	--copy-color: var(--blue-grey-200);
	--heading-color: var(--blue-grey-100);
}
```

The properties cascade down to benefiting elements.

_Please note:_ the snippet is just a proof-of-concept and does not reflect the actual implementation of a different color scheme.

### Sizes

With `--size` I include steps from the [major third](https://www.modularscale.com/?1&em&1.25) scale.

```css
:root {
	--size-300: 0.8rem;
	--size-400: 1rem;
}
```

### Easings

With `--ease-*` I include bezier functions I intend to use over CSS keywords like `ease-in-out`. There's also an associated custom property describing a default duration for transitions, `transition--duration`.

### CSS reset

In `app.css` I follow most of the guidance from [a modern CSS reset](https://piccalil.li/blog/a-modern-css-reset/). Where I slightly differ:

- no reset for the margin on `blockquote`, `dl` and `dd` elements, since I don't mind the browser default and I'd rather design the elements on a need-to-have basis

- no reset on lists, again relying on defaults and overriding if need be

- no smooth scroll, as I don't feel like the application really needs smooth scrolling, at least at the time of writing

- no `min-height` on the body

- `line-height` on paragraph elements, not the body as one time I found the selector messed with the spacing too muc

- `display: block` on images, pictures, but also `<svg>` elements, something I repeat over and over when styling vector graphics

- no reset on animations for the reduced motion preference. Not just because I'm not a fan of the `!important` keyword, but also because I consider the preference where I design the animations

### Fallbacks

Each time I rely on a custom property I repeat the declaration to provide a fallback. The first pairing works for browsers which do not support custom properties.

```css
body {
	color: hsl(209, 20%, 25%);
	color: var(--copy-color);
}
```

I chose not to, but it is possible to repeat the value inside of the `var()` function. This works for browsers that do support custom properties, but are not able to find the custom property itself.

```css
body {
	color: var(--copy-color, hsl(209, 20%, 25%));
}
```

Say `--copy-color` is not defined, without this fallback the browser would revert to the initial value.

## Opengraph image

Among the meta attributes, the `<Meta />` component refers to a single image for the opengraph protocol. It seems it is not enough to describe the relative path to the resource, however, and it is necessary to refer to the actual domain.

```html
<meta property="twitter:image" content="https://borntofrappe.netlify.app/images/borntofrappe.png" />
```

Visually the image relies on the same icons and overall style I intend to use in the website

- the rocket icon at the center is the same icon used for the document

- the sun and moon icons represent the light and dark color scheme respectively

- the colors are picked from the custom properties in the global stylesheet

- the background pattern is similar to that ultimately included in the `body` and other specific selectors

##

</details>
