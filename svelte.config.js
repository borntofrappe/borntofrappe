import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: mdsvex(mdsvexConfig),
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		alias: {
			$blog: 'src/blog'
		}
	},
	onwarn: (warning, handler) => {
		if (
			warning.message === 'A11y: <figcaption> must be an immediate child of <figure>' &&
			/element="figure"/.test(warning.frame)
		) {
			return;
		}
		handler(warning);
	}
};

export default config;
