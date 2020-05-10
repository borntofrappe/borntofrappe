const fs = require('fs');
const path = require('path');
const marked = require('marked');

const input = 'blog';
const output = 'pages';
const extnameInput = '.md';
const extnameOutput = '.html';

// check if the output folder exists, create one
if (!fs.existsSync(output)) {
  fs.mkdirSync(output);
}

// read input files
console.log(`Reading **${extnameInput}** files in **${input}**`);
const files = fs.readdirSync(`${input}`, 'utf-8');
const markdownFiles = files.filter(file => path.extname(file) === extnameInput);

// write output file
console.log(`Writing **${extnameOutput}** files in **${output}**`);
markdownFiles.forEach(markdownFile => {
  const slug = markdownFile.slice(0, -extnameInput.length);
  const markdown = fs.readFileSync(`${input}/${markdownFile}`, {
    encoding: 'utf-8',
  });
  const markup = marked(markdown);
  fs.writeFileSync(`${output}/${slug}${extnameOutput}`, markup);
});

console.log(`\n**All done**`);
