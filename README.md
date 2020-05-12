# borntofrappe

A personal website

## Deploy

- start with three pages

  1. landing page

  2. blog

  3. blog post

- use 11ty

- template with nunjucks

- deploy on Netlify

## Notes

Starting from 11ty own docs: [Getting started](https://www.11ty.dev/docs/getting-started/).

```bash
npm init -y
npm install --save-dev @11ty/eleventy
```

### Ignore

Ignore the `node_modules` folder with a `.gitignore` file.

```bash
touch .gitignore
# node_modules
```

Ignore this `.md` file and the `playground` folder with a `.eleventyignore` file: [Ignore files](https://www.11ty.dev/docs/ignores/).

```bash
touch .eleventyignore
# playground
# README.md
```

### Scripts

In the `scripts` field of `package.json`:

```json
{
  "scripts": {
    "dev": "npx eleventy",
    "serve": "npx eleventy --serve"
  }
}
```

So to have

```bash
npm run dev
npm run serve
```

## Config

Add a `.eleventy.js` file.

```bash
touch .eleventy.js
```

Specify input and output folders: [Configuration options](https://www.11ty.dev/docs/config/#configuration-options)

```js
module.export = {
  dir: {
    input: "src",
    output: "dist",
  },
};
```

This makes the `.eleventyignore` file redundant.
