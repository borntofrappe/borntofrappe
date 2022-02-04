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

The log helps to set up an environment where the kit is able to create pages and content from markdown files.

Install `mdsvex` to process markdown files.

```bash
npm i --save-dev mdsvex
```

Update `svelte.config.js` to 1. have mdsvex process `.md` files, and 2. SvelteKit consider `.md` files.

```js
const mdsvexConfig = {
	extensions: ['.md']
};

const config = {
	preprocess: mdsvex(mdsvexConfig),
	extensions: ['.svelte', ...mdsvexConfig.extensions]
	// kit
};
```

This is enough to create pags from markdown files. `/src/routes/blog/article.md` would create a page available at `/blog/article`.

Considering the content from a separate folder — `/src/log` — import the files with `import.meta.glob()`.

```html
<script context="module">
	export async function load() {
	  const log = import.meta.glob()
	}
</script>
```

The [Vite](https://vitejs.dev/guide/features.html#glob-import). feature returns an object describing the documents with a path and a transforming function.

```js
{
  '/src/log/0.md': Function(),
  '/src/log/1.md': Function(),
}
```

The function is what ultimately allows to transform the documents through `mdsvex`.

#### archives

With `src/log/archives.svelte` show all the log entries sorted by `day`.

Wrap the imported object in `Object.entries()` to create a 2D array.

```js
Object.entries(import.meta.glob('/src/log/*.md'));
```

Iterate through the array to consider the path and transforming function.

```js
.map(async ([path, module]) => {

})
```

Extract the data from the frontmatter, which details `day` and `title`.

```js
const { metadata } = await module();
const { day, title } = metadata;
```

For the URL of the article create a slug considering the name of the file.

```js
const slug = path.split('/').pop().replace(/\.md$/, '');
```

For each entry produce an object with the relevant metadata and the slug.

```js
return {
	day,
	title,
	slug
};
```

Since the operation is asynchronous wrap the entire `Object.entries` statement in a giant promise to wait for the execution of each module.

```js
const log = await Promise.all(Object.entries(/**/));
```

Once the promises are all resolved, `entries` describes an array of objects with `title`, `day` and `slug`. Pass the data through `props` and iterated through the collection with an `#each` statement to create the list of entries.

In the markup link to the specific entries through the slug.

```html
<a href="/log/{slug}">{title}</a>
```

The day is also used in the ordered list, but is connected to HTML more than SvelteKit.

#### day

With `src/log/[day].svelte` show the entry for the specific day.

Extract the day from the `params` object.

```js
export async function load({ params }) {
	const { day } = params;
}
```

Build the path the day would have in the log folder.

```js
const path = `/src/log/${day}.md`;
```

Use the string to find a match in the imported object.

```js
const log = import.meta.glob('/src/log/*.md');

if (log[path]) {
}
```

With a match extract the metadata, but also content.

```js
const { default: Module, metadata } = await log[path]();
```

Include the `Module` in the markup as any component.

```html
<main>
	<h1>{title}</h1>
	<Module />
</main>
```

Without a match return an object with a `status` and `error`.

```js
return {
	status: 404,
	error: new Error('Not found')
};
```

The object is enough to have the kit produce the error page.

#### index

With `src/log/index.svelte` show the latest entry.

First create an array similar to [the archives](#archives). Unlike with the archives, however, create an object with the day and path only.

```js
return {
	day,
	path
};
```

Use the path produce the content only for the specific entry. Isolate the latest entry from the sorted collection.

```js
const [entry] = entries.sort((a, b) => parseInt(b.day, 10) - parseInt(a.day, 10));
```

Re-use the importing syntax to extract the corresponding component.

```js
const log = import.meta.glob('/src/log/*.md');
const { default: Module, metadata } = await log[entry.path]();
```

#### kit specificities

Considering the SvelteKit's features the components are updated to:

- prerender the routes

  ```html
  <script context="module">
  	export const prerender = true;
  </script>
  ```

- prefetch log entries

  ```svelte
  <a sveltekit:prefetch href="/log/{slug}">{title}</a>
  ```

- avoid hydrating the archives and individual entries

  ```html
  <script context="module">
  	export const hydrate = false;
  </script>
  ```

  The documents are not interactive and it's enough to rely on the server-rendered version.

As a matter of preference add `__layout.reset.svelte` to remove the layout file set at root level.

#### Interactivity warning

At the time of writing the console highlights a warning when using `<Module />` and points to the `<svelte:component >` special element instead.

```bash
/src/routes/log/[day].svelte:42:1 <Module/> will not be reactive if Module changes. Use <svelte:component this={Module}/> if you want this reactivity.
```

For the log and the static nature of the content, however, the module does not change in the first place.

### Blog routes

The blog follows the experimentation of the [log](#log) with a more elaborate structure.

#### mdsvex

Update the config object so that `mdsvex` picks up markdown files, but also documents ending with the `.svx` extension. The split between the two helps to differentiate purely static articles from those including Svelte syntax.

```js
const mdsvexConfig = {
	extensions: ['.md', '.svx']
};
```

Update the config option to also override the default frontmatter function.

```js
const mdsvexConfig = {
	frontmatter: {
		marker: '-',
		type: 'yaml',
		parse: (frontmatter) =>
			Object.fromEntries(frontmatter.split('\n').map((line) => line.split(/: /, 2)))
	}
};
```

The idea is to always process the values in the frontmatter as a string, which make it possible to avoid parsing the input dates as date objects.

```md
---
datetime: 2021-02-04
---
```

`datetime` is preferred over `date` since the corresponding value is inspired by the HTML attribute with the same name.

#### index

With `src/blog/index.svelte` show all the articles sorted by date.

With `import.meta.glob` refer to markdown files, but also `.svx` documents as well.

```diff
'/src/blog/*.md'
+'/src/blog/*.{md,svx}'
```

To extract the name of the file and build the slug remove either extension.

```diff
.replace('.md', '');
+.replace(/\.(md|svx)/, '');
```

To sort by date create the date from the `datetime` value. The idea is to create a date object from this string destructuring its various components.

```js
const date = new Date(
	...metadata.datetime
		.split(/[-T:]/)
		.map((d, i) => (i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)))
);
```

#### Nested articles

Ultimately I want to support a setup where you can write a markdown or `.svx` document in a dedicated folder.

```text
/blog
  /folder
    /article.md
```

Especially in the context of `svx` files the idea is to use the folder for all the components, all the sections devoted to an article.

```text
/blog
  /folder
    /Counter.svelte
    /article.svx
```

To support this setup update the syntax of the glob statement.

```diff
import.meta.glob('/src/blog/*.{md,svx}')
+import.meta.glob('/src/blog/**/*.{md,svx}')
```

What matters here, what is used as a slug, is the name of the article, and **not** the name of the folder.

#### slug

With `src/blog/[slug].svelte` show the article for the specific slug.

Repeat the importing syntax used for all articles, but store the path to identify a potential article.

```js
return {
	slug,
	path
};
```

With the array find a potential match comparing the slug against the parameter passed through the `load` function.

```js
const entry = entries.find(({ slug }) => slug === params.slug);
```

If there is a match call once more `import.meta.glob` and retrieve the metadata and associated content using the match's path.

```js
const blog = import.meta.glob('/src/blog/**/*.{md,svx}');
const { default: Module, metadata } = await blog[entry.path]();
```

Without a match return an object to produce the 404 error page.

```js
return {
	status: 404,
	error: new Error(`There is no article for ${entry.slug}.`)
};
```

#### Session

`/routes/blog/index.svelte` and `/routes/blog/[slug].svelte` share much of the same logic in the initial script.

With `hooks/index.js` store the information in the `sessions` object.

```js
export async function getSession() {
	const entries = await Promise.all(/* ... */);
	return {
		entries: entries.sort((a, b) => b.date - a.date)
	};
}
```

Retrieve the articles from the `load` function.

```js
export async function load({ session }) {
	const { entries } = session;
}
```

Retrieve the specific article finding a match in the same object.

#### Data structure

Instead of storing the articles in an array I find it preferable to create an object using the `slug` as a key. The solution makes it easier to retrieve a specific article in `[slug].svelte`

```diff
-const entry = entries.find(({ slug }) => slug === params.slug);
+const entry = entries[params.slug];
```

The drawback is that `index.svelte` needs the information back into an array to sort the articles by date.

One way to combine both needs, having the articles stored by slug and maintain the expected order, is to use a map.

With a map retrieve a specific article with the `.get()` method.

```js
const article = articles.get(params.slug);
```

With a map retrieve all articles with the `.values()` method. Note that the value returned by a function is an interator.

```js
const articles = [...session.articles.values()];
```

For the map create a two dimensional array where each article includes the slug and then the relevant metadata. Sort the entries.

```js
[...entries].sort((a, b) => b.date - a.date);
```

Modifying the array in place would not create issues, but I'd rather avoid side effects.

Loop through the collection to create the 2D structure expected by the map constructor.

```js
[...entries].sort((a, b) => b.date - a.date).reduce((acc, curr) => [...acc, [curr.slug, curr]], []);
```
