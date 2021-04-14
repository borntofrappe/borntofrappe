const h = require('hastscript');
const s = require('hastscript/svg');
const slug = require('rehype-slug');
const permalink = require('rehype-autolink-headings');
const shiki = require('shiki');
const icons = require('./icons.cjs');

const permalinkOptions = {
  behavior: 'append',
  properties: {},
  content() {
    return [
      h('span.visually-hidden', 'Permalink'),
      s(
        'svg',
        {
          ariaHidden: 'true',
          ariaFocusable: 'false',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '-50 -50 100 100',
          width: '1em',
          height: '1em',
        },
        s(
          'g',
          {
            transform: 'rotate(-45)',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '10',
            strokeLinejoin: 'round',
            strokeLinecap: 'round',
          },
          [
            s('path', {
              strokeDasharray: '140 26',
              strokeDashoffset: '-20',
              d: 'M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26',
            }),
            s('path', {
              transform: 'scale(-1 -1)',
              strokeDasharray: '140 26',
              strokeDashoffset: '-20',
              d: 'M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26',
            }),
          ]
        )
      ),
    ];
  },
};

async function highlighter(code, lang) {
  const highlighter = await shiki.getHighlighter({ theme: 'nord' });
  const highlightedCode = highlighter.codeToHtml(code, lang);

  /*
  // not possible to just return the highlighted syntax code as it may conflict with Svelte rules
  // https://github.com/pngwn/MDsveX/issues/117#issuecomment-674253491
  
  // return `<pre><code>${code}</code></pre>`;
  return `{@html \`<pre><code>${code}</code></pre>\`}`;
  */

  return `{@html \`<div class="code"><span>${
    icons[lang] ? icons[lang] : icons.bug
  } ${lang}</span>${highlightedCode.replace(/<pre .+?>/, '<pre>')}</div>\` }`;
}

module.exports = {
  smartypants: {
    dashes: 'oldschool',
  },
  rehypePlugins: [slug, [permalink, permalinkOptions]],
  highlight: {
    highlighter,
  },
};
