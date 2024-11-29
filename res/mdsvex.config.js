import { rehypePermalink } from './plugins.js';

const extensions = ['.md', '.svx'];

const smartypants = false;

const layout = {
	blog: 'src/lib/layout/Blog.svelte'
};

const rehypePlugins = [rehypePermalink];

export default {
	extensions,
	smartypants,
	layout,
	rehypePlugins
};
