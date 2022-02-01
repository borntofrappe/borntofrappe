![On pink days, on cyan nights, you'll find me online @borntofrappe](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/borntofrappe.png)

# Hello World!

This is my website, and you are welcome**d**. It is built with **SvelteKit**, in its latest `1.0.0-next.253` version. It is deployed through **Netlify**, and available on [borntofrappe.netlify.app](https://borntofrappe.netlify.app)

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

Netlify is able to deploy the website directly through `adapter-auto`. It is possible to configure the build process through Netlify's own interaface, but `netlify.toml` provides a more deliberate approach:

- specify the build command and publish directory

```toml
[build]
  command = "npm run build"
  publish = "build"
```

- specify a node version suitable for SvelteKit. The utility requires at least node 14.13

```toml
[context.production]
  environment = { NODE_VERSION = "14.18.1" }
```

In Netlify's own interface you'd need to configure the options updating the deploy settings and setting an environmental variable for `NODE_ENV`.

### Document icons

In `/static/icons` include icons in the following formats and sizes:

- `icon.svg`

- `favicon.icon`, 32 and 16 pixels

- `apple-touch-icon.png`, 180 pixels

- `android-chrome-192x192.png` and `android-chrome-512x512.png`, 192 and 512 pixels respectively

Reduce the size of the `.png` images with [squoosh.app](https://squoosh.app/).

Reference the icons in `app.html` and the web app manifest `/static/manifest.json`.

Reference the manifest file in `app.html`.
