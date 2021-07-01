import shiki from 'shiki';
import icons from './src/lib/icons.js';

async function highlighter(code, lang) {
  const shikiHighlighter = await shiki.getHighlighter({ theme:  'material-darker' });
  const shikiCode = shikiHighlighter.codeToHtml(code, lang);

  // https://github.com/pngwn/MDsveX/issues/117
  return `{@html \`<div class="code"><span aria-label="Language">
    ${icons[lang] || icons.editor} 
    ${lang || 'code'}</span>${shikiCode.replace(/\`/g, '&#96;').replace(/\$/g, '\\$').replace(/\{/g, '&#123;')}\`}`;
}

const config = {
  extensions: ['.md', '.svx'],
  highlight: {
    highlighter,
  },
};

export default config;
