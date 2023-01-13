# borntofrappe

Restarting from scratch. Restarting from kit v1.0. Restarting at 10.02 PM.

## Day 0: a fresh start

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

### hello world

A custom icon.

A makeshift landing page.

### deploy <!-- fingers crossed -->

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

### debugging

build fails

```text
notsup Required {"node":"^12.22.0 || ^14.17.0 || >=16.0.0"}
```

More config.

```toml
[build.environment]
  NODE_VERSION = "18.13.0"
  NPM_VERSION:  "9.2.0"
```

npm seemingly unnecessary, but I like the options paired.

Oopsie.

```diff
-NPM_VERSION:  "9.2.0"
+NPM_VERSION = "9.2.0"
```

better off on alone?

### bonus

Rename master branch, just cause.

```bash
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```

Just remember to update the production branch in the build & deploy section.

## Day 1: a mascot, a global stylesheet and a few font files

Add an interactive, animated mascot. Create a dedicated route and dedicated component.

Include svg icons in static/icons. Reference on a need-to-have basis.

Add global stylesheet. Import from layout file for all routes.

Introduce landing page with a descriptive header.

Font loading: [mulish](https://fonts.google.com/specimen/Mulish), 4 faces (regular, italic, extra bold, extra bold italic), woff2, [two stage loading strategy](https://www.zachleat.com/web/css-tricks-web-fonts/) with a subset and a more featured version <!-- worth a more detailed write-up to remember the process -->

## Day 2: icons and a service worker

Create a helper project to read `.svg` files syntax and create an object of name-svg key-value pairs.

Export object from `lib/utils`. Import where needed and inject with `{@html}`.

Add a service worker to cache only the fonts in the static folder.

## Day 3: error page

Create another mascot in the /mignon route. Add component in the error page after the status code and error message.
