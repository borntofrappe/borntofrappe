# borntofrappe

![Kit Badge](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/kit-badge.svg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e7278de-b395-4b4c-a54c-4c12fbd57fc9/deploy-status)](https://app.netlify.com/sites/borntofrappe/deploys)

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

Configure `svelte.config.js`.

```js
import adapter from '@sveltejs/adapter-netlify';
```

Add `netlify.toml` as a config file for Netlify.

```toml
[build]
  command = "npm run build"
  publish = "build"
```

Since you remove `adapter-auto` feel free to remove the package from the dependencies.

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
