import { readFileSync, writeFileSync } from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { rehypeFirstLetter } from './plugin.js';

const rehypePlugin = () => (tree) => {
	console.log(tree);
};

const md = readFileSync('index.md', 'utf-8');

const result = unified()
	.use(remarkParse)
	.use(remarkHtml)
	.use(remarkRehype)
	.use(rehypeStringify)
	.use(rehypeFirstLetter)
	.processSync(md);

const html = result.value;
writeFileSync('index.html', html);
