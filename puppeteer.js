const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const puppeteer = require("puppeteer");
const template = require("./src/utils/template");

console.log('');
const input = {
  path: './src/blog/',
  extension: '.md',
}
const output = {
  path: 'dist/static/',
  extension: '.png',
}
const files = fs.readdirSync(input.path);

const posts = files
  .filter((file) => {
    const name = file.slice(0, -input.extension.length);
    const hasImage = fs.existsSync(`${output.path}${name}${output.extension}`);
    return path.extname(file) === input.extension && !hasImage;
  })
  .map((file) => {
    const markdown = fs.readFileSync(`${input.path}/${file}`);
    const { data } = matter(markdown);
    const { title, keywords } = data;
    return {
      name: file.slice(0, -input.extension.length),
      title,
      keywords,
    };
  });

const headless = true;
(async () => {
  const browser = await puppeteer.launch({ headless });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1000,
    height: 500,
  });

  for (const { name, title, keywords } of posts) {
    console.log(`Writing ${output.path}${name}${output.extension} from ${input.path}${name}${input.extension}`)

    const html = template(title, keywords);
    await page.setContent(html, { waitUntil: "networkidle0" });
    await page.screenshot({ path: `${output.path}${name}${output.extension}` });
  }
  await browser.close();
  console.log(`Wrote ${posts.length} files`)
})();
