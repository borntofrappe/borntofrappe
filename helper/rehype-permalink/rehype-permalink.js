import { visit } from 'unist-util-visit';
import slug from 'slug';

export default () => (tree) => {
	const tagNames = ['h2', 'h3', 'h4'];
	visit(tree, 'element', (node) => {
		if (!tagNames.includes(node.tagName)) return;

		let value = '';

		visit(node, 'text', (text) => {
			value += text.value;
		});

		const id = slug(value);
		const href = `#${id}`;

		const span = {
			type: 'element',
			tagName: 'span',
			properties: {
				className: 'visually-hidden'
			},
			children: [
				{
					type: 'text',
					value: 'Permalink'
				}
			]
		};

		const a = {
			type: 'element',
			tagName: 'a',
			properties: {
				href
			},
			children: [span]
		};

		node.properties.id = id;

		if (!node.properties.className) node.properties.className = [];
		if (typeof node.properties.className === 'string')
			node.properties.className = [node.properties.className];
		node.properties.className.push('permalink');

		node.children = [...node.children, a];
	});
};
