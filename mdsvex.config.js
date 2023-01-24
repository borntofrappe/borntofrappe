import { rehypePermalink, rehypeCodeHighlight } from './plugins.js';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const extensions = ['.md', '.svx'];

const smartypants = false;

const layout = {
	blog: 'src/lib/layout/Blog.svelte'
};

const highlight = false;

const rehypePlugins = [rehypePermalink, rehypeCodeHighlight];

export default {
	extensions,
	smartypants,
	layout,
	highlight,
	rehypePlugins
};
