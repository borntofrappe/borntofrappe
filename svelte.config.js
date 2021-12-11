import adapter from '@sveltejs/adapter-netlify';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';

async function highlighter(code, lang) {
	const shikiHighlighter = await getHighlighter({ theme: 'dracula-soft' });
	const snippet = escapeSvelte(shikiHighlighter.codeToHtml(code, lang));

	return `{@html \`${snippet}\`}`;
}

const mdsvexConfig = {
	extensions: ['.md', '.svx'],
	highlight: {
		highlighter
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: mdsvex(mdsvexConfig),
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
