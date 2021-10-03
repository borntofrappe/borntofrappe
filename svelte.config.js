import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.svx', '.md'],
    preprocess: mdsvex({
        extensions: ['.svx', '.md']
    }),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
        target: '#svelte'
	}
};

export default config;
