// since the file begins with an underscore, Sapper won't create a route for it
const path = require("path");
const fs = require("fs");
const marked = require('marked');

const extname = '.md';

const files = fs.readdirSync('writing', 'utf-8');
const markdownFiles = files.filter((file) => path.extname(file) === extname);

const posts = markdownFiles.map(file => {
  const slug = file.slice(0, -extname.length);
  const markdown = fs.readFileSync(`writing/${file}`, { encoding: 'utf-8' });
  const frontmatter = markdown.match(/---\r\n(\w+:\s.+\r\n)+---\r\n/)[0];
  const keyValue = frontmatter.match(/\w+:\s.+/g).map(pair => pair.split(": ")).reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
  const content = markdown.slice(frontmatter.length).trim();

  return Object.assign(keyValue, { slug, html: marked(content) });
})

export default posts;
