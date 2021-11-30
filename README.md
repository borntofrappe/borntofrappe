# borntofrappe

Here's two things about me:

1. I like to start new projects

2. I often fail to follow through past the initial, exciting phase

So here's my personal website, reinforcing the first factoid and hopefully overriding the second.

<details>
<summary><strong>Dev Notes</strong></summary>

## Does it work?

Fingers crossed, it should. Here's a status badge to confirm.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e7278de-b395-4b4c-a54c-4c12fbd57fc9/deploy-status)](https://app.netlify.com/sites/borntofrappe/deploys)

## Links

- [SvelteKit](https://kit.svelte.dev)

- [Netlify](https://www.netlify.com/)

- [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte)

- [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)

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

`npm run build` creates a production version, but it's first necessary to set up an [adapter](https://kit.svelte.dev/docs#adapters).

The application is meant to be deployed with [Netlify](https://www.netlify.com/), hence [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify).

```bash
npm i -D @sveltejs/adapter-netlify@next
```

Update `svelte.config.js` to rely on the adapter.

```js
import adapter from '@sveltejs/adapter-netlify';
```

Add a `netlify.toml` config file.

```toml
[build]
  command = "npm run build"
  publish = "build"
```

## Debug - failed build

> Failed during stage `building site`: Build script returned non-zero exit code: 2

Among the warnings in the "Deploy log"

> npm WARN notsup Unsupported engine for @sveltejs/kit@1.0.0-next.201: wanted: {"node":">=14.13"} (current: {"node":"10.24.1","npm":"6.14.12"})

Update `netlify.toml` to require a satisfactory node version.

```toml
[context.production]
  environment = { NODE_VERSION = "14.18.1" }
```

`14.18.1` because it's the version I use to develop the website.

## Debug - failing function

The site is built but the URL returns the following message

> {"errorType":"Runtime.UserCodeSyntaxError","errorMessage":"SyntaxError: Unexpected token '.'",
>
> ...continues

In the console

> Failed to load resource: the server responded with a status of 502 ()

In the Netlify app and the deploy log there is no warning, but under "Publish deploy" (I wanted to look at the built version) you find the following

> Production: master@5151cbf.
>
> Deployed Functions

Exploring _functions_ you find a `__render` function which produces the error message

> {"errorType":"Runtime.UserCodeSyntaxError","errorMessage":"SyntaxError: Unexpected token

Scavenging the Netlify [docs](https://docs.netlify.com/configure-builds/file-based-configuration/#functions) and [forum](https://answers.netlify.com/t/build-works-locally-but-not-in-netlify/45438/4) I found
a fix.

Update `netlify.toml` and the `[functions]` field.

```toml
[functions]
  node_bundler = "esbuild"
```

---

With the website successfully deployed through Netlify I shift focus to the design and development of the application. I might turn these words in regular articles, but for now I'm satisfied with a stream of loosely connected thoughts.

## Document icons

SvelteKit includes `static/favicon.png` as the default icon, referencing the asset directly in `src/app.html`

```html
<link rel="icon" href="/favicon.png" />
```

In place of this default, and taking inspiration from [this article](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) shared on [CSS-Tricks](https://css-tricks.com/how-to-favicon-in-2021/) I created an SVG icon to better fit the application. The icon describes a rocket pointing up and to the right. There's a reason why I landed on the rocket, but I'd rather yada-yada the issue for the time being.

In terms of actual design I like to draw my vector graphics in VSCode, so that the syntax is the end result of adjusting values by hand. I don't feel pressured to optimize the end result with SVGO and I'm more than satisfied just removing the unnecessary whitespace. The icon itself has a default stroke color, but changes for a dark color preference. The colors refer to the following `hsl` codes:

- hsl(210, 24%, 16%)

- hsl(213, 32%, 88%)

Hex colors just take less characters to type.

Returning to the cited article, the markup references the vector graphic, but also `.ico` and `.png` variants.

```html
<link rel="icon" href="/icons/favicon.ico" sizes="any" />
<link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
```

The variants are created with GIMP. This relates to the `.ico` and `.png` files included in the snippet, but also the two images referenced in the web manifest. `.png` images are optimized with [squoosh.app](https://squoosh.app/) compressing with OxiPNG and toggling the "Reduce palette" option with 64 colors. The three go from 37.8kb to 12.5kb. I know the browser only needs one, but the difference is noticeable.

## Webfonts

From [Google fonts](https://fonts.google.com/) I picked:

- JosefinSans, only in its bold variant

- Jost, considering the regular, bold and italic variants

The two are rather similar, with geometric features, but I like JosefinSans for my headings, Jost for copy.

I don't load a `monospace` webfont and instead prefer to rely on the system font stack. Inconsolata is my preferred option, but it's used only if already available on the machine.

With [fontsquirrel](https://www.fontsquirrel.com/tools/webfont-generator) I created the `woff` and `woff2` file formats, changing a few options in the process:

- keep existing true type hinting

- do not fix GASP table

- no adjustment for vertical metrics

- do not fix missing glyphs, either spaces or hyphens

I don't like the idea that the generator meddles with the typeface, especially considering the vertical measure.

The fonts are placed in the `static` folder and loaded `app.html` following the one-step loading strategy explained in [a comprehensive guide to webfonts](https://www.zachleat.com/web/comprehensive-webfonts/).

In `app.html` a `<style>` tag associates the fonts with the class `.webfonts`, relying by default on the system font stack.

In terms of JavaScript the `<script/>` tag loads the fonts with the [font loading API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API).

## Global stylesheet

`__layout.svelte` includes the property value pairs from `app.css`.

```svelte
import '../app.css';
```

The stylesheet implements several systems for color, sizes and even transitions through custom properties.

### Colors

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
	--copy-color: var(--cool-grey-800);
	--heading-color: var(--cool-grey-900);
}
```

This makes it easier to implement an alternative color palette, say for a dark theme.

```css
body.dark {
	--copy-color: var(--blue-grey-200);
	--heading-color: var(--blue-grey-100);
}
```

The properties cascade down to benefiting elements.

_Please note:_ the dark theme has not been developed, yet.

### Sizes

With `--size` I include steps from the [major third](https://www.modularscale.com/?1&em&1.25) scale.

```css
:root {
	--size-300: 0.8rem;
	--size-400: 1rem;
}
```

### Easings

With `--ease-*` I include bezier functions I intend to use over CSS keywords like `ease-in-out`. There's also an associated custom property describing a default duration for transitions, `transition--duration`.

### CSS reset

In `app.css` I follow most of the guidance from [a modern CSS reset](https://piccalil.li/blog/a-modern-css-reset/). Where I slightly differ:

- no reset for the margin on `blockquote`, `dl` and `dd` elements, since I don't mind the browser default and I'd rather design the elements on a need-to-have basis

- no reset on lists, again relying on defaults and overriding if need be

- no smooth scroll, as I don't feel like the application really needs smooth scrolling, at least at the time of writing

- no `min-height` on the body

- `line-height` on paragraph elements, not the body as one time I found the selector messed with the spacing too muc

- `display: block` on images, pictures, but also `<svg>` elements, something I repeat over and over when styling vector graphics

- no reset on animations for the reduced motion preference. Not just because I'm not a fan of the `!important` keyword, but also because I consider the preference where I design the animations

### Fallbacks

Each time I rely on a custom property I repeat the declaration to provide a fallback. The first pairing works for browsers which do not support custom properties.

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

## Meta

The `<Meta />` component includes a title, description and link for the canonical URL. For the title the information is extracted from the page store through `$app/store`, to resemble something akin to breadcrumb navigation for the current path. It is however possible to override the deault by passing a value through directly through props.

```svelte
<Meta title="borntofrappe" />
```

## Opengraph image

Among the meta attributes, the `<Meta />` component refers to a single image for the opengraph protocol. It seems it is not enough to describe the relative path to the resource, however, and it is necessary to refer to the actual domain.

```html
<meta property="twitter:image" content="https://borntofrappe.netlify.app/images/borntofrappe.png" />
```

In terms of design the image was created using the same icons and visuals I intend to later include in the application:

- the rocket icon at the center is the same icon used for the document

- the sun and moon icons represent the light and dark color scheme respectively

- the colors are picked from the custom properties in `app.css`

There's also a small repeated pattern in the background which I might later include through the `body` selector as well.

## error

Following the suggestion from [the kit's docs](https://kit.svelte.dev/docs#layouts-error-pages) `__error.svelte` implements a custom error page.

The script at the top of the page returns the error and status code, extracted from the `load` function as documented.

```js
export function load({ error, status }) {}
```

The values are then included in an arbitrary markup structure (design at a later stage).

Take notice of the `href` attribut for the anchor link pointing toward GitHub to fix the potential issue.

```text
https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{status}&body={error.message}&labels=bug
```

The idea is to pre-populate the fields to file an issue as a bug with the given status code and error message.

### Playground

I'm exploring the design of several parts of the website in [a separate repository](https://github.com/borntofrappe/playground). The components, the illustrations created in this playground are incorporated with a few Svelte specificity, and making sure to add the fallback to the custom properties.

Here's a non-exhaustive list of notable differences:

- the styles for the alternative color scheme rely on the `:global()` syntax, essential to consider the parent selector

- the components are able to use more general CSS selectors instead of dedicated classes, knowing that styles are scoped to each `.svelte` file

##

</details>
