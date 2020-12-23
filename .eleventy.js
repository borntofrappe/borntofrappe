const highlighter = require('highlight.js')
const markdownIt = require('markdown-it');
const icons = require('./src/_data/icons');

const dateFilter = require('./src/filters/date-filter');
const breadcrumbFilter = require('./src/filters/breadcrumb-filter');
const titleFilter = require('./src/filters/title-filter');
const fileNameFilter = require('./src/filters/file-name-filter');

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

    return `<a href="#${id}"><span class="visually-hidden">Permalink</span>${icons.permalink}</a></${tag}>`;
  };

  markdownLibrary.options.highlight = function(str, lang) {
    const icon = icons[lang] ? icons[lang] : '';
    return `<div class="code"><span aria-label="Language">${icon} ${lang}</span><pre><code>${highlighter.highlight(lang, str).value}</code></pre></div>`;
  }

  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.addCollection('blog', function (collection) {
    return collection
      .getFilteredByGlob('./src/blog/*.md')
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('breadcrumbFilter', breadcrumbFilter);
  eleventyConfig.addFilter('titleFilter', titleFilter);
  eleventyConfig.addFilter('fileNameFilter', fileNameFilter);

  eleventyConfig.addPassthroughCopy('./src/static/');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
