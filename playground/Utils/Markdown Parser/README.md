# Markdown Parser

A tentative script to parse markdown to HTML code.

11ty considers the `.md` extension natively, but I figured I'd learn a thing or two by running my own version.

## script-parser

In its "simplest" rendition, the script needs to read `.md` files, create the matching markup, and write the result in `.html` files.

### Modules

- `fs`, to interact with local folders and files

- `path`, to check for the extension of the newfound files

- `marked`, to actually parse the contents of the markdown files

`marked` is actually the only modules which needs to be installed, as the first two are provided natively by node.

```bash
npm install marked
```

### Setup

Add four variables to describe the input and output folder, as well as the extension for the files in either one.

```js
const input = "blog";
const output = "pages";
const extnameInput = ".md";
const extnameOutput = ".html";
```

### Read

To begin with, start by checking if the output folder exists. If it doesn't, create one.

```js
if (!fs.existsSync(output)) {
  fs.mkdirSync(output);
}
```

I'm using the `sync` variant of the `fs` functions, so that the code proceeds in order, completing one method before moving on to the next one.

To read, use the `readdirSync` function.

```js
const files = fs.readdirSync(`${input}`, "utf-8");
```

The blog folder is populated by markdown files only, but just to be safe, I use a `filter` function to exclude files not matching the given value.

```js
const markdownFiles = files.filter((file) => path.extname(file) === extnameInput);
```

To read into the files, use `readFileSync`. Loop through the array of files, and apply the function on each individual one.

```js
markdownFiles.forEach((markdownFile) => {
  const markdown = fs.readFileSync(`${input}/${markdownFile}`, { encoding: "utf-8" });
});
```

And that takes care of retrieving the actual content.

### Parse

This is where `marked` kicks in, and allows to obtain the matching HTML elements.

```js
const markup = marked(markdown);
```

### Write

For the files' own name, I use the name of the `.md` files, excluding the extension.

```js
const slug = markdownFile.slice(0, -extnameInput.length);
```

To actually write, use `writeFileSync` in the output folder.

```js
fs.writeFileSync(`${output}/${slug}${extnameOutput}`, markup);
```

## script-frontmatter

Leveling up from the first version, the script considers the frontmatter included at the top of every `.md` file. If included, that is.

```md
---
title: Up and running
date: 2020-5-10
---
```

Set up an object in which to distill the frontmatter.

```js
const frontmatter = {};
```

The idea is to have the data in key-value pairs, and populate the object as follows:

```js
{
  title: 'Up and running',
  date: '2020-5-10',
}
```

Start by considering the string beginning with `---` and ending with the same pattern `---`.

```js
const match = markdown.match(/---\r\n(\w+:\s.+\r\n)+---\r\n/);
```

I've toyed around with the syntax, and realized that `\r` and `\n` were needed to consider the line break/new line characters included by default in the `.md` files.

If a match is found, add the value to another variable.

```js
const string = match ? match[0] : "";
```

Based on the length of the string finally, use the `marked` function on the file excluding the frontmatter.

```js
const content = markdown.slice(string.length);
```

As far as the markdown parser is concerned, that takes care of producing the desired markup, but I spent a line or two in populating the actual object with the key-value pairs.

```js
if (string) {
}
```

If there is a string, use yet another regular expression, this time to distill the values separated by a colon

```js
string.match(/\w+:\s.+/g);
```

Loop then through the newfound matches, and destructure the desired information leveraging the same colon character

```js
string.match(/\w+:\s.+/g).forEach((match) => {
  const [key, value] = match.split(": ");
});
```

Finally, use both to populate the object.

```js
const [key, value] = match.split(": ");
frontmatter[key] = value;
```

## script-renderer

A couple of components, as designed in the components folder, require an adjustment in terms of markup. More specifically:

- each heading includes an anchor link element to work as a permalink

- each code snippet adds a container displaying the language

To customize the markup, work on an instance of the renderer.

```js
const renderer = new marked.Renderer();
```

Change the necessary elements following the instructions provided by [the docs](https://marked.js.org/#/USING_PRO.md#renderer).

For the heading for instance, `renderer.heading` provides a function which input is the text, and level of the heading (h2, h3, or again h4). Use this information to produce the desired markup.

```js
renderer.heading = (text, level) => {};
```

For the heading, it is worth noting that by default, `marked` gives an `id` to the `<h*>` elements. Here, the `id` is specified to have the value match with the `href` attribute of the nested anchor link.

Once every option in the renderer is updated, specify the renderer in the `marked()` function.

```js
const markup = marked(markdown, { renderer });
```

And that takes care of producing the desired, custom markup.

## script-syntax

Add syntax highlighting with `shiki`.

```bash
npm install shiki
```

[The docs](https://shiki.matsu.io/) pretty much describe everything here. It works asynchronously:

1. fetch a theme with `getHighlighter`

   ```js
   shiki.getHighlighter({
     theme: "Material-Theme-Palenight-High-Contrast",
   });
   ```

2. in the `then` which follows add the previous script

   ```js
   shiki
     .getHighlighter({
       theme: "Material-Theme-Palenight-High-Contrast",
     })
     .then((highlighter) => {
       // here!
     });
   ```

3. instead of adding the code as-is, use the `highlighter.codeToHtml` method instead

   ```js
   shiki
     .getHighlighter({
       theme: "Material-Theme-Palenight-High-Contrast",
     })
     .then((highlighter) => {
       // ...

       renderer.code = (code, lang) => `<pre><div>${icons[lang]}<span>${lang}</span></div>${highlighter.codeToHtml(code, lang)}</pre>`;
     });
   ```

## script-marked

Replace the logic assuming the frontmatter using regular expressions with [`gray-matter`](https://www.npmjs.com/package/gray-matter).

This package allows for a concise and robust way to destructure the frontmatter and data out of an input string.

```js
const { content, data: frontmatter } = matter(markdown);
```

## script-markdown-it

In light of 11ty's own pick for a markdown parser, recreate the script using `markdown-it`.

It takes a bit of adjustment when it comes to the renderer, but it's worth the extra effort.

### fence

The syntax for the code included between ``` ticks is modified to create the following markup:

```html
<div>
<span>{{icon[lang]}} {{name}}.{{lang}}</span>
<pre><code>{{code}}</code></pre>
</div>
```

The idea of `name.lang` is to support both of the following markdown options

- language only: `css`

  ```css
  p {
    margin-top: 1rem;
  }
  ```

- language following the name of the file: `style.css`

  ```style.css
  p {
    margin-top: 1rem;
  }
  ```

### heading

Without direct access to the headings, recreate the permalink option by modifying the opening and closing tag.

Opening the heading, specify a heading based on the text of the inline token which follows.

```html
<h2 id="dash-separated-text">
```

Closing the heading, prepend an anchor link element referencing the same value.

```html
<a href="#dash-separated-text">
  {{icons.permalink}}
  <span class="visually-hidden">
  permalink
  </span>
</a></h2>
```

Rudimentary, will eventually break, but works.
