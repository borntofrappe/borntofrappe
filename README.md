# borntofrappe

_What's this?_ My personal website! Built with [SvelteKit](https://kit.svelte.dev/), deployed through [Netlify](https://www.netlify.com/) (fingers crossed [![Netlify Status](https://api.netlify.com/api/v1/badges/4e7278de-b395-4b4c-a54c-4c12fbd57fc9/deploy-status)](https://app.netlify.com/sites/borntofrappe/deploys)).

_What follows?_ Hopefully more than a fresh start. In practical terms, however, a series of notes I jot down while developing the project.

## Getting started

> dated June 17th, 2021

- SvelteKit is installed its `next` iteration, which currently means [version 1.0.0-next.115](https://www.npmjs.com/package/@sveltejs/kit/v/1.0.0-next.115).

  ```bash
  npm init svelte@next

  npm install
  npm run dev -- --open
  ```

  There is a check considering whether or not to continue in an empty directory

  - Directory not empty. Continue? **y**

  There are a few questions answered as follows:

  - Which Svelte app template? **Skeleton project**

  - Use TypeScript: **n**

  - Add ESLint for code linting: **y**

  - Add Prettier for code formatting: **y**

- `package.json` is updated in its `name`, since I didn't appreciate the squiggly line under the default string `"~TODO~"`.

- `src/routes/index.svelte` is updated to introduce the website.

- `favicon.png` is replaced with `icon.svg`, because branding
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="2em" height="2em"><style>@media (prefers-color-scheme:dark){g{stroke:#f4256a;stroke-width:6}path{stroke-width:7}}</style><g fill="none" stroke="#000e29" stroke-linejoin="round" stroke-linecap="round"><path stroke-width="8" d="M34.527-34.027q5.657 26.87-20.506 53.033L6.95 26.077a8 8 0 01-11.314 0L-25.577 4.864a8 8 0 010-11.314l7.07-7.07Q7.658-39.685 34.528-34.028"/><g stroke-width="7" transform="rotate(45 2.81 1.664)"><path d="M23 6h2a12 12 0 0112 12v6H16M-23 6h-2a12 12 0 00-12 12v6h21M0 24c-10 5-12 16 0 22.5C12 40 10 29 0 24"/><circle r="9" cy="-11"/></g></g></svg>
  . Kidding aside, a later update will cover the formats and sizes I'd like to include.

## A quick deploy

> dated June 17th, 2021

- SvelteKit adapter for Netlify is installed in [version 1.0.0-next.17](https://www.npmjs.com/package/@sveltejs/adapter-netlify/v/1.0.0-next.17)

  ```bash
  npm i -D @sveltejs/adapter-netlify@next
  ```

- following [the documentation](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify), `svelte.config.js` is updated to include the adapter

  ```js
  import adapter from '@sveltejs/adapter-netlify';

  const config = {
    kit: {
      adapter: adapter(),
      target: '#svelte',
    },
  };
  ```

- once more according to [the docs](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify), `netlify.toml` is added to describe the necessary actions

  ```toml
  [build]
    command = "npm run build"
    publish = "build/"
    functions = "functions/"
  ```

## Looking for success

> dated June 17th, 2021

- Netlify build fails citing unsupported engine

  ```bash
  npm ERR! notsup Unsupported engine for @sveltejs/kit@1.0.0-next.115: wanted: {"node":"^12.20 || ^14.13.1 || >= 16"} (current: {"node":"10.24.1","npm":"6.14.12"})
  ```

  Two lines below the error message the issue, and solution, is repeated directly

  ```bash
  Required: {"node":"^12.20 || ^14.13.1 || >= 16"}
  ```

  Netlify shows how to set a specific node version through [configuration variables](https://docs.netlify.com/configure-builds/environment-variables/#netlify-configuration-variables)

- `netlify.toml` is updated to specify which node version to use in production

  ```toml
  [context.production]
    environment = { NODE_VERSION = "14.16.0" }
  ```

  `16.3.0` seems to be the latest version of [the package](https://www.npmjs.com/package/node), but locally I am still working with `v14.16.0`. Might update in the future.

## Pages, layouts and errors

> dated June 18th, 2021

- `src/routes/blog/index.svelte` adds a blog page. `src/routes/blog.svelte` would work, but it is better to plan ahead and consider when the blog will include dedicated articles, to serve from the `/blog` root

- `src/routes/__layout.svelte` provides a `nav` and `footer` for each page. The content of the pages is included in place of the `<slot>` element

- `src/routes/__error.svelte` handles when a page fails to load. In a `<script>` with a `context` of type `module`, the component has access to the error and status code. The information is passed through props and displayed with additional information

- in the error page the idea is to suggest filing an issue on Github. A specific URL helps to prepopulate the issue with additional information

  ```text
  https://github.com/borntofrappe/borntofrappe/issues/new?title=ADD_TITLE_HERE&labels=bug
  ```

  For the title I chose to use the status code

- the `<svelte:head>` component allows to change the title

## Icons and manifest

> dated June 18th, 2021

- the static folder is updated to include icons in several formats and sizes: `.svg` and `.favicon` as two general solutions for web browsers, `apple-touch-icon` for apple devices, `android-chrome-*` for android devices and chrome

- `manifest.json` highlights the icons, and additional information, for android devices

## lib, components and icons

> dated June 19th, 2021

- the `src/lib` folder is created to contain `.svelte` components and a javascript file exporting a series of icons through SVG syntax

- in place of a standard navigation bar, `<Breadcrumbs>` highlights the paths relative to the current page. The `$app/stores` module helps to retrieve the path from the `$page` store

  ```svelte
  import { page } from '$app/stores';
  ```

  Since `page` is a store, every time the value is updated, the elements using its value are updated as well

- `<svelte:head>` is moved from the individual pages to the `<Breadcrumbs>` component. The idea is to keep the title and the text in the breadcrumb navigation consistent

  Note that if a page were to specify its own `<svelte:head>` element it would override the default

## Style, sheet and tags

> dated June 19th, 2021

- considering the solution of [sveltekit own website](https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/routes/__layout.svelte#L6) `app.css` is imported as a global stylesheet from the layout file `__layout.svelte`

- the fonts are included in `app.html` and through the `<link>` tag provided by Google fonts

- the layout is updated so that the footer is always pushed at the bottom of the page

- `<Breadcrumbs>` and `<Footer>` begin the styling of the components in between `<style>` tags

## Fonts in the static folder

> dated June 20th, 2021

- in `app.css`, removed the `<link>` element importing the font from Google Fonts, in favor of a series of `@font-face` declarations referring to files stored in `static/fonts`

- in `app.html`, preloaded "critical" fonts, presumed essential for the text

- icons moved to a dedicated folder `static/icons` to better organize the resources

_Please note:_ I'm still figuring out the best font loading strategy, evaluating system fonts, web fonts, from google, self-hosted, complete, subsets. I'm also considering different fonts for the body, the latest being [Cambay](https://fonts.google.com/specimen/Cambay)

- fixed the path to the fonts `/fonts/....` in place of `fonts/....`. Fixed a typo in `app.html`, where one of the font was actually mispelled, `SemiBold` in place of `Semibold`

- updated `.gitignore` to remove the `build` and `functions` folder

- removed the `<link>` elements which tried to preload the fonts before the stylesheet. I need more research to assess why the page doesn't lean on the preloaded assets (warning message in the console)

- updated letter and word spacing for paragraphs and larger viewports. This is a matter of personal preference as I feel the chosen font has too much whitespace with a larger font size

## Markdown blog

> dated June 21st, 2021

- created `src/blog` with two markdown files to make for a makeshift blog

  Note that the files do include information in the form of frontmatter (between two sets of triple hyphen characters `---`)

- added `src/hooks/index.js` to include in the `session` object an array describing the blog posts

  The script reads from the blog folder and looks for markdown files. For each file, the slug describes the name without the `.md` extension

- updated `src/routes/blog/index.svelte` to retrieve the list of blog posts from the `session` object and pass the information to the component through `props`

- updated `src/hooks/index.js` to retrieve the blog posts with `import.meta.glob` instead of the `fs` and `path` node modules

  This seems a feature of [vite](https://vitejs.dev/guide/features.html#json), working behind the scenes to process the files

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

  If you were to call the function, however, you'd encounter the following error message

  ```bash
  Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .md file format.
  ```

- installed [mdsvex](https://github.com/pngwn/MDsveX/tree/master/packages/mdsvex) to process the blog posts

  ```bash
  npm i -D mdsvex
  ```

  While the primary purpose of mdsvex is to process `.svx` files, more on this later, it is equipped to process markdown files as well

- updated `svelte.config.js` to include `mdsvex`

  ```js
  import { mdsvex } from 'mdsvex';

  const config = {
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: mdsvex({ extensions: ['.md', '.svx'] }),
    // kit...
  };
  ```

- updated `src/hooks/index.js` to process `.md` and `.svx` files to retrieve the information in the frontmatter. The information is included alongside the `slug` for each article.

  ```js
  return {
    ...metadata,
    slug,
  };
  ```

- updated `src/routes/blog/index.svelte` to show the title and date of the articles, in place of the slug

- created `src/routes/blog/[slug].svelte` to capture the parameter from the URL.

  If the parameter doesn't match one of the slug in the `posts` array (once more from the session object), redirect to a `404` page with an arbitrary error message

  ```js
  return {
    status: 404,
    error: `Not found: blog/${slug}`,
  };
  ```

  If the parameter matches, use the `import.meta` syntax once more. This time, however, the idea is to process an individual file, the one matching the input.

  ```js
  return {
    props: {
      title,
      Md,
    },
  };
  ```

  `Md` refers to a Svelte component returned by the function processing the `.md` or `.svx` syntax.

  ```js
  const { default: Md, metadata } = post;
  ```

- updated `src/routes/blog/index.svelte` to have the title of the blog post link to the individual pages

- updated `__error.svelte` to include the error message in the body of the hypothetical github issue

## A step back in time

> dated June 21st, 2021

- formatted `.js` scripts with a consistent style

- noted a warning regarding the component including the content of the blog posts

  ```bash
  [vite-plugin-svelte] PATH_TO_SRC/src/routes/blog/[slug].svelte:36:2 <Md/> will not be reactive if Md changes. Use <svelte:component this={Md}/> if you want this reactivity.
  ```

- updated `hooks/index.js` to sort the blog posts chronologically. One of the blog posts is updated to show how the chosen format allows to specify additional arguments past the year, month and day

- updated `blog/index.svelte` to format the date with the internationalization API. The date itself is preserved in the `datetime` attribute

## Refresh

> dated June 27th, 2021

- updated packages to the latest version; `@sveltejs/kit` and `svelte` specifically

  ```bash
  npm update
  ```

- included a button to switch between color preferences. The preference is set on the `html` selector, and is checked immediately in `app.html`, right in the head of the document

  ```html
  <head>
    <script>
      try {
        const prefersColorScheme = matchMedia('(prefers-color-scheme: dark)');
        const colorScheme = localStorage.getItem('color-scheme');

        // ...

      }
    </script>
  </head>

  <body></body>
  ```

  The solution is inspired by the example app [hn.svelte.dev](https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/app.html#L9)

- updated `__layout.svelte` to include the toggle and breadcrumb navigation side by side. The two are included in a `<div>` and an `Introduction` component <!-- alternative names: foreward, prelude, beginning, launch pad, lead-in -->

- fixed the date included in the `<time>` element. The `datetime` attribute and the label included in between the `<time>` tags were accidentally one and the same. Additionally, the label was off by one month, since the month value starts at `0`; decide whether or not to cope with this in the frontmatter or in `blog/index.svelte`.

- updated `[slug].svelte` to include the component in the special element `<svelte:component />`. The articles are also updated to 1. provide a fresh coat of paint and 2. test out mdsvex
