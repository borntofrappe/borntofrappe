# borntofrappe

_What's this?_ My personal website! Built with [SvelteKit](https://kit.svelte.dev/), deployed through [Netlify](https://www.netlify.com/).

## Development notes

### SvelteKit

SvelteKit is installed its `next` iteration. At June 17th, 2021, this means [version 1.0.0-next.115](https://www.npmjs.com/package/@sveltejs/kit/v/1.0.0-next.115), but I plan to update the library regularly.

```bash
npm init svelte@next

npm install
npm run dev -- --open
```

- Directory not empty. Continue? **y**

There are a few questions answered as follows:

- Which Svelte app template? **Skeleton project**

- Use TypeScript: **n**

- Add ESLint for code linting: **y**

- Add Prettier for code formatting: **y**

### Netlify adapter

The adapter for Netlify is installed in [version 1.0.0-next.17](https://www.npmjs.com/package/@sveltejs/adapter-netlify/v/1.0.0-next.17). Again this relates to June 17th, 2021, and I plan to update the module at the same rate as SvelteKit.

```bash
npm i -D @sveltejs/adapter-netlify@next
```

The Netlify build personally fails, due to the unsupported version of node.

```toml
[context.production]
  environment = { NODE_VERSION = "14.16.0" }
```

`16.3.0` seems to be the latest version of [the package](https://www.npmjs.com/package/node), but locally I am still working with node `v14.16.0`.

### import.meta and mdsvex

[Vite](https://vitejs.dev) allows to import files with a [glob import](https://vitejs.dev/guide/features.html#glob-import).

```JS
const posts = import.meta.glob('/src/blog/*.md');
```

The object returend by the statement provides a path to the file as well as a function to process said file.

```JS
console.log(posts);
/*
{
  '/src/blog/getting-started.md': [Function: /src/blog/getting-started.md]
}
*/
```

To process the file, you need a plugin.

```bash
Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .md file format.
```

For `.md` documents, and `.svx` documents which allow to include Svelte in markdown, an appropriate plugin is [mdsvex](https://github.com/pngwn/MDsveX/tree/master/packages/mdsvex).

```bash
npm i -D mdsvex
```

Updated `svelte.config.js` to include the plugin in the `preprocess` field, and expand the extensions processed by vite.

```js
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: mdsvex({ extensions: ['.md', '.svx'] }),
  // kit...
};
```

Note that once processed, what you get from the `import.meta.glob` function is a svelte component. Either include it directly or through the `<svelte:component />` special element.

`Md` refers to a Svelte component returned by the function processing the `.md` or `.svx` syntax.

```svelte
<!-- <Md /> -->
<svelte:component this={Md} />
```

The second solution is preferable if you want a reactive component.

```code
[vite-plugin-svelte] ... <Md/> will not be reactive if Md changes. Use <svelte:component this={Md}/> if you want this reactivity.
```

### Color preference

Inspired by the example app [hn.svelte.dev](https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/app.html#L9), the color preference is set at the level of the `<html>` element, directly in `app.html`.

```html
<head>
  <script>
    try {
      // retrieve and set color preference
    }
  </script>
</head>

<body></body>
```
