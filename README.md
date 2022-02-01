![On pink days, on cyan nights, you'll find me online @borntofrappe](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/borntofrappe.png)

# Hello World!

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

Netlify is able to deploy the website directly through `adapter-auto`.

It is possible to specify the build command and publish directly in the Netlify UI, but the build process requires a specific node version.

```text
npm ERR! notsup Unsupported engine for @sveltejs/kit@1.0.0-next.253: wanted: {"node":">=14.13"} (current: {"node":"10.24.1","npm":"6.14.12"})
```

Add `netlify.toml` to config the version.

```toml
[context.production]
  environment = { NODE_VERSION = "14.18.1" }
```
