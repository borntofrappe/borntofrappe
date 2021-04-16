[![borntofrappe with SvelteKit and Netlify](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/banner.svg)](http://borntofrappe.netlify.app/)

[![sveltekit version](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/sveltekit-badge.svg)](https://github.com/sveltejs/kit) [![Netlify Status](https://api.netlify.com/api/v1/badges/4e7278de-b395-4b4c-a54c-4c12fbd57fc9/deploy-status)](https://app.netlify.com/sites/borntofrappe/deploys)

# Hello World

This is my personal website. Built with [SvelteKit](https://github.com/sveltejs/kit), deployed through [Netlify](https://www.netlify.com/).

> **Be warned**: the project is a definite work in progress. Expect a lack of polish and a few error messages as I try my luck with the kit.
>
> 08th April 2021

## Dev Notes

A note or two on a few things I'd like to remember.

### Init

```bash
npm init svelte@next
```

Choices:

- directory not empty... continue!

- Typescript? no

- styling? CSS!

- eslint? why not

- prettier? why not

### Deploy

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

Add `/build` and `/functions` in `.gitignore`. Thankfully, they are already listed.

Specify node version.

```toml
[context.production]
  environment = { NODE_VERSION = "14.16.0" }
```

At the time of writing, and personally, the build fails by using a version older than the least required by the kit.

### mdsvex

In `src/blog` add a series of blog posts with the `.svx` extension. In trying to experiment with the features from the library, these file include markdown syntax alongside Svelte syntax.

Update the config file so that the kit is able to understand and process `.svx` syntax.

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

### session

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

### index

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

### slug

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
const { metadata, default: Module } = await post();
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

### mdsvex config

`rehype` modules to:

1. specify a unique `id` for the headings

2. add a permalink to the headings

`shiki` module to:

1. highlight syntax

2. format code snippet

For shiki it is necessary to include the code in a html block, `{@html }`, as follows:

```svelte
{@html \`<pre><code>${code}</code></pre>\`}
```

The issue is with how mdsvex and Svelte interpret brackets `{}` in code snippets.

### color-scheme

Include a `<script>` tag in the `<head>` of `app.html` so that the page includes the color scheme on the `html` element.

```html
<head>
	<script>
		try {
			const prefersColorScheme = matchMedia('(prefers-color-scheme: dark)');
			const colorScheme = localStorage.getItem('color-scheme');
		}
	</script>
</head>
```

This works to avoid the potential flash of style resulting from loading the page and then applying the color scheme.

### !important

The `!important` suffix in the styles for the homepage is necessary due to the `:global` selector being less specific than the previous statement.

```css
section#getting-started::after {
	content: '';
}
:global(html:not([data-preference]) section#getting-started::after) {
	content: url('') !important;
}
```

This is actually something relevant to every use of the `:global` syntax to have the dark preference influence the appearance of the pages.

Consider a rewrite, perhaps moving any and all declarations depending on the color preference in the global stylesheet.

### class:observed

A workaround to retain the styling for the class of `.observed`, even if the class is not present in the starting DOM tree.

```html
<header bind:this="{hero}" class:observed="{false}"></header>
```

The class is added conditionally to the `<header>` element being observed through the intersection observer API.

Consider a rewrite acknowledging [this issue](https://github.com/sveltejs/svelte/issues/1594#issuecomment-405269805).
