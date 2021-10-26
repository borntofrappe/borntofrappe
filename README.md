# [borntofrappe](https://borntofrappe.netlify.app/)

Huzza! My personal website!

Uses:

- [SvelteKit](https://kit.svelte.dev/)

- [Netlify](https://www.netlify.com/)

<details>
<summary><strong>For my future self</strong></summary>

## Init

```bash
npm init svelte@next
```

- Directory not empty. Continue? **y**

- Which Svelte app template? **Skeleton project**

- Use TypeScript? **No**

- Add ESLint for code linting? **Yes**

- Add Prettier for code formatting? **Yes**

## Local development

```bash
npm install
npm run dev
```

## Local build

```bash
npm run build
npm run preview
```

## Netlify adapter

```bash
npm i -D @sveltejs/adapter-netlify@next
```

## Netlify config

In `svelte.config.js`:

```js
import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};
```

With `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "build"
```

Direct toward build command and folder. The config file overrides the option specified in the Netlify UI.

```toml
[context.production]
  environment = { NODE_VERSION = "14.18.1" }
```

Removes a bunch of warnings for optional dependencies relying on later node & npm versions. Netlify would use 10.24.1. 14.8.1 it's what I have locally.

```toml
[functions]
  node_bundler = "esbuild"
```

Seems to fix [an issue with a specific package](https://github.com/sveltejs/kit/issues/2523) which causes the Netlify build to fail.

## Icons

I drew an SVG icon to make out the outline of a rocket. From this starting point I removed the unnecessary whitespace and converted the `hsl` color with hexadecimal, saving up a few bytes.

With [realfavicongenerator](https://realfavicongenerator.net) I created the `.png`, `.ico` variants.

With [squoosh](https://squoosh.app/) I finally optimized the images.

## Colors

## Fonts

##

</details>
