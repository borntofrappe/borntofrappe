import { visit } from 'unist-util-visit';
import { getHighlighter } from 'shiki';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
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

export const rehypeCodeHighlight = () => async (tree) => {
	const theme = 'rose-pine-moon';
	const highlighter = await getHighlighter({ theme });

	const htmlParser = unified().use(rehypeParse, { fragment: true });

	visit(tree, 'element', (node) => {
		if (node.tagName !== 'pre') return;
		if (node.properties && node.properties.className && node.properties.className.includes('shiki'))
			return;

		const [child] = node.children;

		if (child.tagName !== 'code') return;

		let lang = 'text';
		if (child.properties && child.properties.className) {
			lang = child.properties.className[0].split(/language-?/)[1];
		}

		const { value } = child.children[0];

		const code = value
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&#123;/g, '{')
			.replace(/&#125;/g, '}');

		const html = highlighter.codeToHtml(code, { lang });

		const root = htmlParser.parse(html);

		visit(
			root,
			'text',
			(t) =>
				(t.value = t.value
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(/{/g, '&#123;')
					.replace(/}/g, '&#125;'))
		);

		const { children } = root;

		node.tagName = 'div';
		node.properties = {
			className: 'code'
		};
		node.children = [
			{
				type: 'element',
				tagName: 'span',
				properties: {},
				children: [
					{
						type: 'text',
						value: lang
					}
				]
			},
			...children
		];
	});
};
