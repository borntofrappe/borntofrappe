# [borntofrappe](https://borntofrappe.netlify.app/)

Huzza! My personal website!

Uses:

- [SvelteKit](https://kit.svelte.dev/)

- [Netlify](https://www.netlify.com/)

Plans:

- a landing page

- a blog

- more than one blog post

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

## Colors

Following the suggestion from [refactoring UI](https://www.refactoringui.com/previews/building-your-color-palette) the `:root` selector defines custom properties for different sets of colors. Each set has ten combinations of `hsl` values with decreasing brightness.

```css
:root {
	--grey-000: hsl(216, 33%, 97%);
	--grey-100: hsl(214, 15%, 91%);
	/*  */
	--grey-800: hsl(209, 20%, 25%);
	--grey-900: hsl(210, 24%, 16%);
}
```

From this starting point the `body` selector introduces the properties actually used throughout the website.

```css
body {
	--copy-color: var(--grey-200);
	--heading-color: var(--grey-100);
}
```

This makes it easier to implement an alternative color palette, say for a light theme.

```css
body.light {
	--copy-color: var(--grey-800);
	--heading-color: var(--grey-900);
}
```

The properties will cascade down to benefiting elements.

`app.css` defines the properties. `__layout.svelte` imports the stylesheet directly in the script.

```svelte
import '../app.css';
```

## Custom properties

Beside color properties I use the `:root` selector to define other values repeated throughout the website. The idea is to have a system for sizes, transitions and any other value which needs consistency.

For each property using a custom property I repeat the declaration to provide a fallback. This value works for browsers which do not support custom properties.

```css
body {
	color: hsl(210, 16%, 82%);
	color: var(--copy-color);
}
```

I chose not to, but it is possible to repeat the value inside of the `var()` function. This works for browsers that do support custom properties, but are not able to find the custom property itself.

```css
body {
	color: var(--copy-color, hsl(210, 16%, 82%));
}
```

Say `--copy-color` is not defined, without this fallback the browser would revert to the initial value.

## Sizes

With `--size` I include steps from the [major third](https://www.modularscale.com/?1&em&1.25) scale.

```css
:root {
	--size-300: 0.8rem;
	--size-400: 1rem;
}
```

## CSS reset

In `app.css` I follow most of the guidance from [a modern CSS reset](https://piccalil.li/blog/a-modern-css-reset/).

##

</details>
