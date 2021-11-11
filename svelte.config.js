import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: mdsvex({ extensions: ['.md'], smartypants: false }),
	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
