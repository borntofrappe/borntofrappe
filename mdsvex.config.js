import { escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';
import icons from './src/lib/utils/icons.js';

const extensions = ['.md', '.svx'];

const smartypants = false;

const layout = {
	blog: 'src/lib/layout/Blog.svelte'
};

const theme = 'rose-pine-moon';
// roundabout way to reduce the time it takes to highlight code blocks asynchronously
// load the highlighter once
let highlighter;
(async () => {
	highlighter = await getHighlighter({ theme });
})();
const highlight = {
	highlighter: async (code, lang) => {
		if (!highlighter) highlighter = await getHighlighter({ theme });
		const html = highlighter.codeToHtml(code, { lang });

		return `<div class="code"><span>${lang}${icons[lang] || icons.editor}</span>${escapeSvelte(
			html
		)}</div>`;
	}
};

export default {
	extensions,
	smartypants,
	layout,
	highlight
};
