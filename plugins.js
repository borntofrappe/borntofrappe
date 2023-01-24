import { visit } from 'unist-util-visit';
import { getHighlighter } from 'shiki';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import icons from './src/lib/utils/icons.js';
import slug from 'slug';

export const rehypePermalink = () => (tree) => {
	const tagNames = ['h2', 'h3', 'h4'];
	visit(tree, 'element', (node) => {
		if (!tagNames.includes(node.tagName)) return;

		let value = '';

		visit(node, 'text', (text) => {
			value += text.value;
		});

		const id = slug(value);
		const href = `#${id}`;

		node.properties.id = id;
		if (!node.properties.className) node.properties.className = [];
		node.properties.className.push('permalink');

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

		node.children = [...node.children, a];
	});
};

export const rehypeCodeHighlight = () => async (tree) => {
	const theme = 'rose-pine-moon';
	const highlighter = await getHighlighter({ theme });

	const htmlParser = unified().use(rehypeParse, { fragment: true });
	const svgParser = unified().use(rehypeParse, { fragment: true, space: 'svg' });

	const classPrefix = 'language-';

	visit(tree, 'element', (node) => {
		if (node.tagName !== 'pre') return;
		if (
			node.properties &&
			node.properties.className &&
			node.properties.className.startsWith(classPrefix)
		)
			return;

		const [child] = node.children;

		if (child.tagName !== 'code') return;

		let lang = 'text';
		if (child.properties && child.properties.className) {
			lang = child.properties.className[0].split(classPrefix)[1];
		}

		const { value } = child.children[0];

		const code = value
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&#123;/g, '{')
			.replace(/&#125;/g, '}');

		const html = highlighter.codeToHtml(code, { lang });

		const root = htmlParser.parse(html);
		const icon = icons[lang] || icons.editor;
		const { children: svg } = svgParser.parse(icon);

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

		children[0].properties = {
			className: `${classPrefix}${lang}`
		};

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
					},
					...svg
				]
			},
			...children
		];
	});
};

export const remarkCodeHighlight = () => async (tree) => {
	const theme = 'rose-pine-moon';
	const highlighter = await getHighlighter({ theme });

	const classPrefix = 'language-';

	visit(tree, 'code', (node) => {
		const code = node.value
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&#123;/g, '{')
			.replace(/&#125;/g, '}');

		const lang = node.lang || 'text';
		const classAttribute = `class="${classPrefix}${lang}"`;

		const string = highlighter
			.codeToHtml(code, { lang })
			.replace(/{/g, '&#123;')
			.replace(/}/g, '&#125;')
			.replace(/class=".+?"/, classAttribute);

		const html = `<div class="code"><span>${lang}${
			icons[lang] || icons.editor
		}</span>${string}</div>`;

		node.type = 'html';
		node.value = html;
	});
};
