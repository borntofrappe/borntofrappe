const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const puppeteer = require("puppeteer");
const template = require("./src/utils/template");

const folder = "./src/blog";
const extension = ".md";

const files = fs.readdirSync(folder);
const frontmatter = files
  .filter((file) => path.extname(file) === extension)
  .map((file) => {
    const markdown = fs.readFileSync(`${folder}/${file}`);
    const { data } = matter(markdown);
    const { title, keywords } = data;
    return {
      name: file.slice(0, -extension.length),
      title,
      keywords,
    };
  });

const headless = false;
(async () => {
  const browser = await puppeteer.launch({ headless });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1000,
    height: 500,
  });

  for (const { name, title, keywords } of frontmatter) {
    const html = template(title, keywords);
    await page.setContent(html, { waitUntil: "networkidle0" });
    await page.screenshot({ path: `dist/static/${name}.png` });
  }
  await browser.close();
})();
