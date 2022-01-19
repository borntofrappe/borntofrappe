import adapter from '@sveltejs/adapter-netlify';
import { escapeSvelte, mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import autoLinkHeadings from 'rehype-autolink-headings';
import { getHighlighter } from 'shiki';

const autoLinkHeadingsConfig = {
	behavior: 'append',
	properties: {},
	content: {
		type: 'element',
		tagName: 'span',
		properties: { className: 'visually-hidden' },
		children: [{ type: 'text', value: 'Permalink' }]
	}
};

const icons = {
	bug: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><g transform="scale(0.8)"><g fill="none" stroke-width="16"><g transform="translate(0 13.5)"><path d="M 34 0 h -68"/><path transform="rotate(45)" d="M 40 0 h -80"/><path transform="rotate(-45)" d="M 40 0 h -80"/></g></g><g fill="currentColor" stroke-width="8"><path d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /><path d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /></g></g></g></svg>',
	css: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z"/></g></svg>',
	d3: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="m-15 -50v0.050781a61 61 0 0 1 18.1 19.949h16.9a10 10 0 0 1 10 10 10 10 0 0 1-10 10h-9.8262a61 61 0 0 1 0.82617 10 61 61 0 0 1-0.92969 10h9.9297a10 10 0 0 1 10 10 10 10 0 0 1-10 10h-16.986a61 61 0 0 1-18.014 19.93v0.070312h35a30 30 0 0 0 30-30 30 30 0 0 0-7.6621-20.02 30 30 0 0 0 7.6621-19.98 30 30 0 0 0-30-30h-35z"/><path d="m-50 -50v20a30 30 0 0 1 30 30 30 30 0 0 1-30 30v20a50 50 0 0 0 50-50 50 50 0 0 0-50-50z"/></g></svg>',
	git: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-.07-50a5 5 0 00-3.461 1.465l-11.55 11.55 12.49 12.49a7 7 0 012.604-.506 7 7 0 017 7 7 7 0 01-.51 2.6l8.906 8.906A7 7 0 0118.013-7a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 01.508-2.602L2.763-11.36v22.92a7 7 0 014.25 6.436 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 014.25-6.428v-23.14a7 7 0 01-4.25-6.436 7 7 0 01.508-2.602L-18.97-33.1-48.52-3.55a5 5 0 000 7.07l45 45a5 5 0 007.07 0l45-45a5 5 0 000-7.07l-45-45a5 5 0 00-3.61-1.465z"/></g></svg>',
	html: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.004 85L.001 50.001l34.998-15.003L40.003-50h-80.007zm14.003 17.5h52l-.65 11.049h-39.649l.651 11.054H24.7L22.751 22.75 0 32.503l-22.75-9.752-.65-11.05h11.049l.325 5.525 12.026 5.2 12.026-5.2.977-16.574H-24.05L-25.998-32.5z"/></g></svg>',
	js: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-50-50V50.8h38.4c-8.88 0-16.08-7.2-16.08-16.08v-5.04h10.08v5.04c0 3.36 2.64 6 6 6s6-2.64 6-6V.88H4.48v33.84c0 8.88-7.2 16.08-16.08 16.08H9.52V40.72H24.64c2.88 0 5.04-2.208 5.04-5.04s-2.184-5.04-5.04-5.04c-8.4 0-15.12-6.72-15.12-15.12S16.24.4 24.64.4h13.2v10.08h-13.2c-2.88 0-5.04 2.208-5.04 5.04s2.184 5.04 5.04 5.04c8.4 0 15.12 6.72 15.12 15.12S33.04 50.8 24.64 50.8h24V-50h-100.8z"/></g></svg>',
	json: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="10" ><path d="M -17.5 -45 a 20 20 0 0 0 -20 20 v 12.5 a 12.5 12.5 0 0 1 -12.5 12.5 12.5 12.5 0 0 1 12.5 12.5 v 12.5 a 20 20 0 0 0 20 20" /><path transform="scale(-1 1)" d="M -17.5 -45 a 20 20 0 0 0 -20 20 v 12.5 a 12.5 12.5 0 0 1 -12.5 12.5 12.5 12.5 0 0 1 12.5 12.5 v 12.5 a 20 20 0 0 0 20 20" /></g><g fill="currentColor" stroke="none"><circle r="4" /><circle cx="-16" r="4" /><circle cx="16" r="4" /></g></svg>',
	lua: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="m0 -34a34 34 0 0 0-34 34 34 34 0 0 0 34 34 34 34 0 0 0 34-34 34 34 0 0 0-34-34zm10 12a12 12 0 0 1 12 12 12 12 0 0 1-12 12 12 12 0 0 1-12-12 12 12 0 0 1 12-12z" /><circle cx="36" cy="-36" r="12" /></g><circle r="48.5" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="8" stroke-dashoffset="9.5" stroke-linecap="round" /></svg>',
	node: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"><path d="M -25 33 l -18 -9 v -48 l 44 -22 44 22 v 48 l -44 22 -7 -3.5" /><path d="M -14 -19 v 42.5 a 10 10 0 0 1 -10 10" /><path d="M 24 -9 a 10 10 0 0 0 -20 0 10 10 0 0 0 10 10 10 10 0 0 1 10 10 10 10 0 0 1 -20 0" /></g></svg>',
	python:
		'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="m-6 -47.5s-25 0-25 12.5v14h30v2.5h-38c-11 0-11 20-11 20s0 20 11 20h17.5v-12.5a10 10 0 0 1 10-10h11.5 9a10 10 0 0 0 10-10v-24c0-12.5-25-12.5-25-12.5zm-13 8.5a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" /><path d="m21.5 -21.5v12.5a10 10 0 0 1-10 10h-11.5-9a10 10 0 0 0-10 10v24c0 12.5 25 12.5 25 12.5s25 0 25-12.5v-14h-30v-2.5h38c11 0 11-20 11-20s0-20-11-20h-17.5zm-2.5 50.5a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" /></g></svg>',
	react:
		'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8"><ellipse transform="rotate(30)" rx="18" ry="46" /><ellipse transform="rotate(-30)" rx="18" ry="46" /><ellipse transform="rotate(90)" rx="18" ry="46" /></g><g fill="currentColor" stroke="none"><circle r="8" /></g></svg>',
	svelte:
		'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g transform="rotate(-30)"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"><path d="M 30 -10 h -30 h 8 a 21 21 0 0 1 0 42 h -37 a 21 21 0 0 1 0 -42" /><path transform="scale(-1 -1)" d="M 30 -10 h -30 h 8 a 21 21 0 0 1 0 42 h -37 a 21 21 0 0 1 0 -42" /></g></g></svg>',
	svg: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="currentColor" stroke-width="8"><path d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(45)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(90)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(135)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /></g></svg>'
};

async function highlighter(code, lang) {
	const shikiHighlighter = await getHighlighter({ theme: 'dracula-soft' });
	const html = escapeSvelte(shikiHighlighter.codeToHtml(code, { lang }));
	return `{@html \`<div class="code">
    <span>${lang}${icons[lang] || icons.bug}</span>
    ${html}
  </div>\`}`;
}

const mdsvexConfig = {
	extensions: ['.md', '.svx'],
	smartypants: false,
	rehypePlugins: [slug, [autoLinkHeadings, autoLinkHeadingsConfig]],
	highlight: {
		highlighter
	},
	frontmatter: {
		marker: '-',
		type: 'yaml',
		parse: (frontmatter) =>
			Object.fromEntries(frontmatter.split('\n').map((line) => line.split(/: ?/, 2)))
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: mdsvex(mdsvexConfig),
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter({
			split: false
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
