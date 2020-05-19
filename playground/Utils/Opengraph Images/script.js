const frontmatter = require('./blog/frontmatter');
const template = require('./blog/template');
const puppeteer = require('puppeteer');

const pages = frontmatter.map(({title, keywords}) => ({
  title,
  keywords,
  html: template(title, keywords),
}));

console.log(`Launching **puppeteer** for ${pages.length} pages`);
const headless = true;
(async () => {
    const browser = await puppeteer.launch({headless});
    const page = await browser.newPage();
      await page.setViewport({
      width: 1000,
      height: 500
    });
  
    console.log('Pages:')
    for(const {title, html} of pages) {
      console.log(`  ${title}`);
      const name = title.toLowerCase().replace(/ /g, "-");
      
      await page.setContent(html, { waitUntil: 'networkidle0'});
      await page.screenshot({path: `blog/${name}.png`});
    }
    await browser.close();
    console.log(`\n**All done**`);
    console.log(`See **./blog** for the png files.`);
  })();

