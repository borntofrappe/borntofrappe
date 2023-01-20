import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { remarkCodeHighlight as remarkPlugin } from './plugins.js';
import { readFileSync, writeFileSync } from 'fs';

(async () => {
	const document = readFileSync('index.md', 'utf-8');

	const result = await remark()
		.use(remarkHtml, { sanitize: false })
		.use(remarkPlugin)
		.process(document);

	const innerHTML = result.value;

	writeFileSync(
		'index.html',
		`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>remark-ast</title>
        <style>
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
  
        body {
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;
            --code-color: #D8DEE9;
            --code-background: #2e3440;
        }

        code {
            font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
            monospace;
            font-size: 1em;
        }
  
        .wrapper {
          max-width: 60ch;
          margin: 1rem auto;
        }
  
        .wrapper > * + * {
          margin-top: 1em;
        }
  
        .code {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
  
        .code > * + * {
          margin-top: 0;
        }
  
        .code > span {
          align-self: flex-end;
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-top-left-radius: 0.75rem;
          border-top-right-radius: 0.75rem;
          color: var(--code-color);
          background: var(--code-background);
          font-weight: 700;
        }
  
        .code pre {
          font-size: 1em;
          line-height: 1.5;
          padding: 1rem;
          border-radius: 0.75rem;
          border-top-right-radius: 0;
          color: var(--code-color);
          background: var(--code-background);
          overflow-x: auto;
        }
      </style>
      </head>
      <body>
        <div class="wrapper">
        ${innerHTML}
        </div>
      </body>
    </html>
    `
	);
})();
