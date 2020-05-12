# borntofrappe

A personal website

## Notes

> setting things up with 11ty

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

## data

In the data folder add the icons as described in the style guide folder, through the property-value pairs of `icons.js`

This makes the object available to every templating file.

See [11ty data cascade](https://www.11ty.dev/docs/data-cascade/).

## index.njk

I've decided to pick up nunjucks, but I might as well use liquid. Just pick one.

With the templating engine, include the icons within two sets of brackets.

```njk
<p>Almost ready to launch {{icons.rocket | safe }}</p>
```

The `safe` filter is necessary to avoid including the syntax as text.

## filters

`safe` is one of the [built-in filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters) provided by nunjucks.

Another useful one, for the specific website, is `replace`. This one allows me to change the default width and height by modifying the `1em` value.

```njk
<p>Almost ready to launch {{icons.rocket | replace("1em", "42") | safe }}</p>
```

The order doesn't seem to matter, as the size is updated either way.

At first I thought of creating my own filter, and this explains the changes introduced to `eleventy.js`. See the [configuration API](https://www.11ty.dev/docs/config/#using-the-configuration-api) for more.
