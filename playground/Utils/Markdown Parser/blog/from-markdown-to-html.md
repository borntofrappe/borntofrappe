---
title: From markdown to HTML
date: 2020-2-24
brief: A rambling explanation behind a script that could have used a few more packages.
tags: html, js, node
---

Using the `fs` module and the `marked` package, I set out to take this markdown file, consider the front matter and then spit out the matching markup.

Bonus points if I manage to add syntax highlighting [shiki](https://github.com/octref/shiki).

## fs and path

To find the actual file, it seems I need the `path` module as well.

```js
const fs = require("fs");
const path = require("path");
```

In the current folder, I'm able to read the files with two variants.

- async

```js
fs.readdir("./", (err, files) => {
  files.forEach((file) => {
    if (path.extname(file) === ".md") {
      console.log(file);
    }
  });
});
```

- sync

```js
const files = fs.readdirSync("./", "utf-8");
files.forEach((file) => {
  if (path.extname(file) === ".md") {
    console.log(file);
  }
});
```

I'm debating which is the best approach. Reading the markdown files seems important enough to warrant the sync, blocking variant, but I associate am open to suggestions/further research.

Let's stick with the latter for the time being.

To read the content of the actual file, once again, there's an async and sync variant.

```js
const markdownFiles = files.filter((file) => path.extname(file) === ".md");
markdownFiles.forEach((file) => {
  const markdown = fs.readFileSync(`./${file}`, { encoding: "utf-8" });
  console.log(markdown);
});
```

I used the `filter` method to consider only the markdown files. `markdown` describes now the actual content. A string.

## marked and front matter

The `markdown` string can be processed with the `marked` module.

```js
// assuming you installed & required marked
console.log(marked(markdown));
```

Handily enough, I notice the markdown includes a `language-*` class for every code snippet. Might come in handy later. The headings are also given an `id` attribute. Helpful to navigate the document.

Enough dilly-dallying though. While marked provides the markdown, it does not consider the front matter. Front matter as in the key-value pairs specified at the top of the `.md` file, in between `---` dashes `---`.

I'm sure there's a better way to do this, but the following regular expression does the trick.

```js
/---\r\n(\w+:\s.+\r\n)+---\r\n/;
```

This portion in particular should improved to identify the entire lines

```js
/(\w+:\s.+\r\n)/;
```

A word, a colon, a white space character, anything else before the carriage return and the new line character. With this, I am already able to strip out the front matter to use the `marked` function only on the actual content of the document.

```js
const markdown = fs.readFileSync(`./${file}`, { encoding: "utf-8" });
const frontmatter = markdown.match(/---\r\n(\w+:\s.+\r\n)+---\r\n/)[0];
const content = markdown.slice(frontmatter.length).trim();
```

Of course, I need the front matter and the associated key-value pairs.

I use a similar regular expression, to separate the key value pairs an array.

```js
const keyValue = frontmatter.match(/\w+:\s.+/g);
```

This provides an array of strings, like `'title: From markdown to HTML', 'date: 2020-01-20'`.

Ultimately, I want to create an object describing the different keys, alongside the markup processed through `marked`. With this in mind, I first map through the array.

```js
const keyValue = frontmatter
  // array of strings
  .match(/\w+:\s.+/g)
  // 2d array describing the key-value pairs
  .map((pair) => pair.split(": "));
```

And then create an object describing the different pairs in the desired schema.

```js
const keyValue = frontmatter
  // array of strings
  .match(/\w+:\s.+/g)
  // 2d array describing the key-value pairs
  .map((pair) => pair.split(": "))
  // object separating the pairs
  .reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
```

Took me a while to set it up, but it seems to work. With this object, I can finally add an `html` field with the `marked` content and complete the necessary instructions.

```js
const content = markdown.slice(frontmatter.length).trim();

console.log(
  Object.assign(keyValue, {
    html: marked(content),
  })
);
```

Instead of logging the object in the console however, I finally change the `forEach` method to a map, and return the data structure in a posts array.

```js
const posts = markdownFiles.map(file => {
  // create desired data structure
  return Object.assign(keyValue, { html: marked(content) });
}
```

This is what is ultimately picked up by sapper, but already I can create `.html` files using the `writeFileSync` function.

```js
posts.forEach(({ title, html }) => {
  fs.writeFileSync(`${title.replace(/ /g, "-").toLowerCase()}.html`, html);
});
```

There will be a better way to create the `slug`, but it's something to consider in sapper itself.

As a matter of fact, I can just use the name of the file for the slug.

```js
const slug = file.slice(0, -3);
```

`-3` being the number of characters in the extension.

I slightly polished the code and decided to create two folders in which to separate the actual content: `blog` contains the markdown files to be read and parsed, `pages` describes where the markup is going to be generated.
