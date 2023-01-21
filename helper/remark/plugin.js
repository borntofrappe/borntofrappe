import { visit } from 'unist-util-visit';

export const remarkFirstLetter = () => (tree) => {
	visit(tree, 'heading', (heading, i) => {
		if (heading.depth !== 1) return;
		visit(tree, 'paragraph', (paragraph, j) => {
			if (j !== i + 1) return;
			visit(paragraph, 'text', (node, k) => {
				if (k !== 0) return;

				const { value } = node;
				node.type = 'html';
				node.value = `<strong>${value[0]}</strong>${value.slice(1)}`;
			});
		});
	});
};
