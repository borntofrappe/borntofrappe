const adapter = require('@sveltejs/adapter-netlify');
const { mdsvex } = require('mdsvex');
const mdsvexConfig = require('./mdsvex.config.cjs');

module.exports = {
	extensions: ['.svelte', '.svx'],
	preprocess: mdsvex(mdsvexConfig),
	kit: {
		adapter: adapter(),
		target: '#svelte',
	}
};
