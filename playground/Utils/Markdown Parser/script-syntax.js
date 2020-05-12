const fs = require('fs');
const path = require('path');
const marked = require('marked');
const shiki = require('shiki');

const input = 'blog';
const output = 'pages';
const extnameInput = '.md';
const extnameOutput = '.html';

const icons = {
  css: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z"/></g></svg>`,
  html: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.004 85L.001 50.001l34.998-15.003L40.003-50h-80.007zm14.003 17.5h52l-.65 11.049h-39.649l.651 11.054H24.7L22.751 22.75 0 32.503l-22.75-9.752-.65-11.05h11.049l.325 5.525 12.026 5.2 12.026-5.2.977-16.574H-24.05L-25.998-32.5z"/></g></svg>`,
  js: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-50-50V50.8h38.4c-8.88 0-16.08-7.2-16.08-16.08v-5.04h10.08v5.04c0 3.36 2.64 6 6 6s6-2.64 6-6V.88H4.48v33.84c0 8.88-7.2 16.08-16.08 16.08H9.52V40.72H24.64c2.88 0 5.04-2.208 5.04-5.04s-2.184-5.04-5.04-5.04c-8.4 0-15.12-6.72-15.12-15.12S16.24.4 24.64.4h13.2v10.08h-13.2c-2.88 0-5.04 2.208-5.04 5.04s2.184 5.04 5.04 5.04c8.4 0 15.12 6.72 15.12 15.12S33.04 50.8 24.64 50.8h24V-50h-100.8z"/></g></svg>`,
  permalink: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"><path stroke-dasharray="140 26" stroke-dashoffset="-18" d="M -24 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /><path transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-18" d="M -24 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /></g></svg>`,
};

// syntax highlighting
shiki
  .getHighlighter({
    theme: 'Material-Theme-Palenight-High-Contrast',
  })
  .then(highlighter => {
    // check if the output folder exists, create one
    if (!fs.existsSync(output)) {
      fs.mkdirSync(output);
    }

    // modify default renderer
    const renderer = new marked.Renderer();

    renderer.heading = (text, level) => {
      const id = text
        .split(' ')
        .map(word => word.toLowerCase())
        .join('-');

      return `<h${level} id="${id}" class="permalink">${text}<a href="#${id}" aria-label="permalink">${
        icons.permalink
      }</a></h${level}>`;
    };

    renderer.code = (code, lang) =>
      `<pre><div>${
        icons[lang]
      }<span>${lang}</span></div>${highlighter.codeToHtml(code, lang)}</pre>`;

    // read input files
    console.log(`Reading **${extnameInput}** files in **${input}**`);
    const files = fs.readdirSync(`${input}`, 'utf-8');
    const markdownFiles = files.filter(
      file => path.extname(file) === extnameInput
    );

    // write output file
    console.log(`Writing **${extnameOutput}** files in **${output}**`);
    markdownFiles.forEach(markdownFile => {
      const slug = markdownFile.slice(0, -extnameInput.length);
      const markdown = fs.readFileSync(`${input}/${markdownFile}`, {
        encoding: 'utf-8',
      });

      // frontmatter object
      const frontmatter = {};
      const match = markdown.match(/---\r\n(\w+:\s.+\r\n)+---\r\n/);
      const string = match ? match[0] : '';
      if (string) {
        string.match(/\w+:\s.+/g).forEach(match => {
          const [key, value] = match.split(': ');
          frontmatter[key] = value;
        });
      }

      // parse the content past the frontmatter
      const content = markdown.slice(string.length);
      const markup = marked(content, { renderer });
      fs.writeFileSync(`${output}/${slug}${extnameOutput}`, markup);
    });

    console.log(`\n**All done**`);
  });
