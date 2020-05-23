const markdownIt = require('markdown-it');
const icons = require('./src/_data/icons');

const dateFilter = require('./src/filters/date-filter');
const urlFilter = require('./src/filters/url-filter');

module.exports = function (eleventyConfig) {
  const markdownLibrary = markdownIt();
  markdownLibrary.renderer.rules.heading_open = function (tokens, index) {
    const { tag } = tokens[index];
    const { content } = tokens[index + 1];
    const id = content.toLowerCase().replace(/ /g, '-');

    return `<${tag} id="${id}" class="permalink">`;
  };
  markdownLibrary.renderer.rules.heading_close = function (tokens, index) {
    const { tag } = tokens[index];
    const { content } = tokens[index - 1];
    const id = content.toLowerCase().replace(/ /g, '-');

    return `<a href="#${id}"><span class="visually-hidden">permalink</span>${icons.permalink}</a></${tag}>`;
  };

  markdownLibrary.renderer.rules.fence = function (tokens, index) {
    const token = tokens[index];
    const { info, content } = token;
    let [name, lang] = info.split('.');
    if (!lang) {
      lang = name;
    }
    const icon = icons[lang] ? icons[lang] : '';
    const code = content.replace(/</g, '&lt;');

    return `<div class="code"><span>${icon} ${info}</span><pre><code>${code}</code></pre></div>`;
  };
  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.addCollection('blog', function (collection) {
    return collection
      .getFilteredByGlob('./src/blog/*.md')
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('urlFilter', urlFilter);

  eleventyConfig.addPassthroughCopy('./src/static/');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
