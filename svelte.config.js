import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: mdsvex({
		extensions: ['.md', '.svx'],
		smartypants: false
	}),
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter({
			split: false
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
