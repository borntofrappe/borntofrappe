import adapter from '@sveltejs/adapter-netlify';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';
import slug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import icons from './icons.js';

async function highlighter(code, lang) {
	const shikiHighlighter = await getHighlighter({ theme: 'dracula-soft' });
	const html = escapeSvelte(shikiHighlighter.codeToHtml(code, { lang }));

	return `{@html \`<div class="code">
    <span>${lang}${icons[lang] || icons.bug}</span>
    ${html}
  </div>\`}`;
}

const mdsvexConfig = {
	extensions: ['.md', '.svx'],
	smartypants: false,
	rehypePlugins: [
		slug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'append',
				properties: {},
				content: {
					type: 'element',
					tagName: 'span',
					properties: { className: 'visually-hidden' },
					children: [{ type: 'text', value: 'Permalink' }]
				}
			}
		]
	],
	highlight: {
		highlighter
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: mdsvex(mdsvexConfig),
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter(),

		target: '#svelte'
	}
};

export default config;
