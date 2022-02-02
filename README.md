![On pink days, on cyan nights, you'll find me online @borntofrappe](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/borntofrappe.png)

# Hello World!

This is my website, and you are welcome**d**. It is built with **SvelteKit**, in its latest version. It is deployed through **Netlify**, and available on [borntofrappe.netlify.app](https://borntofrappe.netlify.app)

If you are curious in _how_ the website is built in the first place, feel free to continue with the [_Development notes_](#development-notes).

If you are interested in only results, I have the gumption to direct you toward the home page once more.

[**Go to website ![](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/rocket.svg)**](https://borntofrappe.netlify.app)

## Development notes

### create-svelte

```bash
npm init svelte@next
```

The instruction prompts several questions:

- Directory not empty. Continue? **y**

- Which Svelte app template? **Skeleton project**

- Use TypeScript? **No**

- Add ESLint for code linting? **Yes**

- Add Prettier for code formatting? **Yes**

With the environment:

1. install the dependencies listed in the package file with `npm install`

2. develop with `npm run dev`

3. create a production app with `npm run build`

### Netlify config

Netlify is able to deploy the website directly through `adapter-auto`. It is possible to configure the build process through Netlify's own interaface, but `netlify.toml` provides a more deliberate approach:

- specify the build command and publish directory

```toml
[build]
  command = "npm run build"
  publish = "build"
```

- specify a node version suitable for SvelteKit. The utility requires at least node 14.13

```toml
[context.production]
  environment = { NODE_VERSION = "14.18.1" }
```

In Netlify's own interface you'd need to configure the options updating the deploy settings and setting an environmental variable for `NODE_ENV`.

### Document icons

In `/static/icons` include icons in the following formats and sizes:

- `icon.svg`

- `favicon.icon`, 32 and 16 pixels

- `apple-touch-icon.png`, 180 pixels

- `android-chrome-192x192.png` and `android-chrome-512x512.png`, 192 and 512 pixels respectively

Reduce the size of the `.png` images with [squoosh.app](https://squoosh.app/).

Reference the icons in `app.html` and the web app manifest `/static/manifest.json`.

Reference the manifest file in `app.html`.

### Webfonts

In `/static/fonts` include fonts in the following variants:

- [JosefinSans](https://fonts.google.com/specimen/Josefin+Sans?query=josefin) bold

- [Jost](https://fonts.google.com/specimen/Jost?query=jost) regular, bold, italic, bold italic

Create the `woff` and `woff2` file formats with [fontsquirrel's generator](https://www.fontsquirrel.com/tools/webfont-generator).

The generator is modified to:

- keep existing true type hinting

- avoid fixing the GASP table

- avoid adjustment for vertical metrics

- avoid fixing missing glyphs, either spaces or hyphens

Include the fonts with the one-step loading strategy explained in [a comprehensive guide to webfonts](https://www.zachleat.com/web/comprehensive-webfonts/).

By default rely the system font stack. Apply the fonts through the `.webfonts` class added to the document when the fonts are indeed loaded.

Rely on the system font stack for `code` elements.

### Global stylesheet

Include the stylesheet `src/app.css` through the layout file `__layout.svelte`.

The global values set different systems in terms of color, sizes, transitions relying on CSS custom properties.

In terms of **color** define different sets of colors following the suggestion from [refactoring UI](https://www.refactoringui.com/previews/building-your-color-palette).

Set root properties in the `:root` selector, create additional properties on the `body` selector.

```css
:root {
	--cool-grey-000: hsl(216, 33%, 97%);
	--cool-grey-100: hsl(214, 15%, 91%);
}

body {
	--copy-color: var(--cool-grey-800);
	--heading-color: var(--cool-grey-900);
}
```

The approach allows to change the style of the application through the more specific properties.

```css
body.dark {
	--copy-color: var(--blue-grey-200);
	--heading-color: var(--blue-grey-100);
}
```

In terms of **sizes** include steps from the [major third](https://www.modularscale.com/?1&em&1.25) scale.

In terms of **easing** include the bezier curves for different timing functions.

Each time you rely on a custom property repeat the declaration _before_ to provide a fallback.

```css
body {
	color: hsl(209, 20%, 25%);
	color: var(--copy-color);
}
```

Past the different systems set default values for a range of selectors considering most of the guidance from [a modern CSS reset](https://piccalil.li/blog/a-modern-css-reset/). The reset is modified as follows:

- avoid resetting the margin on `blockquote`, `dl` and `dd` elements

- avoid resetting the padding on lists

- avoid implementing smooth scrolling

- avoid setting a `min-height` on the entire body

- set the `line-height` not through the body but through the paragraph selector

- set `display: block` on images but also the svg selector for vector graphics

- avoid resetting animations for the reduced motion preference with the `!important` keyword

### Meta tags

Beside the tags in `app.html` include additional information in the `<Meta />` component:

- title

- description

- open graph properties

Use the URL from the `page` store made available by the kit in `$app/stores`.

### use observe

Through the `use:observe` action add and remove a class of `observed` on the target elements considering the intersection observer API and the preference for reduced motion.

```svelte
<section use:observe />
```

To have the Svelte compile the associated CSS declarations add a class through the class directive.

```html
<section class:observed="{false}" use:observe />

<style>
	section.observed {
		animation-play-state: running;
	}
</style>
```

### log

Install mdsvex to process markdown files.

```bash
npm i --save-dev mdsvex
```

Process markdown files with mdsvex. Have the kit pick up the files with the matching extension.

```js
import { mdsvex } from 'mdsvex';

const mdsvexConfig = {
	extensions: ['.md']
};

const config = {
	preprocess: mdsvex(mdsvexConfig),
	extensions: ['.svelte', ...mdsvexConfig.extensions]
	// kit
};
```

Create three routes for the `/log` path:

1. `/`: show the latest day

2. `/archives`: show every day

3. `/[day]`: show the specific day

Each markdown file is scheduled to have a day and title in the frontmatter.

```md
---
day: 0
title: Launching pad
---
```

Import markdown files with `import.meta.glob()`. The feature returns an object with the path as key, a transforming function as a value. Use this last field to retrieve the metadata and actual content.

```js
const { default: Module, metadata } = await log[path]();
```

Use the module as-is on through the `<svelte:component>` element.

```html
<!-- <Module /> -->
<svelte:component this="{Module}" />
```
