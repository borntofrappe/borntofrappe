import { escapeSvelte } from 'mdsvex';

import slug from 'rehype-slug';
import autolinkHeadings from 'rehype-autolink-headings';

import { getHighlighter } from 'shiki';

import icons from './src/lib/utils/icons.js';

const layout = {
	blog: 'src/lib/layout/Blog.svelte'
};

const autolinkHeadingsConfig = {
	behavior: 'append',
	properties: {},
	content: {
		type: 'element',
		tagName: 'span',
		properties: { className: 'visually-hidden' },
		children: [{ type: 'text', value: 'Permalink' }]
	}
};

const highlighter = async (code, lang) => {
	const shikiHighlighter = await getHighlighter({ theme: 'material-palenight' });
	const shikiCode = shikiHighlighter.codeToHtml(code, { lang });

	return `<div class="code">
    <span>${lang}${icons[lang] || icons.editor}</span>
    ${escapeSvelte(shikiCode)}
    </div>`;
};

export default {
	extensions: ['.md', '.svx'],
	smartypants: false,
	layout,
	rehypePlugins: [slug, [autolinkHeadings, autolinkHeadingsConfig]],
	highlight: {
		highlighter
	}
};
