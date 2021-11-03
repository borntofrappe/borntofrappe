# [borntofrappe](https://borntofrappe.netlify.app/)

Huzza! My personal website!

Uses:

- [SvelteKit](https://kit.svelte.dev/)

- [Netlify](https://www.netlify.com/)

Is it deployed? This badge should answer you.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e7278de-b395-4b4c-a54c-4c12fbd57fc9/deploy-status)](https://app.netlify.com/sites/borntofrappe/deploys)

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

- JosefinSans, only in its semibold variant

- Jost, considering the regular, semibold and italic variants

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
	--cool-grey-000: hsl(216, 33%, 97%);
	--cool-grey-100: hsl(214, 15%, 91%);
	/*  */
	--cool-grey-800: hsl(209, 20%, 25%);
	--cool-grey-900: hsl(210, 24%, 16%);
}
```

From this starting point the `body` selector introduces the properties actually used throughout the website.

```css
body {
	--copy-color: var(--cool-grey-200);
	--heading-color: var(--cool-grey-100);
}
```

This makes it easier to implement an alternative color palette, say for a dark theme.

```css
body.dark {
	--copy-color: var(--blue-grey-200);
	--heading-color: var(--blue-grey-100);
}
```

The properties will cascade down to benefiting elements.

_Please note:_ the dark theme has not been developed, yet.

`app.css` defines the properties. `__layout.svelte` imports the stylesheet directly in the script.

```svelte
import '../app.css';
```

## Custom properties

Beside color properties I use the `:root` selector to define other values repeated throughout the website. The idea is to have a system for sizes, transitions and any other value which needs consistency.

For each property using a custom property I repeat the declaration to provide a fallback. This value works for browsers which do not support custom properties.

```css
body {
	color: hsl(209, 20%, 25%);
	color: var(--copy-color);
}
```

I chose not to, but it is possible to repeat the value inside of the `var()` function. This works for browsers that do support custom properties, but are not able to find the custom property itself.

```css
body {
	color: var(--copy-color, hsl(209, 20%, 25%));
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

## Color preference

The website has two color schemes, inspired by the light and dark preference of the CSS media query. The preference is set on the `html` selector so that `app.html` is able to immediately consider the choice in the script preceding the body.

Each time you need to set properties which are theme-dependent remember to use two declarations:

```css
@media (prefers-color-scheme: dark) {
	:global(html:not([data-preference])) YOUR_SELECTOR_HERE {
	}
}

:global(html[data-preference='dark']) YOUR_SELECTOR_HERE {
}
```

This is to consider the dark color preference for the specific attribute _or_ the preference set through the media query when the attribute does not exist.

## Breadcrumbs

`$app/stores` provides a store describing the page, and most usefully its path. The value is used in `BreadcrumbNavigation` to create a series of anchor link elements leading up to the current URL.

The logic is slightly complicated by the fact that for the root path the idea is to show the string 'borntofrappe' alongside the icon of a rocket.

For each additional path the string of text is accompanied by an icon when one is available with the same name.

## Meta

The `<Meta />` component includes a title, description and link for the canonical URL. For the title the information is extracted from the page store, through `$app/store`, but it is possible to override the deault by passing a value through `props`.

The error page originally leaned on this setup to show the status code.

```svelte
<Meta title="borntofrappe / {status}" description={error} />
```

Ultimately, however, I opted to just include the description and rely on the default value.

## observe

In the homepage the goal is to animate different nodes through the intersection observer API. `utils.js` creates an action for such an occasion, receiving the node and attaching a class of `.observed` on the basis of the element's position, but also preference for reduced motion.

The animation is conditioned to the class selector.

```css
section.observed::after {
	animation-play-state: running;
}
```

However, Svelte strips the CSS since it detects that there are no elements in the component with the matching class.

This explains the explicit mention of the `observed` class.

```svelte
<section class:observed={false} />
```

With a default value of `false` the class is present only following the `observe` action.

```svelte
<section class:observed={false} use:observe />
```

In the CSS I maintained the selector in a media query, but considering the preference through the action the `@media` expression becomes redundant.

```diff
-@media (prefers-reduced-motion: no-preference) {
section.observed::after {
  animation-play-state: running;
}
-}
```

The snippet is for `About.svelte` but is relevant to any other component relying on the action.

## const vs export let

The `<About />` component relies on hard-coded arrays. Past the colors, which match the `hsl` values of the default color scheme before relying on custom properties, consider whether or not to receive the keywords describing the icons through props.

```svelte
<script>
	export let satellites;
</script>
```

In this manner you can change the icons without modifying the component itself. The same spiel could apply to the hero component.

## Opengraph image

The `<Meta />` component refers to a single image for the opengraph protocol. It seems it is not enough to describe the relative path to the resource, however, and it is necessary to refer to the actual domain-

```html
<meta property="twitter:image" content="https://borntofrappe.netlify.app/images/borntofrappe.png" />
```

## Skip to content

In the layout file the `<SkipToContent />` points to a container with an `id` of content. The feature works starting with the kit in version `1.0.0-next.193`, which fixes the scrolling to elements with a hash — `#content`.

##

</details>
