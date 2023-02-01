export const prerender = true;

import site from '$lib/utils/site.js';
import { content } from '$lib/search/content.server.js';

export async function GET() {
	const { title, description, origin, author } = site;
	const { name, email } = author;

	const blog = await content();

	const feed = `<?xml version="1.0" encoding="utf-8"?>
	<feed xmlns="http://www.w3.org/2005/Atom">
		<title>${title}</title>
		<subtitle>${description}</subtitle>
		<link href="${origin}/feed.xml" rel="self" />
		<link href="${origin}/" />
		<id>${origin}/</id>
		<updated>${new Date().toISOString()}</updated>
		<author>
			<name>${name}</name>
			<email>${email}</email>
        </author>
		${blog
			.map(
				({ url, title, date, description }) => `<entry>
			<title>${title}</title>
			<link href="${url}" />
			<id>${url}</id>
			<updated>${date.toISOString()}</updated>
			<summary>${description}</summary>
		</entry>`
			)
			.join('')}
	</feed>`;

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
