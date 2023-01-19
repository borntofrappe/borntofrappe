import { remarkCode } from './plugins.js';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const extensions = ['.md', '.svx'];

const smartypants = false;

const layout = {
	blog: 'src/lib/layout/Blog.svelte'
};

const highlight = false;

const remarkPlugins = [remarkCode];

const rehypePlugins = [
	rehypeSlug,
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
			},
			test: (node) => node.tagName !== 'h1'
		}
	]
];

export default {
	extensions,
	smartypants,
	layout,
	highlight,
	remarkPlugins,
	rehypePlugins
};
