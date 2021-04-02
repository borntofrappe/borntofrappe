const adapter = require('@sveltejs/adapter-netlify');
const pkg = require('./package.json');
const { mdsvex } = require('mdsvex');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	extensions: ['.svelte', '.svx'],
	preprocess: mdsvex(),
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
