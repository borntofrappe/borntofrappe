import { readFileSync, writeFileSync } from 'fs';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { remarkFirstLetter } from './plugin.js';

const remarkPlugin = () => (tree) => {
	console.log(tree);
};

const md = readFileSync('index.md', 'utf-8');

const result = remark().use(remarkHtml, { sanitize: false }).use(remarkFirstLetter).processSync(md);

const html = result.value;
writeFileSync('index.html', html);
