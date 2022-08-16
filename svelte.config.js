import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

const mdsvexExtensions = ['.md', '.svx'];
/** @type {import('@sveltejs/kit').Config} */

const config = {
	extensions: ['.svelte', ...mdsvexExtensions],
	preprocess: mdsvex({
		extensions: mdsvexExtensions,
		layout: { blog: 'src/lib/layout/Blog.svelte' }
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;
