import icons from './src/lib/icons.js';
import shiki from 'shiki';
import slug from 'rehype-slug';
import autolink from 'rehype-autolink-headings';

const autolinkOptions = {
	behavior: 'append',
	properties: {},
	content: {
		type: 'element',
		tagName: 'span',
		properties: { className: 'visually-hidden' },
		children: [{ type: 'text', value: 'Permalink' }]
	}
};

async function highlighter(code, lang) {
	const shikiHighlighter = await shiki.getHighlighter({
		theme: 'material-darker'
	});
	const shikiCode = shikiHighlighter.codeToHtml(code, lang);

	return `{@html \`<div class="code"><span aria-label="Language">${
		icons[lang] || icons.editor
	} ${lang}</span>${shikiCode.replace(/`/g, '&#96;').replace(/\{/g, '&#123;')}</div>\`}`;
}

const config = {
	extensions: ['.md', '.svx'],
	smartypants: false,
	rehypePlugins: [slug, [autolink, autolinkOptions]],
	highlight: {
		highlighter
	}
};

export default config;
