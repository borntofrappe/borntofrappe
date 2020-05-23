const puppeteer = require('puppeteer');
const template = require('./blog/template-multi');

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
    height,
  });

  console.log('Posts:');
  for (const { title, keywords } of posts) {
    const html = template(title, keywords);
    const name = title.toLowerCase().replace(/ /g, '-');
    const path = `blog/${name}.png`;

    await page.setContent(html, { waitUntil: 'networkidle0' });
    console.log(`  ${title}`);

    await page.screenshot({ path });
  }
  await browser.close();
  console.log(`\n**All done**`);
  console.log(`See **./blog** for the png files.`);
})();
