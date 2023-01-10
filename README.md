# borntofrappe

Restarting from scratch. Restarting from kit v1.0. Restarting at 10.02 PM.

# Day 0: a fresh start

```bash
npm create svelte@latest
```

- current repo

- skeleton app

- no ts

- yes eslint

- yes prettier

- no playwright

- no vitest

## hello world

A custom icon.

A makeshift landing page.

## deploy <!-- fingers crossed -->

Adapter fit for netlify

```bash
npm uninstall @sveltejs/adapter-auto
npm install --save-dev @sveltejs/adapter-netlify
```

Config fit for the adapter.

```
import adapter from '@sveltejs/adapter-netlify';
```

Options worth a google search...

```js
const config = {
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};
```

Config for netlify

```toml
[build]
    command = "npm run build"
    publish = "build"
```

Seemingly solid.

```bash
npm run build
npm run preview
```
