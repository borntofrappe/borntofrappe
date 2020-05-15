const markdownIt = require('markdown-it');
const icons = require('./src/_data/icons');

module.exports = (eleventyConfig) => {
  const markdownLibrary = markdownIt();
  markdownLibrary.renderer.rules.heading_open = function(tokens, index) {
    const { tag } = tokens[index];
    const { content } = tokens[index + 1];
    const id = content.toLowerCase().replace(/ /g, '-');
  
    return `<${tag} id="${id}" class="permalink">`;
  };
  markdownLibrary.renderer.rules.heading_close = function(tokens, index) {
    const { tag } = tokens[index];
    const { content } = tokens[index - 1];
    const id = content.toLowerCase().replace(/ /g, '-');
  
    return `<a href="#${id}"><span class="visually-hidden">permalink</span>${icons.permalink}</a></${tag}>`;
  };
  
  markdownLibrary.renderer.rules.fence = function(tokens, index) {
    const token = tokens[index];
    const { info, content: code } = token;
    let [name, lang] = info.split('.');
    if (!lang) {
      lang = name;
    }
    const icon = icons[lang] ? icons[lang] : '';
  
    return `<div class="code"><span>${icon} ${info}</span><pre><code>${code}</code></pre></div>`;
  };

  eleventyConfig.setLibrary('md', markdownLibrary);


  eleventyConfig.addCollection('blog', function(collection) {
    return collection.getFilteredByGlob('./src/blog/*.md').sort(function(a, b) {
      const aDate = a.data.datetime || a.date;
      const bDate = b.data.datetime || b.date;
      return bDate - aDate;
    });
  });

  eleventyConfig.addFilter("formatdate", function(datetime) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const year = datetime.getFullYear();
    const month = datetime.getMonth();
    const day = datetime.getDate();

    return `${months[month]} ${day}, ${year}`;
  });


  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};