const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const folder = 'static';
const extension = '.html';

console.log(`Reading files in **./${folder}**`);
const files = fs.readdirSync(folder);
const pages = files
    .filter(file => path.extname(file) === extension)
    .map(file => {
        const title = file.slice(0, -extension.length);

        return ({
            title,
            file: `${folder}/${file}`,
    });
});

console.log(`Launching **puppeteer** for ${pages.length} pages`);
const headless = true;
(async () => {
    const browser = await puppeteer.launch({headless});
    const page = await browser.newPage();
      await page.setViewport({
      width: 1000,
      height: 500
    });
  
    for(const {title, file} of pages) {
      await page.goto(path.resolve(file), { waitUntil: 'networkidle0'});
      await page.screenshot({path: `${folder}/${title}.png`});
    }
    await browser.close();
    console.log(`\n**All done**`);
    console.log(`See **./${folder}** for the png files.`);
  })();

