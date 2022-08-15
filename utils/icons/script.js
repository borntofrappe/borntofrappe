/**
 * read *.svg documents in the input folder
 * write icons.js in the output folder to export an object
 * use the name of the documents as key, the content as value
 */
import { extname } from 'path';
import { existsSync, mkdirSync, writeFileSync, readFileSync, readdirSync } from 'fs';

const inputFolder = 'svg';
const outputFolder = '../../src/lib/utils';

if (!existsSync(outputFolder)) {
	mkdirSync(outputFolder, { recursive: true });
}

const icons = readdirSync(inputFolder)
	.filter((file) => extname(file) === '.svg')
	.map((file) => {
		const [key] = file.split('.');
		const value = readFileSync(`${inputFolder}/${file}`, 'utf-8')
			.replace(/[\n\r]/g, '')
			.replace(/\>\s+\</g, '><');
		return [key, value];
	});

const file = `${outputFolder}/icons.js`;
const data = `export default {${icons
	.map(([key, value]) => `\n\t'${key}': '${value}',`)
	.join('')}\n};`;

writeFileSync(file, data);
console.log(`Processed ${icons.length} icons.\nRefer to '${file}'.`);
