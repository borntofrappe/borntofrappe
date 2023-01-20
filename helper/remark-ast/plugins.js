import { visit } from 'unist-util-visit';

export const remarkCode = () => (tree) => {
	visit(tree, 'code', (node) => {
		const lang = node.lang || 'text';
		const value = node.value.replace(/</g, '&#60;');

		const html = `<div class="code"><span>${lang || 'text'}</span><pre><code>${value}</code></pre>
		  </div>`;

		node.type = 'html';
		node.value = html;
	});
};
