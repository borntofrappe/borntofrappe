import { visit } from 'unist-util-visit';
import { getHighlighter } from 'shiki';

export const remarkCode = () => (tree) => {
	visit(tree, 'code', (node) => {
		const lang = node.lang || 'text';
		const value = node.value.replace(/</g, '&#60;');

		const html = `<div class="code"><span>${lang}</span><pre><code>${value}</code></pre></div>`;

		node.type = 'html';
		node.value = html;
	});
};

export const remarkCodeHighlight = () => async (tree) => {
	const highlighter = await getHighlighter({ theme: 'nord' });

	visit(tree, 'code', (node) => {
		const lang = node.lang || 'text';
		const code = highlighter.codeToHtml(node.value, { lang });

		const html = `<div class="code"><span>${lang}</span>${code}</pre></div>`;

		node.type = 'html';
		node.value = html;
	});
};
