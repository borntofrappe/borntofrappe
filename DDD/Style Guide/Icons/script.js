const path = require('path');
const fs = require('fs');

const icons = {};
const extname = '.svg';

function readFiles(folder = '.') {
  const files = fs.readdirSync(folder, { withFileTypes: true });

  files.forEach(file => {
    const { name } = file;
    if (file.isDirectory()) {
      readFiles(`${folder}/${name}`);
    } else if (path.extname(name) === extname) {
      const key = path
        .basename(name, extname)
        .split('-')
        .map((v, i) => (i === 0 ? v : `${v[0].toUpperCase()}${v.slice(1)}`))
        .join('');

      const value = fs.readFileSync(`${folder}/${name}`, {
        encoding: 'utf-8',
      });

      if (!icons[key]) {
        const syntax = value.replace(/[\r\n]/g, '').replace(/\>\s+\</g, '><');
        const location = `${folder}/${name}`;

        icons[key] = {
          syntax,
          location,
        };
      } else {
        console.log(
          `Duplicate icon: \x1b[33m${
            icons[key].location
          }\x1b[0m and \x1b[33m${folder}/${name}\x1b[0m`
        );
      }
    }
  });
}
readFiles();

const entries = Object.entries(icons);

// icons.js
console.log('Creating icons object...see icons.js');
fs.writeFileSync(
  'icons.js',
  `const icons = {${entries
    .map(([key, value]) => `\n\t${key}: \`${value.syntax}\`,`)
    .join('')}\n}`,
  'utf-8'
);

console.log('Creating demo...see index.html0');
// index.html
const markup = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Icons</title>
    <style>
      main {
        width: 90vw;
        max-width: 30rem;
        margin: 1rem auto;
        color: hsl(0, 0%, 5%);
        text-align: center;
      }
      article {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
      }
      article h2 {
        font-family: monospace;
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: 1rem;
      }
      article svg {
        width: 3rem;
        height: auto;
        display: block:
      }
      @supports (display: grid) {
        main {
          display: grid;
          grid-template-columns: repeat(auto-fit, 5rem);
          gap: 0.5rem;
          justify-content: center;
        }
      }
    </style>
  </head>
  <body>
      <main>
        ${entries
          .map(
            ([name, { syntax }]) => `
          <article>
            <h2>${name}</h2>
            ${syntax}
          </article>
        `
          )
          .join('')}
      </main>
  </body>
</html>
`.trim();

fs.writeFileSync('index.html', markup);
