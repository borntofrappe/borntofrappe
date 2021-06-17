/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
