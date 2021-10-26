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

## Webfonts

From [Google fonts](https://fonts.google.com/) I cherry picked:

- JosefinSans, only in its bold variant

- Jost, considering the regular, bold and italic variants

I don't load a `monospace` webfont and instead prefer to rely on the system font stack. Inconsolata is my preferred option, but it's used only if already available on the machine.

With [fontsquirrel](https://www.fontsquirrel.com/tools/webfont-generator) I created the `woff` and `woff2` file formats, changing a few options in the process:

- keep existing true type hinting

- do not fix GASP table

- no adjustment for vertical metrics

- do not fix missing glyphs, either spaces or hyphens

I don't like the idea that the generator meddles with the typeface, especially considering the vertical measure.

The fonts are placed in the `static` folder and loaded `app.html` following the one-step loading strategy explained in [a comprehensive guide to webfonts](https://www.zachleat.com/web/comprehensive-webfonts/).

In terms of CSS the `<style>` tag associates the fonts with the class `.webfonts`, relying by default on the system font stack.

In terms of JavaScript the `<script/>` tag loads the fonts with the [font loading API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API).

##

</details>
