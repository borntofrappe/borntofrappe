const path = require('path');
const fs = require('fs');

const icons = {};

const input = {
  path: "./src/utils/icons/",
  extension: ".svg",
};

const output =  "./src/_data/icons.js";

function readFiles(folder) {
  const files = fs.readdirSync(folder, { withFileTypes: true });

  files.forEach(file => {
    const { name } = file;
    if (file.isDirectory()) {
      readFiles(`${folder}/${name}`);
    } else if (path.extname(name) === input.extension) {
      const key = path
        .basename(name, input.extension)
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
          `\tduplicate icon: \x1b[33m${
            icons[key].location
          }\x1b[0m and \x1b[33m${folder}/${name}\x1b[0m`
        );
      }
    }
  });
}

console.log('Reading files...');
readFiles(input.path);

const entries = Object.entries(icons);

// icons.js
console.log(`Writing ${output}`);
fs.writeFileSync(
  output,
  `module.exports = {${entries
    .map(([key, value]) => `\n\t${key}: \`${value.syntax}\`,`)
    .join('')}\n}`,
  'utf-8'
);
console.log('Wrote 1 file\n');
