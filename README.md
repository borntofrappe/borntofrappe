# borntofrappe

> A landing page and a blog.

## Notes

> everything that goes in the development of this website.

### Sapper Template

```code
npx degit "sveltejs/sapper-template#rollup" borntofrappe
cd borntofrappe
npm install
npm run dev
```

### Git and Github

```code
git init
git add .
git commit -m "set up sapper template"
```

Create a `borntofrappe` repository and add as a remote.

```code
git remote add origin https://github.com/borntofrappe/borntofrappe.git
git push -u origin master
```

### Marked, path and fs

```code
npm install marked
```

In `_posts.js`

```js
import fs from "fs";
import path from "path";
import marked from "marked";
```

The idea is to create articles out of markdown files.

With a first rather dumb omplementation, consider the content in the markdown files as follows

```js
const posts = [];

fs.readdirSync("content/blog").map(file => {
  if (path.extname(file) === ".md") {
    const slug = file.slice(0, -3);
    const title = slug.replace("-", " ");
    const markdown = fs.readFileSync(`content/blog/${file}`, "utf-8");
    const html = marked(markdown);
    posts.push({
      title,
      slug,
      html
    });
  }
});
```

Effectively replacing the hard coded array with the markdown files.

### Frontmatter

The issue comes then how to identify the front matter and separate the rest of the article. The front-matter might provide helpful information regarding a title, date, even a series of tags or the technology being used.
