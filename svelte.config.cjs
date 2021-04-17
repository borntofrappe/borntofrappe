const adapter = require('@sveltejs/adapter-netlify');
const pkg = require('./package.json');
const { mdsvex } = require('mdsvex');
const mdsvexConfig = require('./mdsvex.config.cjs')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter(),
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
