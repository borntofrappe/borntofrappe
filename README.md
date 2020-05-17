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

### Intersection observer

To add the JavaScript adding/removing the class of `.observed` with the intersection observer API, include the code in between `<script>` tags.

```html
<script>
 // javascript here
<script>
```

Including the script in the `content` block causes the logic to precede the footer though.

Include another block for any JavaScript.

```njk
{% block script %}
{% endblock %}
```

### css

This is but one way to include the property value pairs in the HTML files: in between `<style>` tags.

Organize the stylesheet in a **css** folder alongside the layout files.

```
_includes
  css
  layouts
```

Add the stylesheet created globally and for the three pages.

```
_includes
  css
    blog.css
    global.css
    index.css
    post.css
```

In the base layout, include the global stylesheet and a block in which to add other values.

```njk
 <style>
{% include "css/global.css" %}
{% block style %}{% endblock %}
</style>
```

In the extending file, add the stylesheet using the blog.

For instance and for the articles in the blog folder.

```njk
{% block style %}
  {% include "css/post.css" %}
{% endblock %}
```

### markdown-it

In the markdown parser from the **Utils** folder I use `marked`, but 11ty natively uses `markdown-it`. It requires a bit of adjustment to modify the default markup for the heading and the code snippets:

- heading: add a permalink referencing the heading by `id`

- fence: wrap the code in a `div` container and prepend a `span` highlighting the language.

### css update

Modify the stylesheet as follows:

- create `base.css`, in which to style the elements of the base template. It's redundant to style the skip content, navigation and footer in each page

- in `base.css` modify the body to be a flex column of `100vh` `min-height`. Push the footer at the bottom using `margin-top: auto`.

### datetime and date

Modify the template and collection to use the `date` property if `datetime` is not made available. The idea is to account for a wider variety of frontmatter, whereby the date/brief or icons are not specified.

On second thought, I decided to rewrite the templates to use date, and specify such value in the frontmatter.

```md
---
date: 2020-05-10
---
```

According to [11ty docs](https://www.11ty.dev/docs/dates/), it will override the default date.

### breadcrumb

I wasn't able to find if 11ty provides a variable to describe the relative path of the current page. In lieu of this much needed variable, I set a `url` variable on every page which needs it.

In the blog.

```njk
{% set url = "/blog" %}
```

In the template for the blog posts.

```njk
{% set url = "/blog/" + title | slug %}
```

To create multiple links, one for each segment in the URL, I add a filter in `.eleventy.js`.

A filter to retrieve the paths from an input URL.

```js
eleventyConfig.addFilter("paths", function(url) {
  // []
});
```

The idea is to return an array, which values represent the text and the `href` attribute for each segment.

```js
[
  {
    value: 'blog',
    href: '/blog'
  },
  {
    value: 'css-animation-paused',
    href: '/blog/css-animation-paused'
  },
]
```

Therefore: 

- split the input string 

    ```js
    url.split("/")
    ```

- remove the first item. This is included by default with the rocket icon

    ```js
    url.split("/").slice(1)
    ```

    It is actually equivalent to swap these two instructions.

    ```js
    url.slice(1).split("/")
    ```

- loop through the items, returning the string in the `value` field


    ```js
    url
      .slice(1)
      .split("/")
      .map((value) => ({
        value,
      }))
    ```

- for the reference, use the current index and the looping array to join the items up to the current one

    ```js
    url
      .slice(1)
      .split("/")
      .map((value) => ({
        value,
        href: items.slice(0, index + 1).join("/")
      }))
    ```

Finally, go back to `base.njk` and include the anchor link elements using the `url` variable and the new `paths` filter.

```njk
{% if url %}
  {% for path in url | paths %}
    <a href="/{{path.href}}">/ {{path.value}}{{ icons[path.value] | safe }}</a>
  {% endfor %}
{% endif %}
```

### whitespace control

I'll refer you to nunjucks and [the docs](https://mozilla.github.io/nunjucks/templating.html#whitespace-control), but the idea is to remove the whitespace introduced in the tags like loops, conditionals and expressions by adding a `-` minus character at the beginning or end of the tag.

Look at the dist folder and the output HTML for a reference.

Remove the space before the tag

```njk
{%- if hasContent %}
```

Remove the space following the tag

```njk
{% endif -%}
```

### meta

Starting with the title, use the relative path to change the text at the top of the document.

```njk
<title>borntofrappe{{ url | replace("/", " / ") }}</title>
```

Add liberal whitespace with the `replace` filter.

For the icons, add a `static` folder, and specify how 11ty needs to include its contents in the **dist** output folder.

```js
config.addPassthroughCopy('./src/static/');
```

In the base layout, point toward the different icons by referencing a given folder.

```njk
<link rel="icon" href="{{staticFolder or "static"}}/icon.svg" />
```

The idea is to poin toward the root folder by specifying a path. The blog is one level nested, and therefore links toward the parent folder

```njk
{% set staticFolder = '../static' %}
```

The blog posts are two levels deep, and link to the parent's parent.

For the other meta tags I need more research in the best way to incorporate the page's title, description, or again open graph images.

### code

Testing the website with a few articles, I stumbled on a pesky mishap: the code injected through the renderer and the `fence` rule is not escaped. This means that HTML snippets actually fabricate the elements they describe.

```html
<button>Like</button>
```

The previous snippet would actually display the button. Interestingly, it is enough to escape the opening tag `<`.

```js
const { info, content } = token;
const code = content.replace(/</g, "&lt;");
```

More research is warranted on which character to actually display though. Ideally, I'd use the nunjuck filter `escape`, but this doesn't seem available in a JS file.

### margin-top

In the post template, update the margin-top property if the post doesn't have keywords.

In this instance there is no section describing the icons, and there's no need to add `4.5rem` of whitespace at the top.

### deploy

I've added an extra article to describe how I intend to publish the website in three days time. I'm also experimenting with netlify, and the post serves as a reminder that the website in under construction.