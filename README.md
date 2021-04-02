# Hello World

This is my personal website. Built with [SvelteKit](https://github.com/sveltejs/kit), deployed through [Netlify](https://www.netlify.com/).

## Helpful Resources

- [SvelteKit Docs](https://kit.svelte.dev/docs)

- [Rich Harris: Futuristic Web Development](https://youtu.be/qSfdtmcZ4d0)

## Notes

I might incorporate these notes in the blog, once I figure out how to create a blog at all, but for now this markdown file will suffice. Here's a series of verbose sentences jotted down developing the website.

### Getting Started

```bash
npm init svelte@next
```

At the time of writing, the instruction is all that is necessary to set up the environment with [svelte kit](https://kit.svelte.dev/docs#introduction-getting-started)

Choices:

- Directory not empty. Continue? y

- Use TypeScript in components? N

- What do you want to use for writing Styles in Svelte components? CSS

- Add ESLint for code linting? y

- Add Prettier for code formatting? y

I'm unsure about the choice regarding ESLint _together_ with Prettier, as there might be some overlap, but to get started they seem to provide helpful safeguards.

```bash
npm install
```

I can't seem to install the dependencies with the current version of node.

```bash
npm ERR! notsup Required: {"node":"^10 || ^12 || >=14"}
npm ERR! notsup Actual:   {"npm":"6.13.7","node":"13.11.0"}
```

After updating node, however, it seems the instruction works fine.

```bash
npm run dev
```

`npm run dev` sets up the environment on `http://localhost:3000`, with a default page highlighting an uplifting message and a counter component. An optional flag forcedly opens the default browser in the prescribed location.

```bash
npm run dev -- --open
```

### Deploy Homepage

Removing `Counter.svelte`, the idea is to first deploy a homepage through `src/routes/index.svelte`. Here I include a simple heading and an informative paragraph.

SvelteKit seems to have a concept of [_adapters_](https://kit.svelte.dev/docs#adapters) to fit the application to the deployment environment. In `svelte.config.cjs` the application uses a node adapter, but I personally lean on netlify. The docs point to [an adapter tailored for netlify](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify), which itself dictates a bit of configuration through `netlify.toml`.

```toml
[build]
  command = "npm run build"
  publish = "build/"
```

The docs describes a folder for `functions` as well, which I presume to refer to serverless functions. At the time of writing, however, it seems the instruction is superfluous. The `build` folder is already included in `.gitignore`, which meets the recommendation of the docs as well.

Before including the adapter in `svelte.config.cjs`, it is first necessary to install the package.

```bash
npm i -D @sveltejs/adapter-netlify
```

In `svelte.config.cjs`, finally, the field describing the adapter is updated to match the new package.

```cjs
const adapter = require('@sveltejs/adapter-netlify');

module.exports = {
	// ..,
	kit: {
		adapter: adapter()
	}
	// ..,
};
```

The node adapter seems to become superfluous, so it is removed from the dependency tree and the config file.

```diff
-const node = require('@sveltejs/adapter-node');
```

Error: at the time of writing the adapter seems to break the development environment. Running `npm run dev` raises the following message.

```bash
config.kit.adapter should be an object with an "adapt" method, rather than the name of an adapter. See https://kit.svelte.dev/docs#adapters
```

It seems this is an issue with the version of the pacakge. By using the latest release, with the `@next` suffix, the project is back up and running.

```bash
npm i -D @sveltejs/adapter-netlify@next
```

For reference, and at the time of writing, the adapter has the fòllowing version.

```json
{
	"devDependencies": {
		"@sveltejs/adapter-netlify": "^1.0.0-next.4"
	}
}
```

Error: it seems the `functions` folder wasn't superfluous after all (it doesn't refer to serverless functions either...).

```bash
You must specify build.publish and build.functions in netlify.toml. Consult https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify#configuration
```

Uplifting message: with the updated `toml` file, the build is successful.

```bash
> Using @sveltejs/adapter-netlify
  ✔ done
```

**Update**

Error: a familiar message from netlify's build process.

```bash
notsup Unsupported engine for @sveltejs/kit@1.0.0-next.67: wanted: {"node":">= 12.17.0"} (current: {"node":"10.24.0","npm":"6.14.11"})
```

It seems that netlify relied on a previous version of node.

```bash
Downloading and installing node v10.24.0...
```

It is possible to fix the issue through the netlify interface, but the `toml` config file seems most appropriate.

```toml
[context.production]
  environment = { NODE_VERSION = "14.16.0" }
```

### Blog

A blog is perhaps _the_ most important part of the website, so it is only natural to start by creating the page. This exercise also works to illustrate the structure of the application set up by svelte kit

- in `lib` create a `<Nav>` component to move between two routes: home and blog

- in `routes/$layout.svelte` import and include the component before the `<slot/>` element

  ```html
  <script>
  	import Nav from '$lib/Nav.svelte';
  </script>

  <nav />
  <slot />
  ```

  It would possible to include `<Nav>` in `routes/index.svelte`, and again in `routes/blog.svelte` and other pages, but through the layout file works as a convenient alternative. Every route using the layout file will include the `<Nav>` component before its actual content.

- in `routes/blog` add an index file for the page introducing the blog.

  ```text
  | routes
  |
  |_ index.svelte
  |
  |_ blog
  	|
  	|_ index.svelte
  ```

  It would be possible to achieve the same result with `routes/blog.svelte` _in the routes folder_, but the choice becomes short-lived once you need to include pages for the blog posts. A dedicated folder for dedicated pages.
