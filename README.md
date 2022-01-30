# borntofrappe

![SvelteKit Badge](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/sveltekit-badge.svg)

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

`npm run build` creates a production version, but it's necessary to set up an [adapter](https://kit.svelte.dev/docs#adapters) first.

The application is meant to be deployed with [Netlify](https://www.netlify.com/), hence [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify).

```bash
npm i -D @sveltejs/adapter-netlify@next
```

Configure the adapter in `svelte.config.js`.

```js
import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter({
			split: false
		})

		// ...
	}
};
```

Add a config file `netlify.toml`.

```toml
[build]
  command = "npm run build"
  publish = "build"
```

Since you remove `adapter-auto` feel free to remove the package from the dependencies listed in `package.json`.

```diff
"devDependencies": {
-    "@sveltejs/adapter-auto": "next",
+    "@sveltejs/adapter-netlify": "^1.0.0-next.37",
```

Test the build locally.

```bash
npm run build
npm run preview
```

**Warning**: at least for my specific use case and at the time of writing Netlify relies on a version of Node that is not supported by the Kit. Update `netlify.toml` to require a satisfactory node version.

```toml
[context.production]
  environment = { NODE_VERSION = "14.18.1" }
```

`14.18.1` because it's the version I have locally.

**Warning**: at least for my specific use case and at the time of writing `npm run build` creates a `.netlify` folder. By experimenting with the setup it seems that:

1. the build on Netlify fails if you add the folder to `.gitignore` and you don't push the files to the public repository

2. the failure is rectified if you specify `esbuild` for the `node_bundler` option in the config file

   ```toml
   [functions]
     node_bundler = "esbuild"
   ```

## use:observe

The landing page leans on the `observe` action to observe several elements with the intersection observer API. The action adds a class of `observed` when the element is in the viewport. I highlight the feature because the CSS applied to the class would be normally ignored by the Svelte compiler, making the action pointless.

```css
section.observed::after {
	animation-play-state: running;
}
```

To have the compiler retain the CSS add a class of `.observed` with the class directive and a default `false` value.

```svelte
<section class:observed={false} use:observe>
```

The compiler keeps the property value pairs, the class is not present, but it will be through the `observe` action.

## Log routes

The `/log` route works as a playground to experiment with a blog-like setup, to learn how to generate pages on the basis of url parameters and how to process markdown syntax with `mdsvex`.

### markdown documents

Install `mdsvex`.

```bash
npm i --save-dev mdsvex
```

Update the config file so that the kit is able to:

1. consider markdown documents

   ```js
   const config = {
   	extensions: ['.svelte', '.md']
   };
   ```

   _Please note:_ for the log I am focused on markdown documents only. The inclusion of Svelte syntax in markdown, which `mdsvex` promotes with the `.svx` extension is discussed separately and in the context of the blog.

2. preprocess the documents with mdsvex

   ```js
   const config = {
   	extensions: ['.svelte', '.md'],
   	preprocess: mdsvex({ extensions: ['.md'] })
   };
   ```

This is technically enough to have the kit produce a page from a markdown document, say `routes/log/test-entry.md`. Visit `/log/test-entry` and the page renders the content. It's also possible to include the metadata in curly braces.

```md
---
title: Test entry
---

# {title}
```

### glob import

Instead of placing markdown documents in the `routes` folder the idea is to separate the files in a dedicated folder, like `src/log`. With this structure it is up to the kit to inject the content as needed.

In `routes/log/index.svelte` consider markdown documents with `import.meta.glob`, [a Vite feature](https://vitejs.dev/guide/features.html#glob-import).

```js
const log = import.meta.glob('/src/log/*.md');
console.log(log);
```

The import syntax returns an object describing the documents with a path and a function.

```js
{
  '/src/log/test-entry.md': Function(),
  '/src/log/123.md': Function(),
}
```

The function is what ultimately allows to transform the documents through mdsvex, to retrieve the metadata and actual content. Before extracting the information, however, the object is processed to iterate through the entries.

`Object.entries()` creates a 2D array.

```js
Object.entries(import.meta.glob('/src/log/*.md'));
```

With an array `.map` iterates through each pair considering the path and function. Vite calls the larger object `modules` so I decided to use the singular noun in place of something like `fn`, or more topically `day`.

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
title: Test entry
---
```

The `path` helps to build the slug for the individual entries. The approach is rather rudimentary, but it works by considering the name of the file without extension.

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

However, you need to wrap the entire `Object.entries` statement in a giant promise to wait for the execution of each module.

```js
const log = await Promise.all(Object.entries(/**/));
```

To this end the `load` function needs to be updated with the `async` keyword.

```js
export async function load() {}
```

Once the promises are all resolved, `log` describes an array of objects with `title`, `day` and `slug`. The data is passed through props and iterated through with an `#each` statement to create the list of entries.

Note that the slug is appended to the `/log/` string to redirect toward a page in the log.

```svelte
<a href="/log/{slug}">{title}</a>
```

**Update**: the logic of this section is moved to `/log/days.svelte`, as I chose to use the index page to show only the most recent entry.

### params

`[day].svelte` creates the pages for the individual entries. The square brackets help to capture the day from URL parameters.

```text
.../log/123
```

Retrieve the parameter from the `load` function.

```js
export async function load({ params }) {
	const { day } = params;
}
```

The idea is to here generate a page only if there is a matching entry in the log folder. A first approach I found working is to:

1. build the path the entry should have as returned by `import.meta.glob`

   ```js
   const path = `/src/log/${day}.md`;
   ```

2. check if the object returned by `import.meta.glob` has a matching key

   ```js
   const log = import.meta.glob('/src/log/*.md');

   if (log[path]) {
   }
   ```

If there is a match the script proceeds to consider the connected module. Aside from the metadata, helpful to introduce the entry with its title and number, the module provides the content through the `default` field.

```js
const { default: Module, metadata } = await log[path]();
```

I chose to capitalize the content since it is enough to include the variable as a component.

```svelte
<main>
	<Module />
</main>
```

If there is no path matching the value return an object with a `status` and `error` field. The object is enough to have the kit pass the information to the error page `__error.svelte`.

```js
return {
	status: 404,
	error: new Error(`There is no log for day ${day}`)
};
```

### Interactivity warning

There is a warning connected to using the module as-is.

```svelte
<Module />
```

The console suggests to use the special element `svelte:component` instead, describing how the first type is not fully interactive.

```svelte
<svelte:component this={Module} />
```

Ultimately I believe the first approach would work as well, given the static nature of the log routes.

### kit specificities

Considering the SvelteKit's features the components are updated to:

- prerender the routes

  ```html
  <script context="module">
  	export const prerender = true;
  </script>
  ```

- prefetch log entries

  ```svelte
  <a sveltekit:prefetch href="/log/{slug}">{title}</a>
  ```

- avoid hydrating log entries

  ```html
  <script context="module">
  	export const hydrate = false;
  </script>
  ```

  The documents are not interactive and it's enough to rely on the server-rendered version.

As a matter of preference the folder also includes `__layout.reset.svelte` to remove the layout file set at root level.

## Blog routes

Blog routes start out similarly to [log routes](#log-routes).

In `/blog/index.svelte` retrieve all the articles from the `/src/blog` folder. Initially this refers to markdown files, but the idea is to consider `.svx` syntax as well, so that it necessary to slightly modify the string passed to the `glob` method.

```diff
-'/src/blog/*.{md,svx}'
+'/src/blog/*.{md,svx}'
```

Since the extension is not known retrieve the slug removing either sequence.

```diff
-.replace('.md', '');
+.replace(/\.(md|svx)/, '');
```

To sort the articles consider the string included in the frontmatter as `datetime`, a value inspired by the HTML attribute with the same name. The idea is to create a date from this string destructuring its various components.

```js
const date = new Date(
	...metadata.datetime
		.split(/[-T:]/)
		.map((d, i) => (i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)))
);
```

_Please note:_ if you do not store the datetime as a string SvelteKit processes the value as a date.

```diff
datetime: 2022-01-17
+datetime: '2022-01-17'
```

In `/blog/[slug].svelte` repeat the process, but store the path as well.

```js
return {
	...metadata,
	slug,
	path
};
```

With this information extracting the content is a matter of

1. finding if an article exist evaluating the input slug

   ```js
   const article = articles.find(({ slug }) => slug === params.slug);
   ```

2. call once more `import.meta.glob`, but refer to the key with a matching path

   ```js
   const articles = import.meta.glob('/src/blog/*.{md,svx}');
   const { default: Module, metadata } = await articles[article.path]();
   ```

This is enough to consider markdown documents. For `.svx` documents, however you need to tweak the config file so that mdsvex processes the extension and SvelteKit doesn't ignore the files.

```js
const config = {
	preprocess: mdsvex({
		extensions: ['.md', '.svx']
	}),
	extensions: ['.svelte', '.md', '.svx']
};
```

### Nested articles

Ultimately I want to support a setup where you can write a markdown or `.svx` document in a dedicated folder.

```text
/blog
  /folder
    /article.md
```

Especially in the context of `svx` files the idea is to use the folder for all the components, all the sections devoted to an article.

```text
/blog
  /folder
    /Counter.svelte
    /article.svx
```

To support this setup update the syntax of the glob feature.

```diff
import.meta.glob('/src/blog/*.{md,svx}')
+import.meta.glob('/src/blog/**/*.{md,svx}')
```

What matters here, what is used as a slug, is the name of the article, and **not** the name of the folder.

### Hooks and session

`/routes/blog/index.svelte` and `/routes/blog/[slug].svelte` share much of the same logic in the initial script. With `hooks/index.js` the idea is to store the information in the `sessions` object so that it's possible to retrieve the articles as follows.

```js
export async function load({ session }) {
	const { articles } = session;
}
```

In the hook file `getSession` returns an object with the articles, including the `date` and `path` fields.

### Data structure

The articles can be stored in an object using the `slug` as a key. The solution makes it easier to retrieve a specific article in `[slug].svelte`

```diff
-const article = articles.find(({ slug }) => slug === params.slug);
+const article = articles[params.slug];
```

The drawback of this approach is that `index.svelte` needs the information back into a sorted array.

One way to combine both needs, having the data stored by keys and maintain the expected order, is to use a map. The article is retrieved with the `.get()` method.

```js
const article = articles.get(params.slug);
```

The articles to use in the index file are retrieved with the `.values()` method. Note that the value returned by a function is an interator.

```js
const articles = [...session.articles.values()];
```

## mdsvexConfig

### frontmatter

```js
const mdsvexConfig = {
	frontmatter: {
		marker: '-',
		type: 'yaml',
		parse: (frontmatter) =>
			Object.fromEntries(frontmatter.split('\n').map((line) => line.split(/: ?/, 2)))
	}
};
```

### rehypePlugins

rehype-slug

```bash
npm i -D rehype-slug
```

```js
import slug from 'rehype-slug';

const mdsvexConfig = {
	// ...,
	rehypePlugins: [slug]
};
```

rehype-autolink-headings

```bash
npm i -D rehype-autolink-headings
```

```js
import autolinkHeadings from 'rehype-autolink-headings';

const mdsvexConfig = {
	// ...,
	rehypePlugins: [slug, autolinkHeadings]
};
```

Default markup created _before_ the text in the headings.

```html
<a aria-hidden="true" tabindex="-1" href="#id"><span class="icon icon-link"></span></a>
```

Custom markup included _after_ the text.

```html
<a href="#id"><span class="visully-hidden">Permalink</span></a>
```

```js
const mdsvexConfig = {
	rehypePlugins: [slug, [autolinkHeadings, autolinkHeadingsConfig]]
};
```

### highlight

```bash
npm i -D shiki
```

```js
import { getHighlighter } from 'shiki';

async function highlighter(code, lang) {
	const shikiHighlighter = await getHighlighter({ theme: 'dracula-soft' });
	const html = escapeSvelte(shikiHighlighter.codeToHtml(code, { lang }));
	return `{@html \`${html}\`}`;
}
```

`html` is wrapped in a `<pre>` and `<code>` element. Code is highlighted with `<span>` elements.

```js
const mdsvexConfig = {
	// ...,
	highlight: {
		highlighter
	}
};
```

---

## Document icons

SvelteKit includes `static/favicon.png` as the default icon, referencing the asset directly in `src/app.html`

```html
<link rel="icon" href="/favicon.png" />
```

In place of this default, and taking inspiration from [this article](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) shared on [CSS-Tricks](https://css-tricks.com/how-to-favicon-in-2021/) I created an SVG icon to better fit the application. The icon describes a rocket pointing up and to the right. There's a reason why I landed on the rocket, but I'd rather yada-yada the issue for the time being.

In terms of actual design I like to draw my vector graphics in VSCode, so that the syntax is the end result of adjusting values by hand. I don't feel pressured to optimize the end result with SVGO and I'm more than satisfied just removing the unnecessary whitespace. The icon itself has a default fill and stroke color, but the values change for the dark color preference. The colors refer to the `hsl` codes from the global stylesheet, but are kept in hexadecimal format. Hex colors just take less characters to type.

Returning to the cited article, the markup references the vector graphic, but also `.ico` and `.png` variants.

```html
<link rel="icon" href="/icons/favicon.ico" sizes="any" />
<link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.json" />
```

The variants are created with GIMP. This relates to the `.ico` and `.png` files included in the snippet, but also the images referenced in the web manifest. `.png` images are optimized with [squoosh.app](https://squoosh.app/) compressing with OxiPNG and toggling the "Reduce palette" option with 64 colors. The three go from 47.8kb to 14.9kb. I know the browser should download only one, but the difference is noticeable.

## Webfonts

From [Google fonts](https://fonts.google.com/) I picked:

- JosefinSans, only in its bold variant

- Jost, considering the regular, bold and italic versions

The two are rather similar, with geometric features, but I like JosefinSans for headings, Jost for copy.

I don't load a `monospace` webfont and instead prefer to rely on the system font stack. Inconsolata is the preferred option, but it's used only if already available on the system.

```css
code {
	font-family: Inconsolata, Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
```

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

_Please note:_ the snippet is just a proof of concept and does not reflect the actual implementation of a different color scheme.

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

## Meta component

The `<Meta />` component includes a title, description and link for the canonical URL. For the title the information is extracted from the page store through `$app/store`, to resemble something akin to breadcrumb navigation for the current path. It is however possible to override the deault by passing a value through directly through props.

```svelte
<Meta title="borntofrappe" />
```

## Opengraph protocol

Among the meta attributes, the `<Meta />` component includes tags from the opengraph protocol. Among these tags the component refers to a single image for the `og:image>` and `twitter:image>` pair. Remember to point to the image through the absolute path.

```html
<meta property="twitter:image" content="https://borntofrappe.netlify.app/images/borntofrappe.png" />
```

Visually the image relies on the same icons and overall style I intend to use in the website

- the rocket icon at the center is the same icon used for the document

- the sun and moon icons represent the light and dark color scheme respectively

- the colors are picked from the custom properties in the global stylesheet

- the background pattern is similar to that ultimately included in the `body` and other specific selectors

## PWA

The website is set to have progressive web app features in terms of a more structure web app manifest and a service worker. The goal is to ultimately provide an offline experience more than a fully fledged mobile application.

Update the web app manifest with the following field:

- `display`, the appearance of the page when installed

- `start_url`, entry point of the application

The name, short name, theme and background color, not to mention the icons are already included for the meta tags.

Update the icons field to include a maskable version:

```json
{
	"src": "/icons/android-maskable-192x192.png",
	"sizes": "192x192",
	"type": "image/png",
	"purpose": "maskable"
}
```

The image itself is slightly different as the rocket needs to be smaller in size.

Update the meta tags to add the theme color in the `html` file.

It is actually possible to specify the theme with a media query.

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#1f2933" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#d6dfea" />
```

##

</details>
