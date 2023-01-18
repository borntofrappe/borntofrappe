import { escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';

import icons from './src/lib/utils/icons.js';

const extensions = ['.md', '.svx'];

const smartypants = false;

const layout = {
	blog: 'src/lib/layout/Blog.svelte'
};

const theme = 'rose-pine-moon';
let shikiHighlighter;
(async () => {
	shikiHighlighter = await getHighlighter({ theme });
})();

const highlighter = async (code, lang) => {
	if (!shikiHighlighter) shikiHighlighter = await getHighlighter({ theme });
	const shikiCode = shikiHighlighter.codeToHtml(code, { lang });

	return `<div class="code">
    <span>${lang}${icons[lang] || icons.editor}</span>
    ${escapeSvelte(shikiCode)}
    </div>`;
};

export default {
	extensions,
	smartypants,
	layout,
	highlight: {
		highlighter
	}
};
