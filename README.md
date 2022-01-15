# borntofrappe

![Sveltekit Badge](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/sveltekit-badge.svg)

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

</details>
