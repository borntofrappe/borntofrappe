import { remarkCode } from './plugins.js';

const extensions = ['.md', '.svx'];

const smartypants = false;

const layout = {
	blog: 'src/lib/layout/Blog.svelte'
};

const highlight = false;

const remarkPlugins = [remarkCode];

export default {
	extensions,
	smartypants,
	layout,
	highlight,
	remarkPlugins
};
