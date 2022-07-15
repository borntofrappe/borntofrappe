import adapter from '@sveltejs/adapter-auto';
import { resolve } from 'path';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

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
