---
title: A most feeble Svelte app
description: Set up the flimsiest environment to work with Svelte.
date: 2023-03-06 20:56:27
---

To work locally with Svelte you have several options. Among the brightest solutions you have the command proposed by [Svelte](https://svelte.dev/) itself.

```bash
npm create svelte@latest app
```

Or again a template offered by [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

```bash
npm create vite@latest app -- --template svelte
```

Both instructions set up a robust environment which showers you from head to toe with features. Sometimes _too many_ features. Keep using Vite, however, and you'd be delighted to know just how little it takes for a running Svelte app of your own.

Create a folder.

```bash
mkdir app
cd app
```

Initialize a pointless package file.

```bash
npm init -y
```

Install three utilities: `vite`, `svelte` and the much necessary [plugin](https://github.com/sveltejs/vite-plugin-svelte) to have the two work together.

```bash
npm i -D vite svelte @sveltejs/vite-plugin-svelte
```

Much of the `.json` file is up to your preference, but you do need a field to specify the type of `module`.

```json
{
	"type": "module"
}
```

A basic script also helps to have Vite serve the the project with one short `npm` directive.

```json
{
	"scripts": {
		"dev": "vite"
	}
}
```

Ultimately you'd execute the command to process a `.svelte` document, such as `App.svelte` as created in a dedicated, source folder.

```svelte
<h1>app</h1>
```

Add the entry point of your application, `index.html` with a supportive container.

```html
<div id="root"></div>
```

Past the element add a few lines of JavaScript in a `<script>` element of type `module`.

```html
<script type="module"></script>
```

In this manner you are able to execute the import syntax necessary to retrieve the `.svelte` file.

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

You are almost done and ready to enjoy writing the HTML, CSS and JavaScript for the project of your dreams. Following the plugin's instructions, add a configuration file in `vite.config.js`, to have the tool actually process `.svelte` documents.

```js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte()]
});
```

Past this final step, however, you are officially done.

```bash
npm run dev
```

Discussed in increments and in such detail, the sequence may seem laborious, but as you examine the folder the application is preciously small. 

```text
|- src
	|- App.svelte
|- index.html
|- package.json
|- package-lock.json
|- vite.config.js
```

After you go through the process once, however, you might want to avoid repeating the steps. In this occasion you are in luck. I've purposed [a repository](https://github.com/borntofrappe/vite-svelte) following much of the logic described in this very article. It might save a few keystrokes the second time around.

Set up.

```bash
npx degit borntofrappe/vite-svelte app
cd app
npm install
```

And, run.

```bash
npm run dev
```
