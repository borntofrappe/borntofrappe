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

## Hero

In recreating the hero section, a note or two on the transition from JavaScript to Nunjucks.

Set up the variables with the syntax detailed [by nunjucks docs](https://mozilla.github.io/nunjucks/templating.html#set)

```njk
{% set size = 450 %}
{% set iconSize = 100 %}
```

This is helpful to describe the size of the SVG, but also the angle describing which path to use in the `<textPath>` element

```njk
{% set angle = (360 / loop.length) * loop.index0 %}
```

It's already shown in the previous snippet, but in the loop, access the index and the length of the array with `loop.length` and `loop.index0`. Again, refer to the [nunjucks docs](https://mozilla.github.io/nunjucks/templating.html#for)

Finally, check for a condition using the if tags.

```njk
{% if something and somethingElse %}
{% else %}
{% endif% }
```

Use the `and` keyword in place of `&&`

## extends

The idea is to have a `base.njk` file which is then extended with content the different pages.

It also allows to have browsersync work to its fullest potential.

1. add a base.njk file in the **\_includes/layouts** folder.

2. describe a template with an html, head and body tags

3. add a footer

The footer is just to show the extends, but ultimately it should be included in every page.

To add content, define a block. This is where njk syntax kicks in

```njk
{% block content %}
{% endblock %}
```

This sets up a template.

To extend said template, at least in njk files:

1. extend

   ```njk
   {% extends "layouts/base.njk" %}
   ```

2. describe the content to-be-placed in the block

   ```njk
   {% block content %}
     <h1>Hello there</h1>
   {% endblock %}
   ```

The header is included before the footer.

### extends if

This is actually nifty and something I was concerned with: it's possible to include an element conditional to a variable which is then set in the extending file.

In most practical terms, it's possible to:

- add the skip to content component at the top of the body, conditional to a variable being true

  ```njk
  {% if hasContent %}
    <a href="#content" class="visually-hidden" id="skip-to-content">
      Skip to Content {{ icons.skip | safe}}
    </a>
  {% endif %}
  ```

- set the boolean in the file using the template

  ```njk
  {% extends "layouts/base.njk" %}
  {% set hasContent = true %}
  ```

If the file doesn't have an element with an `id` of content, the anchor link is superfluous, and this allows to inject the markip only if necessary.

### extends layout

It's possible to have a layout reference another layout. Case in point: the blog posts. The idea is to extend the template in `base.njk` so to include the content of the markdown files in the desired markup structure.

```njk
{% extends "layouts/base.njk" %}

{% block content %}

<main id="content">
  {{content | safe }}
</main>

{% endblock %}
```

This layout extends the base layout, and it's then picked up specifying the layout in the frontmatter.

```md
---
layout: "layouts/blog.njk"
---
```

Since every blog post uses the layout however, specify a `blog.json` which specifies the option.

```njk
{
  "layout": "layouts/blog.njk",
  "tags": "blog"
}
```

`tags` will come in handy in a second, but sticking with the data, `blog.json` creates a minor annoyance in applying the layout and tags to `index.njk` as well. To avoid this, remove the options at the top of the index page.

```njk
---
layout: null
tags: null
---
```

## collection

This is where the `tags` field proves its usefulness. By adding the value of `blog`, every markdown file is listed in a collection. `collections.blog` to be precise.

Access this array in the index file, and describe a list of articles.

```njk
<ul>
{% for post in collections.blog %}
  <li>
    <a href="{{post.url}}">
      {{ post.data.title }}
    </a>
  </li>
{% endfor %}
</ul>
```

Ultimately, the markup is different, but the idea remains: eleventy creates a collection using the `tags` field.
