import shiki from 'shiki';
import slug from 'rehype-slug';
import autolink from 'rehype-autolink-headings';
import icons from './src/lib/icons.js';

const autolinkOptions = {
  behavior: 'append',
  properties: {},
  content: {
    type: 'element',
    tagName: 'span',
    properties: { className: ['visually-hidden'] },
    children: [],
  },
};

async function highlighter(code, lang) {
  const shikiHighlighter = await shiki.getHighlighter({
    theme: 'material-darker',
  });
  const shikiCode = shikiHighlighter.codeToHtml(code, lang);

  // https://github.com/pngwn/MDsveX/issues/117
  return `{@html \`<div class="code"><span aria-label="Language">${icons[
    lang
  ] || icons.editor} ${lang}</span>${shikiCode
    .replace(/`/g, '&#96;')
    .replace(/\{/g, '&#123;')
    .replace(/<pre .+?>/, '<pre>')}</div>\`}`;
}

const config = {
  extensions: ['.md', '.svx'],
  smartypants: {
    quotes: false,
    ellipses: false,
    backticks: false,
    dashes: 'oldschool',
  },
  rehypePlugins: [slug, [autolink, autolinkOptions]],
  highlight: {
    highlighter,
  },
};

export default config;
