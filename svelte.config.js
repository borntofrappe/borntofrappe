import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

const mdsvexConfig = {
	extensions: ['.md', '.svx'],
	frontmatter: {
		marker: '-',
		type: 'yaml',
		parse: (frontmatter) =>
			Object.fromEntries(frontmatter.split('\n').map((line) => line.split(/: /, 2)))
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: mdsvex(mdsvexConfig),
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter()
	}
};

export default config;
