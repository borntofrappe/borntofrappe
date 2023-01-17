import { escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';

import icons from './src/lib/utils/icons.js';

const extensions = ['.md', '.svx'];

const smartypants = false;

const layout = {
	blog: 'src/lib/layout/Blog.svelte'
};

const highlighter = async (code, lang) => {
	const shikiHighlighter = await getHighlighter({ theme: 'rose-pine-moon' });
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
