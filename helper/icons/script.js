import { extname } from 'path';
import { readdirSync, readFileSync, writeFileSync } from 'fs';

const folder = 'svg';
const file = 'icons.js';

const icons = readdirSync(folder)
	.filter((file) => extname(file) === '.svg')
	.map((file) => {
		const [key] = file.split('.');
		const value = readFileSync(`${folder}/${file}`, 'utf-8')
			.replace(/[\n\r]/g, '')
			.replace(/\>\s+\</g, '><');

		return [key, value];
	});

const data = `export default {${icons
	.map(([key, value]) => `\n\t'${key}': '${value}',`)
	.join('')}\n};`;

writeFileSync(file, data);
console.log(
	`Created '${file}'.\nMove the file in the 'lib' folder to import the syntax where needed.`
);
