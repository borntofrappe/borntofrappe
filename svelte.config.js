import adapter from '@sveltejs/adapter-auto';
import { resolve } from 'path';
import { mdsvex, escapeSvelte } from 'mdsvex';
import slug from 'rehype-slug';
import autolinkHeadings from 'rehype-autolink-headings';
import { getHighlighter } from 'shiki';

const highlighter = async (code, lang) => {
	const shikiHighlighter = await getHighlighter({ theme: 'material-palenight' });
	const shikiCode = shikiHighlighter.codeToHtml(code, { lang });

	return escapeSvelte(shikiCode);
};

const mdsvexConfig = {
	extensions: ['.md', '.svx'],
	smartypants: false,
	layout: {
		blog: 'src/lib/layout/Blog.svelte'
	},
	rehypePlugins: [slug, autolinkHeadings],
	highlight: {
		highlighter
	}
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
