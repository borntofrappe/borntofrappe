---
title: A most feeble Svelte app
description: Set up the flimsiest environment to work with Svelte.
date: 2023-03-06 18:22:13
---

To work locally with Svelte you have several options. Among the brightest solutions you have the command proposed by [Svelte](https://svelte.dev/) itself.

```bash
npm create svelte@latest app
```

Or again a template offered by [vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

```bash
npm create vite@latest app -- --template svelte
```

Both instructions set up a robust environment which showers you from head to toe with features. Sometimes _too many_ features. Keep using vite and you'd be delighted to know just how little it takes for a working, Svelte app.

## Step by step

Create a folder.

```bash
mkdir app
cd app
```

Initialize a pointless `package.json` file.

```bash
npm init -y
```

Install three packages: `vite`, `svelte` and the much necessary [plugin](https://github.com/sveltejs/vite-plugin-svelte) to have the two work together.

```bash
npm i -D vite svelte @sveltejs/vite-plugin-svelte
```

Much of the `.json` file is up to your discretion, but you do need a field to specify the `type` of `module`.

```json
{
	"type": "module"
}
```

Among the scripts point to vite to set up the project on `localhost`.

```json
{
	"scripts": {
		"dev": "vite"
	}
}
```

Ultimately you'd run the instruction to process a `.svelte` document, say `App.svelte` as created in a dedicated `src` folder.

```svelte
<h1>app</h1>
```

Create the entry point of your application, `index.html` with a supportive container.

```html
<div id="root"></div>
```

Past the element add a few lines of JavaScript in a `<script>` element of type `module`.

```html
<script type="module"></script>
```

In this manner you are able to execute the import syntax necessary to retrieve the `.svelte` component.

```js
import App from './src/App.svelte';
```

And initialize the application with the Svelte [component API](https://svelte.dev/docs#run-time-client-side-component-api).

```js
const app = new App({
	target: document.getElementById('root')
});

export default app;
```

One final stretch before you get to enjoy writing the HTML, CSS and JavaScript of the project of your dreams. Per the plugin instruct vite through the `vite.config.js` file.

```js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte()]
});
```

May seem like a lot, but at the end of the day, it's not that much. And in fact, I've created [a repository](https://github.com/borntofrappe/vite-svelte) following much of the logic described in this very article. After you go through the configuration once, you might enjoy a shortcut.

Setup.

```bash
npx degit borntofrappe/vite-svelte app
cd app
npm install
```

And, run.

```bash
npm run dev
```
