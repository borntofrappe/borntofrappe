> **Be warned**: the project is a definite work in progress. Expect a lack of polish and a few error messages as I try my luck with the kit.
>
> 09th April 2021

# Hello World

This is my personal website. Built with [SvelteKit](https://github.com/sveltejs/kit), deployed through [Netlify](https://www.netlify.com/).

Here I try to jot down a note or two as I develop the website.

## Day 1 Reset <!-- One more time -->

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

Adapt for netlify

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

At the time and writing, and personally, the build fails by using a version older than the least required by the kit.
