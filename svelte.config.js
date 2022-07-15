import adapter from '@sveltejs/adapter-auto';
import { resolve } from 'path';
import { mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import autolinkHeadings from 'rehype-autolink-headings';

const mdsvexConfig = {
	extensions: ['.md', '.svx'],
	smartypants: false,
	layout: {
		blog: 'src/lib/layout/Blog.svelte'
	},
	rehypePlugins: [slug, autolinkHeadings]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: mdsvex(mdsvexConfig),
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$utils: resolve('./src/utils')
				}
			}
		}
	}
};

export default config;
