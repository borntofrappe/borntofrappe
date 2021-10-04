![borntofrappe](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/banner.svg)

_What's this?_ my personal website! There's bound to be a homepage and, fingers crossed, a blog too. Past that, [I'm open to suggestions](https://github.com/borntofrappe/borntofrappe/issues/new?labels=suggestion).

<details>
<summary>
<strong>Development notes</strong>
</summary>

Following [the documentation](https://kit.svelte.dev/docs) with excessive detail.

## Getting started

> dated September 21st 2021

```bash
npm init svelte@next
```

Running the code prompts a series of questions to scaffold the project

- Directory not empty. Continue? **y**

- Which Svelte app template? **Skeleton project**

- Use TypeScript? **No**

- Add ESLint for code linting? **Yes**

- Add Prettier for code formatting? **Yes**

The command line highlights a few steps to continue

1. `npm install`

2. optional commit (this is already a git & Github repository)

3. `npm run dev -- --open`

The existing `README.md` is replaced with the documentation for [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), but the markup is one `Ctrl-Z` key away. The documentation does provide a few helpful notes though:

- to create a production version you need to first install an [_adapter_](https://kit.svelte.dev/docs#adapters). Afterwards:

  ```bash
  npm run build
  ```

- to preview the built application:

  ```bash
  npm run preview
  ```

## Up and running

> dated September 22nd 2021

I intend to deploy the website through Netlify, and the relevant adapter is [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify).

```bash
npm i -D @sveltejs/adapter-netlify@next
```

From the Github repo, the relevant configuration happens in `svelte.config.js`.

Import:

```js
import adapter from '@sveltejs/adapter-netlify';
```

Add the adapter to the field describing the `kit`:

```js
export default {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};
```

The project's `README` highlights a couple of warnings, among which one describing the node version.

> Netlify defaults to Node 12.16. SvelteKit requires Node v12.20 to build.

Among the [proposed options](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript), I decided to require a valid node version with a [`netlify.toml`](https://docs.netlify.com/configure-builds/file-based-configuration/) config file.

```toml
[context.production]
  environment = { NODE_VERSION = "14.16.0" }
```

The config file is also required to specify which command to run on build.

```toml
[build]
  command = "npm run build"
  publish = "build/"
```

With this setup, build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

Directing Netlify to the Github repo should then be enough to have the project live.

## More than a bump

> dated October 2nd 2021

```bash
npm update
```

Svelte, but most prominently the kit and the adapter are updated with the most recent commits.

The design of the website is updated in the markup and stylesheet.

## Blog

> dated October 3rd 2021

Installing [`mdsvex`](https://github.com/pngwn/mdsvex) allows to process, or rather pre-process, markdown files in the `routes/blog` folder. `.md`, but also and most prominently `.svx` files, which allows to use Svelte syntax in between markdown syntax.

```bash
npm i -D mdsvex
```

The config file is updated to consider the different extensions, both for mdsvex, but also for the larger kit.

Creating `routes/blog.svelte` rather than `routes/blog/index.svelte` allows me to include a layout file applied on the blog posts only.

```text
blog.svelte
blog/
    __layout.svelte

    markdown-post.md
    svexy-post.svx
```

In `blog.svelte` the idea is to show a list of links redirecting to each and every article in the blog folder. At the top of the component the `load` function allows to retrieve the necessary files through the [`import.meta.glob`](https://vitejs.dev/guide/features.html#glob-import) functionality provided by vite.

### Update — Session

Instead of looking for articles in the load function, it is possible to include the array in the session object. The logic is moved to `src/hooks/index.js`, and the blog, or any other page for that matter, can then access the list in the initial script.

```js
export async function load({ session }) {
	const { posts } = session;

	// return props
}
```

### Update — Structure

The blog is restructured to have `blog/index.svelte` and `blog/[slug].svelte`, with the goal of fetching an article matching the `slug` parameter. The articles are moved into a separate folder, `src/blog`, which immediately means the hook needs to be updated.

```diff
-import.meta.glob('/src/blog/*.{md,svx}'))
+import.meta.glob('/src/routes/blog/*.{md,svx}'))
```

In `[slug].svelte` the idea is to then return a specific post or a 404 page.

404 page meaning an object with a specific status and error message.

```js
return {
	status: 404,
	error: new Error('Post not found')
};
```

Post using the `import.meta.glob` syntax. Heer I decided to use the array in the `session` object to first check if the post exist.

```js
const { slug } = page.params;
const match = session.posts.find((post) => post.slug === slug);
```

If there is an object with the same `slug`, the idea is to use the mentioned glob syntax and extract the specific object referring to the post. Here it is useful to have a reference to the post's path since the glob statement returns an object with the path as the key. Store the path in the session object, alongside the slug.

```js
return {
	path,
	slug,
	...metadata
};
```

Use the path of the matching post to pick the post from the glob-bed object.

```js
const posts = import.meta.glob('/src/blog/*.{md,svx}');
const post = await posts[match.path]();
```

It may look a tad convoluted, but this structure allows to retrieve the metadata and the content through the `default` field.

```js
const { default: Component, metadata } = post;
```

The end result can be included in the markup, directly as a svelte component.

```svelte
<Component />
```

_Please note:_ the command line highlights the following message.

```text
<Component/> will not be reactive if Component changes. Use <svelte:component this={Component}/> if you want this reactivity.
```

Which leads to the special svelte element.

```svelte
<svelte:component this={Component} />
```

### Update — Dates

The frontmatter includes a date.

```yaml
date: 2021-9-21-22-04
```

The information is used:

- in the session object to sort the blog posts according to date, from most to least recent

- in the blog index, as the content and `datetime` attribute of a `<time>` element

## Bug fixes

> started October 3d, 2021

- the fonts should be referenced from the root folder

  ```diff
  url('fonts/jost-bold-webfont.woff2') format('woff2')
  +url('/fonts/jost-bold-webfont.woff2') format('woff2')
  ```

  The first statement would not work in a nested route like `/blog`, which would otherwise look for `blog/fonts/...`

- the fonts are updated to remove some of the options added by default by the font squirrel generator

## Config

`mdsvex` is configured in a separate file `mdsvex.config.js`

Two rehype packages allow to add the permalink to the headings processed in the markdown documents (md and svx).

```bash
npm i -D rehype-slug
npm i -D rehype-autolink-headings
```

The auto-headings package is configured to have the following markup.

```html
<h2 id="identifier">
	Heading
	<a href="#identifier">
		<span class="visually-hidden">Permalink</span>
	</a>
</h2>
```

Shiki is used in place of the default solution to highlight the code snippets on build.

```bash
npm i -D shiki
```

A few adjustments are however necessary to incorporate the highlighted code in the context of the preprocessor.

</details>
