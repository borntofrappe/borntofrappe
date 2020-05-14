# borntofrappe

A personal website

## Notes

**Please note**: what follows is a tentative series of paragraphs, which range between being verbose and senseless. Read is at your own risk.

### 11ty

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

### Config

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

### data

In the data folder add the icons as described in the style guide folder, through the property-value pairs of `icons.js`

This makes the object available to every templating file.

See [11ty data cascade](https://www.11ty.dev/docs/data-cascade/).

### index.njk

I've decided to pick up nunjucks, but I might as well use liquid. Just pick one.

With the templating engine, include the icons within two sets of brackets.

```njk
<p>Almost ready to launch {{icons.rocket | safe }}</p>
```

The `safe` filter is necessary to avoid including the syntax as text.

### filters

`safe` is one of the [built-in filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters) provided by nunjucks.

Another useful one, for the specific website, is `replace`. This one allows me to change the default width and height by modifying the `1em` value.

```njk
<p>Almost ready to launch {{icons.rocket | replace("1em", "42") | safe }}</p>
```

The order doesn't seem to matter, as the size is updated either way.

At first I thought of creating my own filter, and this explains the changes introduced to `eleventy.js`. See the [configuration API](https://www.11ty.dev/docs/config/#using-the-configuration-api) for more.

### Hero

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

### extends

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

#### extends if

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

#### extends layout

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

### collection

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

### html

Recreate the markup for the three pages.

#### blog post

Include the icons with a new variables in the frontmatter: `keywords`

```md
---
keywords: ["html", "css", "svg"]
---
```

In the template replicate the syntax of the **header - blog post** project

Looping through the keywords and adding the keyword and associated icon.

#### blog

For the blog, the date actually describes the value included in the `datetime` attribute. Change the frontmatter accordingly.

```diff
-date: 2020-05-10
+datetime: 2020-05-10
```

Add a filter in the config file to format the date as wanted.

```js
eleventyConfig.addFilter("formatdate", function(datetime) {
  const year = datetime,getFullYear();
  // ...

  return `formatted date`;

}
```

There's a bit of an issue regarding the order of the markdown files. I wasn't able to use the `| sort` filter, and decided instead to create the `blog` collection from the [config file](https://www.11ty.dev/docs/collections/#advanced-custom-filtering-and-sorting).

```js
eleventyConfig.addCollection("blog", function (collection) {
  return collection.getFilteredByGlob("./src/blog/*.md");
});
```

In this manner, immediately sort the articles as they are included in the colleciton.

```js
eleventyConfig.addCollection("blog", function (collection) {
  return collection.getFilteredByGlob("./src/blog/*.md").sort(function (a, b) {
    return b.data.datetime - a.data.datetime;
  });
});
```

**Be careful**: 11ty provides a date in `post.date`, and this refers to the date in which the file was created.

#### landing page

This page required the biggest adjustment, but truthfully, it's a matter of replacing the mapping functions with for loops.

I've decided to use the variables described in the **landing page** project still, but for the `d` attribute of the `<path>` element connecting the icons, I've found a better implementation using nunjucks's own filters.

Start from an array describing the constellations

```njk
{% set constellations = [
    {
      icon: 'html',
      coordinates: [35, 30]
    },
    {
      icon: 'css',
      coordinates: [125, 85]
    },
    {
      icon: 'js',
      coordinates: [225, 40]
    },
    {
      icon: 'svg',
      coordinates: [315, 95]
    }
  ] %}
```

Create the path by joining the coordinates in a string

```njk
{% set d = constellations | join(" ", "coordinates") %}
```

Prepend the letter `M` to finalize the correct syntax.

```njk
{% set d = "M " + constellations | join(" ", "coordinates") %}
```

You could join the pairs with the letter `L`, but SVG is draws the shape as if connecting the points of a line.

The following are equivalent

```
M 35,30 125,85 225,40 315,95
M 35,30L125,85L225,40L315,95
```
