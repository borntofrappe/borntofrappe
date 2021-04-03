const netlify = require('@sveltejs/adapter-netlify');
const { mdsvex } = require('mdsvex');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	extensions: ['.svelte', '.svx'],
	preprocess: mdsvex(),
	kit: {
		adapter: netlify(),
		target: '#svelte',
	}
};
