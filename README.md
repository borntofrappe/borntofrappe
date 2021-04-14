# Hello World

This is my personal website. Built with [SvelteKit](https://github.com/sveltejs/kit), deployed through [Netlify](https://www.netlify.com/).

Here I try to log down a note or two as I develop the website.

> **Be warned**: the project is a definite work in progress. Expect a lack of polish and a few error messages as I try my luck with the kit.
>
> 08th April 2021

## Day 1: Reset <!-- One more time -->

### Up and Running

```bash
npm init svelte@next
```

Choices:

- directory not empty... continue!

- Typescript? no

- styling? CSS!

- eslint? why not

- prettier? why not

```bash
npm install
npm run dev
```

### Routes & Lib

In the `src` folder.

- `index.svelte`

  ```html
  <main>
  	<h1>This is the blog</h1>
  </main>
  ```

- `blog/index.svelte`

  ```html
  <main>
  	<h1>This is the blog</h1>
  </main>
  ```

In the `lib` folder: remove `Counter.svelte`, add `Nav.svelte`

```html
<nav>
	<a href="/">Home</a>
	<a href="/blog">Blog</a>
</nav>
```

Back in the `src` folder, `layout.svelte`:

```html
<script>
	import Nav from '$lib/Nav.svelte';
</script>

<nav />
<slot />
```

### Deploy

Update `favicon.ico`.

Include a title for both pages.

- homepage

  ```html
  <svelte:head>
  	<title>borntofrappe</title>
  </svelte:head>
  ```

- blog

  ```html
  <svelte:head>
  	<title>borntofrappe/blog</title>
  </svelte:head>
  ```

Adapt for netlify and through the matching adapter.

```bash
npm install @sveltejs/adapter-netlify@next --save-dev
```

At the time of writing use `@next` version.

In `svelte.config.js`

```js
const adapter = require('@sveltejs/adapter-netlify');

module.exports = {
	kit: {
		adapter: adapter()
		// ...
	}
};
```

`netlify.toml` configuration

```toml
[build]
  command = "npm run build"
  publish = "build/"
  functions = "functions/"
```

Be sure to have `/build` and `/functions` in `.gitignore`. Thankfully, they are already listed.

Specify node version.

```toml
[context.production]
  environment = { NODE_VERSION = "14.16.0" }
```

At the time of writing, and personally, the build fails by using a version older than the least required by the kit.

## Day 1.5: Tirer les lecons <!-- du passé -->

Following some research, and a bit of experimentation, I've found how to dynamically generate pages and retrieve the information from markdown files. More accurately, retrieve the information from `.svx` file, combining markdown syntax with the valid Svelte syntax. In this direction `mdsvex` is the package which allows to process the syntax.

_Helpful resources:_

- [mdsvex](https://github.com/pngwn/MDsveX) as the `.svx` preprocessor

- [Unofficial Documentation for @sveltejs/kit](https://github.com/GrygrFlzr/kit-docs) for a real-world example combining SvelteKit and mdesvex

- [documentation for glob.import](https://vitejs.dev/guide/features.html#glob-import), a feature from the vite tool

Past these links, the [SvelteKit docs](https://kit.svelte.dev/docs) and [one of the examples from the github repo](https://github.com/sveltejs/kit/tree/master/examples/svelte-kit-demo) give a solid basis for how to dynamically generate pages, leaning on endpoints (`.js` files), and how to include data from the server, leaning on the `hooks` folder.

### Blog

In `src/blog` add a series of blog posts with the `.svx` extension. In trying to experiment with the features from the library, these file include markdown syntax alongside Svelte syntax.

### svelte.config.js

It is immediately necessary to update the config file so that the kit is able to understand and process `.svx` syntax.

Update the `extensions` field with the desired extension.

```js
module.exports = {
	extensions: ['.svelte', '.svx']
};
```

Include a `preprocess` field with `mdsvex`. The field accept an array for multiple tools.

```js
const { mdsvex } = require('mdsvex');
const mdsvexConfig = require('./mdsvex.config.cjs');

module.exports = {
	preprocess: [mdsvex(mdsvexConfig)]
};
```

`mdsvex.config.cjs` provides an object to customize the mdsvex library.

### Session

In the `hooks` folder add `index.js` to provide data from the server. The idea is to update the `session` object with information regarding the posts in the blog folder.

```js
/* for each post
{
  title,
  description,
  slug
}
*/
```

`getSession` is useful to update the `session` object. `import.meta.glob` is helpful to retrieve an object with information for each post and how to import it. Refer to the cited page in the vite docs for more information.

`slug` can be retrieved directly from the name of the file, for instance removing the extension.

```js
const slug = filename.slice(0, -4);
```

A more solid approach would be to include a regular expression, but requires a discussion on how the `.svx` files are actually labeled. The unofficial docs, for instance, name the files with a prefix `001`, `002` and so forth; this prefix is removed from the eventual slug.

### Blog Index

In the `<script>` tag import the `session` object from the `$app/stores` module.

```html
<script>
	import { session } from '$app/stores';
</script>
```

`session` is actually a store, while the object is retrieved with the `$` dollar sign operator.

```html
<script>
	import { session } from '$app/stores';
	const posts = $session;
</script>
```

This is enough to have `posts` describe the array of posts. The idex proceeds by looping through the collection to display a series of links.

### Blog Posts

In `[slug].svelte` the `load` function provides the slug through `page.params.slug`. The value is helpful to check if there is a post in the blog folder with a matching slug.

Once again, import the posts through `import.meta.glob`. The step is repeated, but in order to create an object instead of an array. The keys of the object refer to the slug, while the value describe the render function to ultimately include in the markup.

If there is a post with the slug matching the value received from the `load` function:

```js
const post = posts[page.params.slug];
```

`post` refers to a promise which returns information regarding the individual post. In `hooks/index.js`, the promise was already useful to consider the frontmatter

```js
const { metadata } = await post();
```

Here the promise provides what essentially is a component through the `default` field.

```js
const { default: Module } = await post();
```

The component is passed through props, and eventually rendered in the markup.

```html
<svelte:head>
	<title>borntofrappe/blog/{slug}</title>
</svelte:head>

<Module />
```

### prerender

It is safe to prerender the pages created for the blog folder.

```html
<script context="module">
	export const prerender = true;
</script>
```

### 500 Headache

On a live website, I stumbled on a rather annoying issue when selecting some posts: the page would load correclty, but after a split second, the content would be replaced by a general error `500`, `undefined`. Almost by chance, I realized that the issue was with `.svx` files with a space in their title, like `Fillter Content.svx`. Removing the space, like `filler-content.svg` solves the problem.

I cannot fully explain the issue, but it might be connected with the adapter and/or Netlify. I presume this since the development version of the website doesn't prompt the same error.

## Day 2: playground

With solid foundations, the attention moves to the design of the website. I have a [playground repository](https://github.com/borntofrappe/playground) in which I intend to describe the style and build individual components. The goal is to then include the decisions made in said repo in the structure set up with SvelteKit.

## Day n: Catch-up

Following considerable progress in the playground repo, I set out to implement the changes to the production website.

- `<head>` of the document throug a `<Meta>` component

- `<Navigation>` component collecting the breadcrumb navigation and a color scheme toggle

  - update the color scheme on the `html` element. Retrieve the preference directly from `app.html`

  - consider a more descriptive name for the component introducing the page (top, welcome mat, intro...)

- blog page with `<Article>` component

  - include the date as a string to bypass the automatic conversion made on the frontmatter (`2021-04-10` would become `2021-04-10T00:00:00.000Z`)

- blog post stylesheet
