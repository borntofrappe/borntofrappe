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

<!-- TODOS:
- mdsvex configurations and plugins
- blog page
- blog post page
 -->

</details>
