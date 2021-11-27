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

### Debug - failed build

> Failed during stage `building site`: Build script returned non-zero exit code: 2

Among the warnings in the "Deploy log"

> npm WARN notsup Unsupported engine for @sveltejs/kit@1.0.0-next.201: wanted: {"node":">=14.13"} (current: {"node":"10.24.1","npm":"6.14.12"})

Update `netlify.toml` to require a satisfactory node version.

```toml
[context.production]
  environment = { NODE_VERSION = "14.18.1" }
```

`14.18.1` because it's the version I use to develop the website.

### Debug - failing function

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
a possible fix.

Update `netlify.toml` and the `[functions]` field.

```toml
[functions]
  node_bundler = "esbuild"
```

###

</details>
