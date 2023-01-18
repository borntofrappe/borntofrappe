import { visit } from 'unist-util-visit';
import { getHighlighter } from 'shiki';
import icons from './src/lib/utils/icons.js';

export const remarkCode = () => async (tree) => {
	const theme = 'rose-pine-moon';
	const highlighter = await getHighlighter({ theme });

	visit(tree, 'code', (node) => {
		const { lang, value } = node;

		const code = highlighter.codeToHtml(value, { lang });

		const html = `<div class="code"><span>${lang || 'text'}${
			icons[lang] || icons.editor
		}</span>${code}</div>`;

		node.type = 'html';
		node.value = html;
	});
};
