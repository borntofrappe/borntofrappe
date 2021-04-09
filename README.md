> **Be warned**: the project is a definite work in progress. Expect a lack of polish and a few error messages as I try my luck with the kit.
>
> 09th April 2021

# Hello World

This is my personal website. Built with [SvelteKit](https://github.com/sveltejs/kit), deployed through [Netlify](https://www.netlify.com/).

Here I try to jot down a note or two as I develop the website.

## Day 1 <!-- Reset -->

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
