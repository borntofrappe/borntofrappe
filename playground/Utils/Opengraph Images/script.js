const puppeteer = require('puppeteer');
const template = require('./blog/template');

const posts = [
  {
    title: 'Up and running',
  },
  {
    title: 'className and SVG elements',
    keywords: ['js', 'svg'],
  },
  {
    title: 'CSS animation paused',
    keywords: ['css'],
  },
  {
    title: 'Fonts and font-face rules',
    keywords: ['css'],
  },
];

const width = 1000;
const height = 500;
const { length } = posts;

console.log(`Launching **puppeteer** for ${length} posts`);
const headless = true;
(async () => {
  const browser = await puppeteer.launch({ headless });
  const page = await browser.newPage();
  await page.setViewport({
    width,
    height: height * length,
  });

  const html = template(posts);
  await page.setContent(html, { waitUntil: 'networkidle0' });
  console.log('Posts:');
  for (const [index, post] of posts.entries()) {
    const { title } = post;
    console.log(`  ${title}`);

    const name = title.toLowerCase().replace(/ /g, '-');
    const path = `blog/${name}.png`;

    const x = 0;
    const y = index * height;

    await page.screenshot({ path, clip: { x, y, width, height } });
  }

  await browser.close();
  console.log(`\n**All done**`);
  console.log(`See **./blog** for the png files.`);
})();
