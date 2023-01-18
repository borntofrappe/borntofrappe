import { visit } from 'unist-util-visit';
import { getHighlighter } from 'shiki';
import icons from './src/lib/utils/icons.js';

export const remarkCode = () => async (tree) => {
	const theme = 'rose-pine-moon';
	const highlighter = await getHighlighter({ theme });

	visit(tree, 'code', (node) => {
		const { lang, value } = node;

		const code = value
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&#123;/g, '{')
			.replace(/&#125;/g, '}');

		const string = highlighter
			.codeToHtml(code, { lang })
			.replace(/{/g, '&#123;')
			.replace(/}/g, '&#125;');

		const html = `<div class="code"><span>${lang || 'text'}${
			icons[lang] || icons.editor
		}</span>${string}</div>`;

		node.type = 'html';
		node.value = html;
	});
};
