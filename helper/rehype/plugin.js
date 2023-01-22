import { visit } from 'unist-util-visit';

export const rehypeFirstLetter = () => (tree) => {
	visit(tree, 'element', (node, i, parent) => {
		if (node.tagName !== 'h1') return;

		const paragraph = parent.children.find((d) => d.tagName === 'p');
		if (!paragraph) return;

		const { children } = paragraph;

		const textIndex = children.findIndex((d) => d.type === 'text');

		const { value } = children[textIndex];

		const b = {
			type: 'element',
			tagName: 'b',
			children: [
				{
					type: 'text',
					value: value[0]
				}
			]
		};

		const text = {
			type: 'text',
			value: value.slice(1)
		};

		paragraph.children = [
			...children.slice(0, textIndex),
			b,
			text,
			...children.slice(textIndex + 1)
		];
	});
};
