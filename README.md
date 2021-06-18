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
