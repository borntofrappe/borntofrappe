const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const puppeteer = require("puppeteer");
const template = require("./src/utils/template");

console.log("");
const input = {
  path: "./src/blog/",
  extension: ".md",
};
const output = {
  path: "dist/static/",
  extension: ".png",
};
const files = fs.readdirSync(input.path);

const posts = files
  .filter(file => {
    const name = file.slice(0, -input.extension.length);
    const hasImage = fs.existsSync(`${output.path}${name}${output.extension}`);
    return path.extname(file) === input.extension && !hasImage;
  })
  .map(file => {
    const markdown = fs.readFileSync(`${input.path}/${file}`);
    const { data } = matter(markdown);
    const { title, keywords } = data;
    return {
      name: file.slice(0, -input.extension.length),
      title,
      keywords,
    };
  });

const { length } = posts;
  
if(length > 0) {
  const width = 1000;
  const height = 500;

  const headless = true;
  (async () => {
    const browser = await puppeteer.launch({ headless });
    const page = await browser.newPage();
    await page.setViewport({
      width,
      height: height * length,
    });
  
    const html = template(posts);
    await page.setContent(html, { waitUntil: "networkidle0" });
  
    for (const [index, post] of posts.entries()) {
      const { name } = post;
      const x = 0;
      const y = index * height;
  
      const outputPath = `${output.path}${name}${output.extension}`;
      console.log(
        `Writing ${outputPath} from ${input.path}${name}${input.extension}`
      );
      await page.screenshot({ path: outputPath, clip: { x, y, width, height } });
    }
    await browser.close();
    console.log(`Wrote ${posts.length} files`);
  })();
}
