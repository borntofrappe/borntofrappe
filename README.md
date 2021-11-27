# borntofrappe

Here's two things about me:

1. I like to start new projects

2. I often fail to follow through past the initial, exciting phase

So here's my personal website, reinforcing the first factoid and hopefully overriding the second.

<details>
<summary><strong>Dev Notes</strong></summary>

### Links

- [SvelteKit](https://kit.svelte.dev)

- [Netlify](https://www.netlify.com/)

- [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte)

- [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)

### Install

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

### Develop

```bash
npm run dev
```

### Publish

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

###

</details>
