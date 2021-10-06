![borntofrappe](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/banner.svg)

_What's this?_ my personal website! There's bound to be a homepage and, fingers crossed, a blog too. Past that, [I'm open to suggestions](https://github.com/borntofrappe/borntofrappe/issues/new?labels=suggestion).

<details>
<summary>
<strong>Development notes</strong>
</summary>

## Getting started

> dated September 21st 2021

```bash
npm init svelte@next
```

Running the code prompts a series of questions to structure the project:

- Directory not empty. Continue? **y**

- Which Svelte app template? **Skeleton project**

- Use TypeScript? **No**

- Add ESLint for code linting? **Yes**

- Add Prettier for code formatting? **Yes**

The command line highlights a few steps to continue

1. `npm install`

2. optional commit (this is already a git & GitHub repository)

3. `npm run dev -- --open`

The existing `README.md` is replaced with the documentation for [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), but the markup is one `Ctrl-Z` key away. The documentation does provide a few helpful notes though:

To create a production version you need to first install an [_adapter_](https://kit.svelte.dev/docs#adapters). Afterwards run the build command.

```bash
npm run build
```

To preview the built version run the preview command.

```bash
npm run preview
```

## Deploy

> dated September 22nd 2021

I intend to deploy the website through Netlify, and the relevant adapter is [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify).

```bash
npm i -D @sveltejs/adapter-netlify@next
```

From the GitHub repo, the relevant configuration happens in `svelte.config.js`.

Import:

```js
import adapter from "@sveltejs/adapter-netlify";
```

Add the adapter to the field describing the `kit`:

```js
export default {
  kit: {
    adapter: adapter(),
    target: "#svelte",
  },
};
```

The project's `README` highlights a couple of warnings, among which one describing the node version.

> Netlify defaults to Node 12.16. SvelteKit requires Node v12.20 to build.

Among the [proposed options](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript), I decided to require a valid node version with a [`netlify.toml`](https://docs.netlify.com/configure-builds/file-based-configuration/) config file.

```toml
[context.production]
  environment = { NODE_VERSION = "14.18.0" }
```

The config file is also required to specify which command to run on build.

```toml
[build]
  command = "npm run build"
  publish = "build/"
```

With this setup, and as mentioned above, build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

Directing Netlify to the GitHub repo should then be enough to deploy the project.

## Blog

> dated October 3rd 2021

`src/routes/blog` includes two Svelte components to create a functioning blog: `index.svelte` and `[slug].svelte`. The idea is to use the first component to introduce the blog and list the available articles, while the second component populates the page with the content of a specific, selected post.

The articles are created in a separate folder, `src/blog`, and processed through [`mdsvex`](https://github.com/pngwn/mdsvex). The choice for the specific package is that it allows to process a special kind of markup which allows Svelte syntax — by default `.svx`.

```bash
npm i -D mdsvex
```

`mdsvex.config.js` houses the configurations chosen for the preprocessor. Consider the properties of the object returned at the bottom of the file:

- `extensions`, to have mdsvex process both markdown and the special syntax

  The information needs to be repeated in the kit so that the files are considered in the first place

  ```js
  const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],
    // .. kit cofig
  };
  ```

- `smartypants` to remove the fancy typographic options. This is a personal preference to have the output as close as possible to the content actually included in the articles

- `rehypePlugins` to modify the processed markup with plugins from the [rehype](https://github.com/rehypejs/rehype) ecosystem

  - [`rehype-slug`](https://github.com/rehypejs/rehype-slug) to add a unique `id` attribute to heading elements

  - [`rehype-autolink`](https://github.com/rehypejs/rehype-autolink-headings) to include an anchor link element redirecting toward the headings and their respective identifier

  While the first package is used as-is, the second is modified to include a specific markup following the [`hast`](https://github.com/rehypejs/rehype-autolink-headings#optionscontent) specification

- `highlight` to replace the default solution for syntax highlighting with [`shiki`](https://github.com/shikijs/shiki)

  This pacakge requires a bit of adjustment considering the immaturity of the installed packages, and the issues mdsvex raises when processing particular characters.

  Following the suggestions from a couple of issues, [117](https://github.com/pngwn/MDsveX/issues/117#issuecomment-674253491) and [205](https://github.com/pngwn/MDsveX/issues/205#issuecomment-803685689), it is necessary to include the markup with a `{@html }` statement taking care of escaping tags interpreted as expressions

This setup works to process the articles in the chosen formats, but it is then necessary to update the kit in order to:

1. read the contents of the chosen blog folder

2. populate the `[slug].svelte` page when the slug matches one of the available posts

To read the contents refer it is possible to rely on [`import.meta.glob`](https://vitejs.dev/guide/features.html#glob-import), a functionality provided by vite.

It is possible to use the syntax in the `load` function of the desired Svelte components, but I decided to rely on the feature in a hook file, `hooks/index.js`, with the goal of updating the `session` object with an array of the available articles.

```js
export async function getSession() {
  // return an array of posts
}
```

In this manner the blog, but also any and other route which need the information, can extract the list from the load function.

```js
export async function load({ session }) {
  const { posts } = session;
}
```

The array of posts describes the articles through their path, slug and metadata.

To find a specific article the route behind `[slug].svelte` retrieves the parameter from the page object.

```js
export async function load({ page, session }) {
  const { slug } = page.params;
}
```

If the array of posts has an object with a matching slug path, the idea is to then repeat the `import.meta.glob` instruction to finally extract the contents of the document.

The information is passed through props and ultimately included in a `<svelte:component>` element.

```svelte
<svelte:component this={Component} />
```

It'd be possible to include the component as is, but it would raise the following warning.

```svelte
<Component />
<!--
<Component/> will not be reactive if Component changes. Use <svelte:component this={Component}/> if you want this reactivity.
-->
```

If the slug doesn't match a post, it is enough to return an object with a status code of 404 to have the kit rely on the error page.

```js
return {
  status: 404,
  error: new Error("Post not found"),
};
```

## Dot Netlify

The project includes `.netlify` folder.

</details>
